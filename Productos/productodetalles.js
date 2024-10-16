import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Ecomerce from '@/components/component/ecomerce';
import Catalogo from '@/components/component/catalogo';
import Carrito from '@/components/component/carrito';
import Alert from '@/components/component/Alert';
import Nosotros from '@/components/component/nosotros';

function DetallesProducto() {
  const router = useRouter();
  const { id } = router.query;
  const [producto, setProducto] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('detallesProducto');

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

  if (!producto) {
    return <div>Cargando...</div>;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Ecomerce setCurrentPage={setCurrentPage} />;
      case 'catalogo':
        return <Catalogo addToCart={addToCart} />;
      case 'carrito':
        return (
          <div>
            <Carrito items={carrito} addToCart={addToCart} removeFromCart={removeFromCart} />
          </div>
        );
      case 'nosotros':
        return <Nosotros />;
      case 'detallesProducto':
        return (
          <div>
            <h1>{producto.nombre}</h1>
            <p>Precio: ${producto.precio}</p>
            <p>Descripción: {producto.descripcion}</p>
            <button onClick={() => addToCart(producto)}>Añadir al carrito</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Alert message="Producto agregado al carrito!" visible={alertVisible} />

      <header className="custom-navbar">
        <a className="flex items-center justify-center" href="#" onClick={() => setCurrentPage('home')}>
          <img className="h-6 w-6" src='/img/logoo.png' alt="Pilcha Retro"></img>
          <span className="sr-only">Retro Football Shirts</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={() => setCurrentPage('home')}>
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={() => setCurrentPage('catalogo')}>
            Catalog
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={() => setCurrentPage('nosotros')}>
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={() => setCurrentPage('carrito')}>
            Cart <span className="cart-count">({carrito.length})</span>
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {renderPage()}
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <p className="text-sm">© 2024 Pilcha Retro</p>
            <a className="hover:text-gray-400" href="#">
              Terms and Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DetallesProducto;
