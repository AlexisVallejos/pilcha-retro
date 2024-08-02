import Link from "next/link";
import React from "react";

// About Us Page Component
const Nosotros = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              We are a company passionate about retro fashion and 80s/90s pop culture. Founded in 2015, we have become
              one of the leading brands in vintage t-shirts and exclusive designs.
            </p>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our team is made up of a group of creatives and enthusiasts who share the same vision: to revive the
              iconic styles of the past and bring them to the present. Each of our garments is carefully designed and
              produced with high-quality materials to ensure maximum comfort and durability.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-lg bg-muted p-4">
                <img
                  src="/img/saco.jpeg"
                  width="100"
                  height="100"
                  alt="John Doe"
                  className="mx-auto h-20 w-20 rounded-full object-cover"
                />
                <h3 className="mt-4 text-center text-lg font-semibold">VALLEJOS Alexis</h3>
                <p className="text-center text-sm text-muted-foreground">Founder and Creative Director</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <img
                  src="/img/file.jpg"
                  width="100"
                  height="100"
                  alt="Jane Smith"
                  className="mx-auto h-20 w-20 rounded-full object-cover"
                />
                <h3 className="mt-4 text-center text-lg font-semibold">TORRES Ignacio</h3>
                <p className="text-center text-sm text-muted-foreground">Operations Manager</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <img
                  src="/img/file.jpg"
                  width="100"
                  height="100"
                  alt="Michael Johnson"
                  className="mx-auto h-20 w-20 rounded-full object-cover"
                />
                <h3 className="mt-4 text-center text-lg font-semibold">TORRES Ignacio</h3>
                <p className="text-center text-sm text-muted-foreground">Marketing Director</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <img
                  src="/img/saco.jpeg"
                  width="100"
                  height="100"
                  alt="Emily Davis"
                  className="mx-auto h-20 w-20 rounded-full object-cover"
                />
                <h3 className="mt-4 text-center text-lg font-semibold">VALLEJOS Alexis</h3>
                <p className="text-center text-sm text-muted-foreground">Graphic Designer</p>
              </div>
            </div>
            <div className="rounded-lg bg-muted p-6">
              <h3 className="text-lg font-semibold">Our Philosophy</h3>
              <p className="mt-4 text-muted-foreground">
                At Retro Tees, we believe that fashion is a form of expression and that every garment should tell a
                story. We strive to create unique and high-quality designs that reflect the essence of pop culture from
                past decades. Our goal is to inspire our customers to celebrate their individuality and be proud of
                their roots.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 md:mt-16 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <PhoneIcon className="h-6 w-6 text-muted-foreground" />
            <p className="text-muted-foreground">+54 (223) 686-4576</p>
          </div>
          <div className="flex items-center gap-4">
            <MailIcon className="h-6 w-6 text-muted-foreground" />
            <p className="text-muted-foreground">PilchaRetro@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
           
            <Link href="https://www.instagram.com/pilcha_retro?igsh=MXRmeW0zemU0ODNscQ==" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
              <InstagramIcon className="h-6 w-6" />
            </Link>
          
          </div>
        </div>
      </div>
    </section>
  );
};

// Icons
function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
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
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      />
    </svg>
  );
}

function TwitterIcon(props) {
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
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
      />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default Nosotros;
