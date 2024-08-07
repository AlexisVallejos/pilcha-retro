
import { Button } from "@/components/ui/button"

export function productosdetalles() {
  return (
    (<div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="grid gap-4">
          <img
            src="/placeholder.svg"
            alt="Product Image"
            width={600}
            height={600}
            className="w-full rounded-lg overflow-hidden"
            style={{ aspectRatio: "600/600", objectFit: "cover" }} />
          <div className="grid grid-cols-3 gap-4">
            <img
              src="/placeholder.svg"
              alt="Product Image Thumbnail"
              width={150}
              height={150}
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "150/150", objectFit: "cover" }} />
            <img
              src="/placeholder.svg"
              alt="Product Image Thumbnail"
              width={150}
              height={150}
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "150/150", objectFit: "cover" }} />
            <img
              src="/placeholder.svg"
              alt="Product Image Thumbnail"
              width={150}
              height={150}
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "150/150", objectFit: "cover" }} />
          </div>
        </div>
        <div className="grid gap-6">
          <div>
            <h1 className="text-3xl font-bold">Acme Prism T-Shirt</h1>
            <p className="text-muted-foreground text-lg">
              A stylish and comfortable t-shirt with a unique prism design.
            </p>
          </div>
          <div className="grid gap-4">
            <p>
              Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern individual. This
              tee is crafted with a meticulous composition of 60% combed ringspun cotton and 40% polyester jersey,
              ensuring a soft and breathable fabric that feels gentle against the skin.
            </p>
            <p>
              The design of the Acme Prism T-Shirt is as striking as it is comfortable. The shirt features a unique
              prism-inspired pattern that adds a modern and eye-catching touch to your ensemble.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button size="lg">Add to Cart</Button>
            <Button size="lg" variant="outline">
              <HeartIcon className="w-4 h-4 mr-2" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="grid gap-4">
            <img
              src="/placeholder.svg"
              alt="Related Product 1"
              width={300}
              height={300}
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "300/300", objectFit: "cover" }} />
            <div>
              <h3 className="font-semibold">Acme Hoodie</h3>
              <p className="text-muted-foreground">Cozy and stylish hoodie</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold text-lg">$49.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <img
              src="/placeholder.svg"
              alt="Related Product 2"
              width={300}
              height={300}
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "300/300", objectFit: "cover" }} />
            <div>
              <h3 className="font-semibold">Acme Joggers</h3>
              <p className="text-muted-foreground">Comfortable and versatile joggers</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold text-lg">$39.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <img
              src="/placeholder.svg"
              alt="Related Product 3"
              width={300}
              height={300}
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "300/300", objectFit: "cover" }} />
            <div>
              <h3 className="font-semibold">Acme Beanie</h3>
              <p className="text-muted-foreground">Warm and stylish beanie</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold text-lg">$19.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <img
              src="/placeholder.svg"
              alt="Related Product 4"
              width={300}
              height={300}
              className="w-full rounded-lg overflow-hidden"
              style={{ aspectRatio: "300/300", objectFit: "cover" }} />
            <div>
              <h3 className="font-semibold">Acme Socks</h3>
              <p className="text-muted-foreground">Comfortable and durable socks</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold text-lg">$9.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

function HeartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>)
  );
}
