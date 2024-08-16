import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

// Catálogo de productos
const productos = [
  { 
    id: 1, 
    nombre: 'Napoli 87-88', 
    precio: 100, 
    brand: 'Adidas', 
    category: 'Serie A',
    imagen: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1021,h_1021/https://marcasjerez.com/wp-content/uploads/2022/07/0d8db8ae.jpg',
    descripcion: 'won the Coppa Italia. DIEGO MARADONA led Napoli to their first Scudetto',
    detalles: 'Material: 100% poliéster, Tallas: S-XL'
  },
  { 
    id: 2, 
    nombre: 'Argentina 1986', 
    precio: 120, 
    brand: 'Nike', 
    category: 'Premier League',
    imagen: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600,h_600/https://marcasjerez.com/wp-content/uploads/2022/02/fcbe5f89.jpg',
    descripcion: 'Argentina won the 1986 World Cup in Mexico, with Maradona leading the team to their second World Cup'
  },
  { 
    id: 3, 
    nombre: 'Real Madrid 06-07', 
    precio: 110, 
    brand: 'Adidas', 
    category: 'La Liga',
    imagen: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600,h_570/https://marcasjerez.com/wp-content/uploads/2024/02/adc37fbd.jpeg',
    descripcion: 'La Liga (Primera División): They won the La Liga title, finishing in first place. It was their 30th league title'
  },
  { 
    id: 4, 
    nombre: 'Inter Del Milan 09-10', 
    precio: 90, 
    brand: 'Umbro', 
    category: 'Serie A',
    imagen: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600,h_600/https://marcasjerez.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-11-at-18.24.15.jpeg',
    descripcion: 'the club achieved the treble, winning Serie A, Coppa Italia, and Champions League. This historic achievement marked one of the most successful seasons in the club’s history'
  },
  { 
    id: 5, 
    nombre: 'Arsenal 88-99', 
    precio: 35, 
    brand: 'Adidas', 
    category: 'Premier League',
    imagen: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600,h_600/https://marcasjerez.com/wp-content/uploads/2021/07/8ba0187c.jpg',
    descripcion: 'First Division (1990-91), FA Cup (1992-93), League Cup (1986-87), FA Community Shield (1991)'
  },
  { 
    id: 6, 
    nombre: 'Barcelona 1999', 
    precio: 80, 
    brand: 'Nike', 
    category: 'La Liga',
    imagen: 'https://marcasjerez.com/wp-content/uploads/2021/07/fa2fc5c9-900x900.jpg',
    descripcion: 'The 1998-99 La Liga was unusual. Barça won the championship despite 14 slip-ups (7 draws and 7 losses)'
  },
  // Otros productos...
];

export default function PDetalles() {
  const router = useRouter();
  const { id } = router.query;
  
  const [carrito, setCarrito] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const producto = productos.find((item) => item.id === parseInt(id));

  const handleAgregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const handleAgregarFavoritos = (producto) => {
    setFavoritos([...favoritos, producto]);
  };

  if (!producto) {
    return <p>Producto no encontrado o cargando...</p>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="grid gap-4">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            width={600}
            height={600}
            className="w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "600/600", objectFit: "cover" }}
          />
          <div className="grid grid-cols-3 gap-4">
            {/* Thumbnails opcionales */}
            <img
              src={producto.imagen}
              alt="Product Thumbnail"
              width={150}
              height={150}
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "150/150", objectFit: "cover" }}
            />
            <img
              src={producto.imagen}
              alt="Product Thumbnail"
              width={150}
              height={150}
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "150/150", objectFit: "cover" }}
            />
            <img
              src={producto.imagen}
              alt="Product Thumbnail"
              width={150}
              height={150}
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "150/150", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="grid gap-6">
          <div>
            <h1 className="text-3xl font-bold">{producto.nombre}</h1>
            <p className="text-muted-foreground text-lg">
              {producto.descripcion}
            </p>
          </div>
          <div className="grid gap-4">
            <p>{producto.detalles}</p>
          </div>
          <div className="flex items-center gap-4">
            <Button size="lg" onClick={() => handleAgregarCarrito(producto)}>Añadir al carrito</Button>
            <Button size="lg" variant="outline" onClick={() => handleAgregarFavoritos(producto)}>
              <HeartIcon className="w-4 h-4 mr-2" />
              Añadir a favoritos
            </Button>
          </div>
        </div>
      </div>

      {/* Productos relacionados */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos
            .filter((item) => item.category === producto.category && item.id !== producto.id)
            .map((relacionado) => (
              <div key={relacionado.id} className="grid gap-4">
                <Link href={`/producto/${relacionado.id}`}>
                  <img
                    src={relacionado.imagen}
                    alt={relacionado.nombre}
                    width={300}
                    height={300}
                    className="w-full rounded-lg overflow-hidden"
                    style={{ aspectRatio: "300/300", objectFit: "cover" }}
                  />
                  <div>
                    <h3 className="font-semibold">{relacionado.nombre}</h3>
                    <p className="text-muted-foreground">{relacionado.descripcion}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold text-lg">${relacionado.precio}</span>
                      <Button size="sm" onClick={() => handleAgregarCarrito(relacionado)}>Añadir al carrito</Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
