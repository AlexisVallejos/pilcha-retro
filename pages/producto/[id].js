"use client";

import { useRouter } from 'next/router';
import PDetalles from '@/components/component/pdetalles';  // Asegúrate de que la ruta es correcta
import Link from 'next/link';
import { useState } from 'react';
import Alert from '@/components/component/Alert'; // Importa el componente Alert
import '@/app/globals.css';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [carrito, setCarrito] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);

  if (!id) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Alert message="Producto agregado al carrito!" visible={alertVisible} />

      {/* Navbar */}
      <header className="custom-navbar">
        <Link href="/" legacyBehavior>
          <a className="flex items-center justify-center">
            <img className="h-6 w-6" src='/img/logoo.png' alt="Pilcha Retro" />
            <span className="sr-only">Retro Football Shirts</span>
          </a>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" legacyBehavior>
            <a className="text-sm font-medium hover:underline underline-offset-4">Home</a>
          </Link>
          <Link href="/catalogo" legacyBehavior>
            <a className="text-sm font-medium hover:underline underline-offset-4">Catalog</a>
          </Link>
          <Link href="/nosotros" legacyBehavior>
            <a className="text-sm font-medium hover:underline underline-offset-4">About</a>
          </Link>
          <Link href="/carrito" legacyBehavior>
            <a className="text-sm font-medium hover:underline underline-offset-4">Cart <span className="cart-count">({carrito.length})</span></a>
          </Link>
        </nav>
      </header>

      {/* Página de detalles del producto */}
      <main>
        <PDetalles id={id} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <p className="text-sm">© 2024 Pilcha Retro</p>
            <Link href="/terms" legacyBehavior>
              <a className="hover:text-gray-400">Térms and Service</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
