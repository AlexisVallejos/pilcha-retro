import Link from 'next/link';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu
} from "@/components/ui/dropdown-menu";

function Catalogo({ addToCart }) {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [sort, setSort] = useState("featured");

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

  const handleCategoryChange = (category) => {
    setCategoryFilter((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setBrandFilter((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  const filteredProducts = productos
    .filter((product) =>
      categoryFilter.length > 0 ? categoryFilter.includes(product.category) : true
    )
    .filter((product) =>
      brandFilter.length > 0 ? brandFilter.includes(product.brand) : true
    )
    .sort((a, b) => {
      if (sort === "low") {
        return a.precio - b.precio;
      }
      if (sort === "high") {
        return b.precio - a.precio;
      }
      return 0;
    });

  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 py-8">
        <div className="flex flex-col gap-4">
          <Accordion collapsible type="single">
            <AccordionItem value="category">
              <AccordionTrigger className="text-base">Categories</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox onCheckedChange={() => handleCategoryChange("Serie A")} />
                    Serie A
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox onCheckedChange={() => handleCategoryChange("Premier League")} />
                    Premier League
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox onCheckedChange={() => handleCategoryChange("La Liga")} />
                    La Liga
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox onCheckedChange={() => handleCategoryChange("World Cup")} />
                    World Cup
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="brand">
              <AccordionTrigger className="text-base">Brands</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox onCheckedChange={() => handleBrandChange("Adidas")} />
                    Adidas
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox onCheckedChange={() => handleBrandChange("Nike")} />
                    Nike
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox onCheckedChange={() => handleBrandChange("Kappa")} />
                    Kappa
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox onCheckedChange={() => handleBrandChange("Umbro")} />
                    Umbro
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Products</h1>
              <p className="text-gray-500">Legendary Football Jerseys</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="shrink-0" variant="outline">
                  <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                  <DropdownMenuRadioItem value="featured">All</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="low">Price: low to high</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="high">Price: high to low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((producto) => (
              <div key={producto.id} className="group border border-black rounded-lg">
                <Link href={`/product/${producto.id}`}>
                  <a>
                    <img
                      alt={producto.nombre}
                      className="object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity border border-black rounded-lg"
                      height={400}
                      src={producto.imagen}
                      width={300}
                    />
                    <div className="bg-white p-4 dark:bg-gray-950 border border-black rounded-lg">
                      <h3 className="font-bold text-xl">{producto.nombre}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{producto.descripcion}</p>
                      <h4 className="font-semibold text-lg md:text-xl">${producto.precio}</h4>
                    </div>
                  </a>
                </Link>
                <button onClick={() => addToCart(producto)} className="mt-2 bg-blue-500 text-white px-2 py-2 border border-blue-700 rounded-lg hover:opacity-75 transition-opacity">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogo;

function ArrowUpDownIcon(props) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m7 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}
