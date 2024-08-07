export default function handler(req, res) {
    const { id } = req.query;
    const productos = [
      { id: 1, nombre: 'Producto 1', precio: 100, descripcion: 'Descripción del Producto 1' },
      { id: 2, nombre: 'Producto 2', precio: 200, descripcion: 'Descripción del Producto 2' },
      // Añadir más productos según tus datos
    ];
  
    const producto = productos.find((p) => p.id === parseInt(id));
    
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  }
  