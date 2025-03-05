import React from 'react';
import styles from './Textile.module.css'; // Ensure the correct path

const products = [
    { id: 1, name: "Big photo 1", image: `${process.env.PUBLIC_URL}/images/tex2.jpeg`, description: "Big Image", collections: "WORK" },
    { id: 2, name: "small 8", image: `${process.env.PUBLIC_URL}/images/tex1.jpeg`, description: "Small Image 1", collections: "TEXTILE" },
    { id: 5, name: "Big photo 2", image: `${process.env.PUBLIC_URL}/images/tex3.jpeg`, description: "Big Image 2", collections: "TEXTILE" },
    { id: 6, name: "Big photo 3", image: `${process.env.PUBLIC_URL}/images/res5.jpeg`, description: "Big Image", collections: "WORK" },
    { id: 7, name: "small 4", image: `${process.env.PUBLIC_URL}/images/tex4.jpeg`, description: "Small Image 2", collections: "TEXTILE" },
    { id: 8, name: "Big photo 7", image: `${process.env.PUBLIC_URL}/images/res8.jpeg`, description: "Small Image 2", collections: "TEXTILE" },
    { id: 9, name: "small 5", image: `${process.env.PUBLIC_URL}/images/tex5.jpeg`, description: "Small Image 3", collections: "TEXTILE" },
    { id: 10, name: "Big photo 5", image: `${process.env.PUBLIC_URL}/images/res11.jpeg`, description: "Big Image 2", collections: "TEXTILE" },
    { id: 11, name: "Big photo 6", image: `${process.env.PUBLIC_URL}/images/res7.jpeg`, description: "Big Image 2", collections: "TEXTILE" },
];

const Textile = () => {
    const bigImages = products.filter(p => p.name.startsWith('Big'));
    const smallImages = products.filter(p => p.name.startsWith('small'));

    return (
        <div className={styles.container}>
            <h3 className={styles.headerTitle}>Fabric manipulation and textile development are explored through felting, sculpting, and surface treatments, creating unique textures and forms. Natural dyeing techniques produce rich, one-of-a-kind colors, emphasizing sustainability and the organic beauty of materials.</h3>
            <div className={styles.bigRow}>
            {bigImages.map(product => (
                <div key={product.id} className={styles.fullWidth}>
                    <img src={product.image} alt={product.name} className={styles.bigImage}/>
                </div>
            ))}
            </div>
            <div className={styles.smallRow}>
                {smallImages.map(product => (
                    <div key={product.id} className={`${styles.small} ${product.name === "small 1" ? styles.small1 : (product.name === "small 2" ? styles.small2 : styles.small3)}`}>
                        <img src={product.image} alt={product.name} className={styles.smallImage}/>
                    </div>
                ))}
            </div>
        </div>
      );
};

export default Textile;
