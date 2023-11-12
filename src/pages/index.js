import { useState } from 'react';
import { getBestSellerProduct } from '@/services/product.service';
import ProductDetails from '@/components/ProductDetails';
import HomePageBanner from '@/components/Lagacy/HomePageBanner';
import OurStoryVideo from '@/components/OurStoryVideo';

export default function Home({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const onChangeProductHandler = (index) => {
    setSelectedProduct(() => index);
  };

  return (
    <>
      <OurStoryVideo
        className="mb-6 border-b-2 border-primary"
        videoClassName="object-cover object-center w-full sm:h-96"
      />
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
