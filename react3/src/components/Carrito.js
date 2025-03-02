import React from 'react';

function Carrito({ cart, products }) {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {Object.keys(cart).length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {Object.entries(cart).map(([productId, quantity]) => {
            const product = products.find((p) => p.id === parseInt(productId));
            return (
              <li key={productId}>
                {product.name} - Cantidad: {quantity}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Carrito;