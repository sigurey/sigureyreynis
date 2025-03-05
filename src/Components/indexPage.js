// src/components/IndexPage.js
import React from 'react';
import styles from './IndexPage.module.css'; // Import the CSS module

const products = [
    { id: 1, name: "Product 1", image: `${process.env.PUBLIC_URL}/images/bal7.jpeg`, description: "This is a description for Product 1.", collections: "WORK" }
];

const IndexPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.headerContainer}>
            <h3 className={styles.headerTitle}>Welcome to my site</h3>
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            {products.map((product) => (
                <div key={product.id} className={styles.half}>
                    <img src={product.image} alt={product.name} className={styles.image}/>
                </div>
            ))}
        </div>
    </div>
  );
};

export default IndexPage;
