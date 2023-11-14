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
      <div className="mt-12" />
      <ProductDetails
        product={products[selectedProduct]}
        products={products}
        onChangeProductHandler={onChangeProductHandler}
      />
      <HomePageBanner className="mt-4" />
      <OurStoryVideo
        className="mb-6 border-b-2 border-primary"
        videoClassName="object-cover object-center w-full sm:h-96 lg:h-160 xl:h-192"
      />
      <div className="container px-4 pb-32 mx-auto pt-14">
        <article
          className="max-w-full prose "
          dangerouslySetInnerHTML={{
            __html: products[selectedProduct]?.description.replace('<h3>', '<h3 id="product-details">'),
          }}
        />
      </div>
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
