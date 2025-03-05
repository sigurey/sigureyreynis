import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetailsPage.module.css';

// Example fake product data
const products = [
  {
    id: 1,
    name: "Product 1",
    images: [`${process.env.PUBLIC_URL}/images/look2.jpeg`, `${process.env.PUBLIC_URL}/images/look2a.jpeg`, `${process.env.PUBLIC_URL}/images/look2b.jpeg`],
    price: "$10.00",
    description: "This garment is crafted from cotton and dyed with crowberries and logwood. The pants are crafted from linen."
  },
  {
    id: 2,
    name: "Product 2",
    images: [`${process.env.PUBLIC_URL}/images/look3.jpeg`, `${process.env.PUBLIC_URL}/images/look3a.jpeg`],
    price: "$20.00",
    description: "This garment is crafted from felted mixed wool. The pants are made of linen and dyed with crowberries."
  },
  {
    id: 3,
    name: "Product 3",
    images: [`${process.env.PUBLIC_URL}/images/look4.jpeg`, `${process.env.PUBLIC_URL}/images/look4a.jpeg`, `${process.env.PUBLIC_URL}/images/look4b.jpeg`],
    price: "$20.00",
    description: "This garment is crafted from felted white wool and cotton. The pants are made from linen."
  },
  {
    id: 4,
    name: "Product 4",
    images: [`${process.env.PUBLIC_URL}/images/look5.jpeg`, `${process.env.PUBLIC_URL}/images/look5a.jpeg`, `${process.env.PUBLIC_URL}/images/look5b.jpeg`],
    price: "$20.00",
    description: "This top is crafted from a blend of linen. The pants are made from linen dyed with crowberries."
  },
  {
    id: 5,
    name: "Product 5",
    images: [`${process.env.PUBLIC_URL}/images/look6.jpeg`, `${process.env.PUBLIC_URL}/images/look6a.jpeg`],
    price: "$20.00",
    description: "This garment is crafted from felted wool, dyed with crowberries and cochineal. The pants and top are made of cotton, dyed with crowberries."
  },
  {
    id: 6,
    name: "Product 6",
    images: [`${process.env.PUBLIC_URL}/images/look7.jpeg`, `${process.env.PUBLIC_URL}/images/look7a.jpeg`, `${process.env.PUBLIC_URL}/images/look7b.jpeg`],
    price: "$20.00",
    description: "This garment is crafted with felted mixed wool. The pants are made from linen, dyed with crowberries."
  },
];

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) return <div>Product not found</div>;

  return (
    <div className={styles.productDetailsContainer}>
      <p className={styles.productDescription}>{product.description}</p>
      <div className={styles.imagesRow}>
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`${product.name} ${index + 1}`} className={styles.productImage} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
