// src/components/IndexPage.js
import React from 'react';
import styles from './ResourchPage.module.css'; // Import the CSS module

const products = [
    { id: 1, name: "Product 1", image: `${process.env.PUBLIC_URL}/images/res2.jpeg`, description: "This is a description for Product 1.", collections: "WORK" },
    { id: 2, name: "Product 2", image: `${process.env.PUBLIC_URL}/images/res1.jpeg`, description: "This is a description for Product 2.", collections: "TEXTILE" },
    { id: 2, name: "Product 2", image: `${process.env.PUBLIC_URL}/images/res3.jpeg`, description: "This is a description for Product 2.", collections: "TEXTILE" },
];

const ResourcePage = () => {
    return (
        <div className={styles.container}>
            {products.map((product) => (
                <div key={product.id} className={styles.productContainer}>
                    <img src={product.image} alt={product.name} className={styles.image}/>
                </div>
            ))}
        </div>
      );
    };

export default ResourcePage;
