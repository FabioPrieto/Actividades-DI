import React, { useState } from 'react';
import Carrito from './Carrito';

function Tienda() {
  const [cart, setCart] = useState({});

  const products = [
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    { id: 3, name: 'Producto 3' },
    { id: 4, name: 'Producto 4' },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: (prevCart[product.id] || 0) + 1,
    }));
  };

  return (
    <div className="store">
      <div className="products">
        <h2>Tienda</h2>
        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </div>
      <Carrito cart={cart} products={products} />
    </div>
  );
}

export default Tienda;