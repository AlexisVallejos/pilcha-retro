import { useRouter } from 'next/router';
import Detalles from '@/components/component/Detalles';
import { Button } from "@/components/ui/button";

export function ProductoDetalles() {
  const router = useRouter();
  const { id } = router.query;
  const producto = Detalles.find((producto) => producto.id === parseInt(id, 10));

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  const addToCart = (product) => {
    console.log(`Added ${product.nombre} to cart`);
    // Implementar la funcionalidad para agregar el producto al carrito
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="grid gap-4">
          <img
            src={producto.imagen}
            alt={`Imagen de ${producto.nombre}`}
            width={600}
            height={600}
            className="w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "600/600", objectFit: "cover" }}
          />
          <div className="grid grid-cols-3 gap-4">
            {/* Thumbnails can be added here if available */}
            <img
              src={producto.imagen}
              alt={`Imagen de ${producto.nombre}`}
              width={150}
              height={150}
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "150/150", objectFit: "cover" }}
            />
            <img
              src={producto.imagen}
              alt={`Imagen de ${producto.nombre}`}
              width={150}
              height={150}
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "150/150", objectFit: "cover" }}
            />
            <img
              src={producto.imagen}
              alt={`Imagen de ${producto.nombre}`}
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
            <p>
              {producto.descripcion}
            </p>
            <p>
              Precio: ${producto.precio}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button size="lg" onClick={() => addToCart(producto)}>Agregar al carrito</Button>
            <Button size="lg" variant="outline">
              <HeartIcon className="w-4 h-4 mr-2" />
              Agregar a la lista de deseos
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.filter(p => p.id !== producto.id).slice(0, 4).map((relatedProduct) => (
            <div className="grid gap-4" key={relatedProduct.id}>
              <img
                src={relatedProduct.imagen}
                alt={`Imagen de ${relatedProduct.nombre}`}
                width={300}
                height={300}
                className="w-full rounded-lg overflow-hidden"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div>
                <h3 className="font-semibold">{relatedProduct.nombre}</h3>
                <p className="text-muted-foreground">{relatedProduct.descripcion}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold text-lg">${relatedProduct.precio}</span>
                  <Button size="sm" onClick={() => addToCart(relatedProduct)}>Agregar al carrito</Button>
                </div>
              </div>
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
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      />
    </svg>
  );
}
