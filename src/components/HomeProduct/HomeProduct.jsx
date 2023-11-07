/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './HomeProduct.css';
import { useQuery } from 'react-query';
import { getBestSellerProduct } from '../../services/product.service';
import HomePageProduct from './HomePageProduct';
import HomeProductDescription from '../HomeProdDescription/HomeProductDescription';

function HomeProduct() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const { isLoading, error, data } = useQuery('repoData', getBestSellerProduct);

  const onChangeProductHandler = (index) => {
    setSelectedProduct(() => index);
  };

  return (
    <>
      <HomePageProduct
        products={data || []}
        product={data?.[selectedProduct]}
        onChangeProductHandler={onChangeProductHandler}
      />
      <HomeProductDescription productDescription={data?.[selectedProduct]?.description} />
    </>
  );
}

export default HomeProduct;
