import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderBar.module.css'; // Ensure this is correctly linked

const products = [
  { id: 1, name: "Collection 1", image: `${process.env.PUBLIC_URL}/images/bal4.jpeg`, description: "Cristóbal Balanciaga transmission"},
  { id: 2, name: "Collection 2", image: `${process.env.PUBLIC_URL}/images/mis10.jpeg`, description: "Skewed."},
  { id: 3, name: "Collection 3", image: `${process.env.PUBLIC_URL}/images/look7a.jpeg`, description: "Hun final collection"},
];

const collections = {
  1: [
    { id: 3, name: "bafull", image: `${process.env.PUBLIC_URL}/images/balfull.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
    { id: 1, name: "bal1", image: `${process.env.PUBLIC_URL}/images/bal1.jpeg`, price: "$10.00", description: "This is a description for Product 1."},
  { id: 2, name: "bal2", image: `${process.env.PUBLIC_URL}/images/bal2.jpeg`, price: "$20.00", description: "This is a description for Product 2."},
  { id: 3, name: "bal3", image: `${process.env.PUBLIC_URL}/images/bal3.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
  { id: 3, name: "bal4", image: `${process.env.PUBLIC_URL}/images/bal4.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
  { id: 3, name: "bal5", image: `${process.env.PUBLIC_URL}/images/bal5.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
  { id: 3, name: "bal6", image: `${process.env.PUBLIC_URL}/images/bal6.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
  { id: 3, name: "ba7", image: `${process.env.PUBLIC_URL}/images/bal7.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
  ],
  2: [
    { id: 1, name: "mis", image: `${process.env.PUBLIC_URL}/images/mis2.jpeg`, price: "$10.00", description: "This is a description for Product 1."},
    { id: 2, name: "mis", image: `${process.env.PUBLIC_URL}/images/mis5.jpeg`, price: "$20.00", description: "This is a description for Product 2."},
    { id: 3, name: "mis", image: `${process.env.PUBLIC_URL}/images/mis3.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
    { id: 3, name: "mis", image: `${process.env.PUBLIC_URL}/images/mis4.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
    { id: 3, name: "mis", image: `${process.env.PUBLIC_URL}/images/mis1.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
    { id: 3, name: "mis", image: `${process.env.PUBLIC_URL}/images/mis6.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
    { id: 3, name: "mis", image: `${process.env.PUBLIC_URL}/images/mis7.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
    { id: 3, name: "mis", image: `${process.env.PUBLIC_URL}/images/mis9.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
    { id: 3, name: "mis", image: `${process.env.PUBLIC_URL}/images/mis8.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
    { id: 3, name: "mis", image: `${process.env.PUBLIC_URL}/images/mis10.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
    { id: 3, name: "mis", image: `${process.env.PUBLIC_URL}/images/mis11.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
    { id: 3, name: "mis", image: `${process.env.PUBLIC_URL}/images/mis12.jpeg`, price: "$20.00", description: "This is a description for Product 3."}
  ],
  3: [
    { id: 1, name: "look2", image: `${process.env.PUBLIC_URL}/images/look2.jpeg`, price: "$10.00", description: "This is a description for Product 1."},
    { id: 2, name: "look2", image: `${process.env.PUBLIC_URL}/images/look2a.jpeg`, price: "$20.00", description: "This is a description for Product 2."},
    { id: 3, name: "look2", image: `${process.env.PUBLIC_URL}/images/look2b.jpeg`, price: "$20.00", description: "This is a description for Product 3."},
    { id: 4, name: "look3", image: `${process.env.PUBLIC_URL}/images/look3.jpeg`, price: "$10.00", description: "This is a description for Product 1."},
    { id: 5, name: "look3", image: `${process.env.PUBLIC_URL}/images/look3a.jpeg`, price: "$20.00", description: "This is a description for Product 2."},
    { id: 4, name: "look4", image: `${process.env.PUBLIC_URL}/images/look4.jpeg`, price: "$10.00", description: "This is a description for Product 1."},
    { id: 5, name: "look4", image: `${process.env.PUBLIC_URL}/images/look4a.jpeg`, price: "$20.00", description: "This is a description for Product 2."},
    { id: 5, name: "look4", image: `${process.env.PUBLIC_URL}/images/look4b.jpeg`, price: "$20.00", description: "This is a description for Product 2."},
    { id: 4, name: "look5", image: `${process.env.PUBLIC_URL}/images/look5.jpeg`, price: "$10.00", description: "This is a description for Product 1."},
    { id: 5, name: "look5", image: `${process.env.PUBLIC_URL}/images/look5a.jpeg`, price: "$20.00", description: "This is a description for Product 2."},
    { id: 5, name: "look5", image: `${process.env.PUBLIC_URL}/images/look5b.jpeg`, price: "$20.00", description: "This is a description for Product 2."},
    { id: 4, name: "look6", image: `${process.env.PUBLIC_URL}/images/look6.jpeg`, price: "$10.00", description: "This is a description for Product 1."},
    { id: 5, name: "look6", image: `${process.env.PUBLIC_URL}/images/look6a.jpeg`, price: "$20.00", description: "This is a description for Product 2."},
    { id: 4, name: "look7", image: `${process.env.PUBLIC_URL}/images/look7.jpeg`, price: "$10.00", description: "This is a description for Product 1."},
    { id: 5, name: "look7", image: `${process.env.PUBLIC_URL}/images/look7a.jpeg`, price: "$20.00", description: "This is a description for Product 2."},
    { id: 5, name: "look7", image: `${process.env.PUBLIC_URL}/images/look7b.jpeg`, price: "$20.00", description: "This is a description for Product 2."},
  ]
};


const HeaderBar = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductClick = (product) => {
    setSelectedCollection(null); // Reset the collection
    setSelectedProductId(product.id); // Set the selected product ID

    // Then set the new collection after the component has re-rendered
    setTimeout(() => {
      setSelectedCollection(collections[product.id]);
    }, 0);
  };

  const renderCollectionRows = (collection) => {
    let rows = [];
    let index = 0;
    
    while (index < collection.length) {
      let size = rows.length % 3 === 1 ? 3 : (rows.length % 3 === 2 ? 2 : 1);
      rows.push(collection.slice(index, index + size));
      index += size;
    }

    return rows.map((row, idx) => (
      <div key={idx} className={styles.collectionRow}>
        {row.map(item => (
          <div key={item.id} className={styles.collectionItem}>
            <img src={item.image} alt={item.name} className={styles.collectionImage} />
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard} onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.name} className={`${styles.productImage} ${selectedProductId === product.id ? styles.selectedProduct : ''}`} />
            <div className={styles.productDescription}><p style={{ textAlign: 'center' , width:'100%' }}>{product.description}</p></div>
          </div>
        ))}
      </div>
      {selectedCollection && renderCollectionRows(selectedCollection)}
    </div>
  );
};

export default HeaderBar;
