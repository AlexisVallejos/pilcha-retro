import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Alert from '@/components/component/Alert'; 
import Carrito from '@/components/component/carrito';  
import Nosotros from '@/components/component/nosotros';  
import Catalogo from '@/components/component/catalogo';  // Importa el catálogo

function DetallesProducto() {
  const router = useRouter();
  const { id } = router.query;
  const [producto, setProducto] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('detalles');

  useEffect(() => {
    const fetchProducto = async () => {
      const response = await fetch(`/api/productos/${id}`);
      const data = await response.json();
      setProducto(data);
    };

    if (id) {
      fetchProducto();
    }
  }, [id]);

  const addToCart = (producto) => {
    setCarrito((prevCarrito) => {
      const itemExistente = prevCarrito.find((item) => item.id === producto.id);

      if (itemExistente) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });

    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
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
          <div>
            <h1>{producto?.nombre}</h1>
            <p>Precio: ${producto?.precio}</p>
            <p>Descripción: {producto?.descripcion}</p>
            <button onClick={() => addToCart(producto)}>Añadir al carrito</button>
          </div>
        );
      case 'carrito':
        return <Carrito items={carrito} addToCart={addToCart} handleBuy={handleBuy} />;
      case 'catalogo': // Añade el caso para catálogo
        return <Catalogo addToCart={addToCart} />;
      case 'nosotros':
        return <Nosotros />;
      default:
        return null;
    }
  };

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Alert message="Producto agregado al carrito!" visible={alertVisible} />
      <header>
        <nav>
          <button onClick={() => setCurrentPage('detalles')}>Detalles del producto</button>
          <button onClick={() => setCurrentPage('carrito')}>Ir al carrito</button>
          <button onClick={() => setCurrentPage('catalogo')}>Catálogo</button> {/* Añadir catálogo */}
          <button onClick={() => setCurrentPage('nosotros')}>About</button>
        </nav>
      </header>

      <main>{renderPage()}</main>
    </div>
  );
}

export default DetallesProducto;
