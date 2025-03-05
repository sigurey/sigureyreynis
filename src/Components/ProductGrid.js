import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductGrid.module.css';

// Example fake product data
const products = [
  { id: 1, name: "Product 1", image: `${process.env.PUBLIC_URL}/images/look2.jpeg`, price: "$10.00", description: "This is a description for Product 1." },
  { id: 2, name: "Product 2", image: `${process.env.PUBLIC_URL}/images/look3.jpeg`, price: "$20.00", description: "This is a description for Product 2." },
  { id: 3, name: "Product 3", image: `${process.env.PUBLIC_URL}/images/look4.jpeg`, price: "$20.00", description: "This is a description for Product 2." },
  { id: 4, name: "Product 4", image: `${process.env.PUBLIC_URL}/images/look5.jpeg`, price: "$20.00", description: "This is a description for Product 2." },
  { id: 5, name: "Product 5", image: `${process.env.PUBLIC_URL}/images/look6.jpeg`, price: "$20.00", description: "This is a description for Product 2." },
  { id: 6, name: "Product 6", image: `${process.env.PUBLIC_URL}/images/look7.jpeg`, price: "$20.00", description: "This is a description for Product 2." }

  // Add more products here
];

const ProductGrid = () => {
  return (
    <div className={styles.gridContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <Link to={`/product-details/${product.id}`}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
