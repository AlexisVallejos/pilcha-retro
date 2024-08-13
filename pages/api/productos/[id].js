export default function handler(req, res) {
    const { id } = req.query;
    const productos = [
      { 
        id: 1, 
        nombre: 'Napoli 87-88', 
        precio: 100, 
        brand: 'Adidas', 
        category: 'Serie A',
        imagen: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1021,h_1021/https://marcasjerez.com/wp-content/uploads/2022/07/0d8db8ae.jpg',
        descripcion: 'won the Coppa Italia. DIEGO MARADONA led Napoli to their first Scudetto'
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
  
    ];
  
    const producto = productos.find((p) => p.id === parseInt(id));
    
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  }
  