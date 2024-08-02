"use client";

import Link from 'next/link';
import { useState } from 'react';
import Ecomerce from '@/components/component/ecomerce';
import Catalogo from '@/components/component/catalogo';
import Carrito from '@/components/component/carrito';
import Alert from '@/components/component/Alert';
import Nosotros from '@/components/component/nosotros';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [carrito, setCarrito] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);

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

  const removeFromCart = (productoId) => {
    setCarrito((prevCarrito) => {
      const itemExistente = prevCarrito.find((item) => item.id === productoId);

      if (itemExistente && itemExistente.cantidad > 1) {
        return prevCarrito.map((item) =>
          item.id === productoId
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        );
      } else {
        return prevCarrito.filter((item) => item.id !== productoId);
      }
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
          quantity: 1, // Ajustar según la cantidad total de productos
          price: carrito.reduce((total, item) => total + item.cantidad * item.precio, 0), // Ajustar según el precio total
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.id) {
        window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=${data.id}`;
      } else {
        console.error('Error al crear la preferencia', data);
        alert('Hubo un error al proceder con el pago. Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al proceder con la compra:', error);
      alert('Hubo un error al proceder con el pago. Intenta nuevamente.');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Ecomerce setCurrentPage={setCurrentPage} />;
      case 'catalogo':
        return <Catalogo addToCart={addToCart} />;
      case 'carrito':
        return (
          <div>
            <Carrito items={carrito} addToCart={addToCart} removeFromCart={removeFromCart} handleBuy={handleBuy} />
          </div>
        );
        case 'nosotros':
      return <Nosotros />;

      default:
        return null;
    }
  };

  return (
    <div>
      <Alert message="Producto agregado al carrito!" visible={alertVisible} />
        

      <header className="custom-navbar">
        <a className="flex items-center justify-center" href="#" onClick={() => setCurrentPage('home')}>
        <img className="h-6 w-6" src='/img/logoo.png' alt="Pilcha Retro">

          </img>
        
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
            <Link href="#" legacyBehavior>
              <a className="hover:text-gray-400">Terminos y Servicio</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}

export default App;