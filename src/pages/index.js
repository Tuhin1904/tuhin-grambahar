import { useState } from 'react';
import { getBestSellerProduct } from '@/services/product.service';
import ProductDetails from '@/components/ProductDetails';
import HomePageBanner from '@/components/Lagacy/HomePageBanner';

export default function Home({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const onChangeProductHandler = (index) => {
    setSelectedProduct(() => index);
  };

  return (
    <>
      <ProductDetails
        product={products[selectedProduct]}
        products={products}
        onChangeProductHandler={onChangeProductHandler}
      />
      <HomePageBanner className="my-10" />
    </>
  );
}

export async function getStaticProps() {
  const products = await getBestSellerProduct();

  return {
    props: {
      products,
    },
  };
}
