import Link from "next/link";
import React, { useState, useEffect } from "react";

const images = ["/img/river.png", "/img/pppp.png", "/img/aaaa.png"];

const Ecommerce = ({ setCurrentPage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");
  const [currentWord, setCurrentWord] = useState("");
  const words = [
    "Where you buy the history.",
    "Revive the stories.",
    "Iconic t-shirts.",
  ];
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((i + 1) % words.length);
          setOffset(0);
        }
      }
      const part = words[i].substr(0, offset);
      setCurrentWord(part);
      if (skipCount === 0) {
        if (forwards) {
          setOffset(offset + 1);
        } else {
          setOffset(offset - 1);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [offset, forwards, i, skipCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("fade-out");
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimationClass("fade-in");
      }, 600); // duration of fade-out animation
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimationClass("fade-in");
    }, 500); // duration of fade-out animation
  };

  const prevImage = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setAnimationClass("fade-in");
    }, 500); // duration of fade-out animation
  };

  return (
    <div>
      <main className="flex-1">
        <section className="">
          <div className="fondoPrincipal">
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
              <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                <div className="mt-20">
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] animated-text">
                    {currentWord}
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Reviving the football jerseys that made history in their clubs and national teams
                  </p>
                  <div className="space-x-4 mt-6 ">
                    <button
                      className="button  inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300  "
                      id="btn"
                      onClick={() => setCurrentPage("catalogo")}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>

                <div className="imagenPrincipal relative">
                  <div className="image-container">
                    <img
                      src={images[currentImageIndex]}
                      alt="Retro Football Shirt"
                      className={`rounded-lg object-cover w-full aspect-[4/5] ${animationClass}`}
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 titulos">
<div className="container space-y-12 px-4 md:px-6">
<div className="flex flex-col items-center justify-center space-y-4 text-center">
<div className="space-y-2">
<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Details Of Our Retro Football Shirts</h2>
<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Made with premium materials and attention to detail, our retro football shirts capture the essence of iconic football moments.</p>
</div>
</div>
<div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
<div className="grid gap-1">
<h3 className="text-lg font-bold">Premium Cotton</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">Our shirts are made from high-quality breathable cotton that offers comfort and durability.</p>
</div>
<div className="grid gap-1">
<h3 className="text-lg font-bold">Authentic Designs</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">Each design is meticulously recreated to capture the nostalgia and style of the original.</p>
</div>
<div className="grid gap-1">
<h3 className="text-lg font-bold">Tailored Fit</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">Our shirts are designed with a modern tailored fit to provide a flattering and comfortable look.</p>
</div>
<div className="grid gap-1">
<h3 className="text-lg font-bold">Vibrant Colors</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">The colors and fabrics of our shirts are vibrant and realistic, capturing the essence of the era.</p>
</div>
<div className="grid gap-1">
<h3 className="text-lg font-bold">Maximum Durability</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">Our shirts are made to last, with reinforced seams and high-quality materials that withstand the test of time.</p>
</div>
<div className="grid gap-1">
<h3 className="text-lg font-bold">Timeless Style</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">These shirts are not only perfect for football fans, but also a statement of retro style.</p>
</div>
</div>
</div>
</section>
<section className="w-full py-12 md:py-24 lg:py-32  bg-gradient-to-b  from-black to-blue-800">
  <div className="container space-y-12 px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          The Best of the Best
        </h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Explore our collection of iconic retro football shirts.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 animate-fade-in">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Retro Football Shirt"
            className="object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://imageio.forbes.com/specials-images/imageserve/88019454/Barcelona-s-Argentinian-forward-Lionel-M/960x0.jpg?format=jpg&width=960"
            width={300}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-bold text-xl">Barcelona 2008</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Iconic Barcelona where they won the 2008-2009 Champions League.

      
            </p>
            <br/>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 animate-fade-in">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Retro Football Shirt"
            className="object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://cdn.topclass.chosun.com/news/photo/201806/4735_16274_0500.jpg"
            width={300}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-bold text-xl">Brazil 2010</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Legendary Brazil squad that won the World Cup.


            </p>
           <br/>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 animate-fade-in">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Retro Football Shirt"
            className="object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://i.pinimg.com/originals/e8/51/e3/e851e34be12a20f41927323e962bace2.jpg"
            width={300}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-bold text-xl">AC Milan 2007</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              The powerful Milan squad filled with stars that won the precious Champions League.
            </p>
        
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 animate-fade-in">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Retro Football Shirt"
            className="object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            height={400}
            src="https://fotos.perfil.com/2022/06/29/trim/1140/641/maradona-1378837.jpg"
            width={300}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-bold text-xl">Argentina 1986</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              The famous 86 World Cup where "revenge" was also taken against the English.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      </main>
    </div>
  );
};

export default Ecommerce;
