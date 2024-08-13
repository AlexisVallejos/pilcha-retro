import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Detalles() {
  const router = useRouter();
  const { id } = router.query;
  const [producto, setProducto] = useState(null);

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

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>Precio: ${producto.precio}</p>
      <p>Descripción: {producto.descripcion}</p>
      <button onClick={() => addToCart(producto)}>Añadir al carrito</button>
    </div>
  );
}

export default Detalles;
