import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Alert from '@/components/component/Alert';
import Carrito from '@/components/component/carrito';
import Nosotros from '@/components/component/nosotros';
import Catalogo from  '@/components/component/catalogo'

function DetallesProducto() {
  const router = useRouter();
  const { id } = router.query;
  const [producto, setProducto] = useState(null);
  const [carrito, setCarrito] = useState(() => {
    // Cargar el carrito desde localStorage si existe
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('carrito');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('detalles');

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`/api/productos/${id}`);
        if (!response.ok) {
          throw new Error('Error al cargar el producto');
        }
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (id) {
      fetchProducto();
    }
  }, [id]);

  useEffect(() => {
    // Guardar el carrito en localStorage cada vez que cambie
    if (typeof window !== 'undefined') {
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }, [carrito]);

  const addToCart = (productoToAdd) => {
    if (!productoToAdd) return;
    
    setCarrito(prevCarrito => {
      const itemExistente = prevCarrito.find(item => item.id === productoToAdd.id);
      
      if (itemExistente) {
        return prevCarrito.map(item =>
          item.id === productoToAdd.id 
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      
      return [...prevCarrito, { ...productoToAdd, cantidad: 1 }];
    });

    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  const removeFromCart = (productoId) => {
    setCarrito(prevCarrito => {
      const itemExistente = prevCarrito.find(item => item.id === productoId);

      if (itemExistente && itemExistente.cantidad > 1) {
        return prevCarrito.map(item =>
          item.id === productoId
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        );
      }
      return prevCarrito.filter(item => item.id !== productoId);
    });
  };

  const handleBuy = async () => {
    try {
      const response = await fetch('http://localhost:3000/create_preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Productos del carrito',
          quantity: 1,
          price: carrito.reduce((total, item) => total + item.cantidad * item.precio, 0),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.id) {
        window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=${data.id}`;
      } else {
        alert('Hubo un error al proceder con el pago. Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al proceder con la compra:', error);
      alert('Hubo un error al proceder con el pago. Intenta nuevamente.');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'detalles':
        return (
          <div className="p-4">
            {producto && (
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h1 className="text-2xl font-bold mb-4">{producto.nombre}</h1>
                  <p className="text-xl mb-4">Precio: ${producto.precio}</p>
                  <p className="mb-4">Descripción: {producto.descripcion}</p>
                  <button 
                    onClick={() => addToCart(producto)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      case 'carrito':
        return <Carrito items={carrito} addToCart={addToCart} removeFromCart={removeFromCart} handleBuy={handleBuy} />;
      case 'catalogo':
        return <Catalogo addToCart={addToCart} />;
      case 'nosotros':
        return <Nosotros />;
      default:
        return null;
    }
  };

  if (!producto && currentPage === 'detalles') {
    return <div className="text-center p-4">Cargando...</div>;
  }

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default DetallesProducto;
