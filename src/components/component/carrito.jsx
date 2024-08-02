import React, { useState, useEffect } from "react";
import Link from "next/link";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

const Carrito = ({ items = [], addToCart, removeFromCart }) => {
  const [preferenceId, setPreferenceId] = useState(null);
  const totalPrice = items.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );

  useEffect(() => {
    initMercadoPago("APP_USR-afa3f272-1e02-47d6-afa1-1b3adff62c59", {
      locale: "es-AR",
    });
  }, []);

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/create_preference",
        {
          title: "remera retro",
          quantity: 1,
          price: 100,
        }
      );
      console.log("Response:", response.data);
      const { id } = response.data;
      return id;
    } catch (error) {
      console.error(
        "Error al crear la preferencia:",
        error.response ? error.response.data : error.message
      );
      return null;
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    } else {
      alert("Hubo un error al proceder con el pago. Intenta nuevamente.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
      {items.length === 0 ? (
        <p className="text-gray-700">
          Tu carrito está vacío.{" "}
          <Link href="/catalogo" className="text-blue-500 underline">
            Ver productos
          </Link>
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-4 mb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-20 h-20 object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-bold">{item.nombre}</h2>
                    <p className="text-gray-700">{item.descripcion}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">${item.precio}</p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-4 py-2 mt-2"
                    >
                      -
                    </button>
                    <span>{item.cantidad}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-500 text-white px-4 py-2 mt-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            <button
              onClick={handleBuy}
              className="bg-blue-500 text-white px-4 py-2 mt-2"
            >
              Proceder al Pago
            </button>
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
