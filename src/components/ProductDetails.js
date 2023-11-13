import Image from 'next/image';
import { useState } from 'react';
import Rating from './Rating';
import { getAbsImageUrl } from '@/services';
import OderProcessingDialog from './OderProcessingDialog';
import { setCart } from '@/helpers/localStorage.helper';
import PricingSection from './PricingSection';
import ProductQuantity from './ProductQuantity';

function ProductDetails({ product, products, onChangeProductHandler }) {
  const [mainImage, setMainImage] = useState(product?.images?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [processCheckout, setProcessCheckout] = useState(false);

  const onClickBuyNowHandler = () => {
    setCart({ product, quantity });
    setProcessCheckout(true);
  };

  return (
    <>
      <div className="container px-4 pt-5 mx-auto text-primary-black">
        <div className="grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2">
          <div className="">
            <div className="relative">
              <span className="absolute right-0 px-3 font-medium text-white py-0.5 text-sm rounded-l-full top-3 bg-primary">
                100% Natural
              </span>
              <Image
                src={getAbsImageUrl(mainImage)}
                alt={product.name}
                className="object-cover w-full h-auto"
                width={900}
                height={700}
              />
            </div>
            <div className="flex items-center justify-start mt-2">
              {product?.images?.map((image) => (
                <button
                  type="button"
                  key={image}
                  className="mr-3 rounded-md shadow-lg"
                  onClick={() => setMainImage(() => image)}
                >
                  <Image alt={product.name} src={getAbsImageUrl(image)} width={100} height={100} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <h2 className="mt-1">{product.subtitle}</h2>
            <div className="mt-2">
              <Rating rating={product.rating} totalRating={product.totalRating} />
            </div>
            <PricingSection product={product} />
            <div className="mt-4 mb-2 font-medium">Choose Product Variant:</div>
            <div className="grid items-center grid-cols-2 sm:flex">
              {products.map((productVariant, index) => (
                <button
                  type="button"
                  key={productVariant.id}
                  onClick={() => onChangeProductHandler(index)}
                  className={`px-6 py-1 mr-3 text-sm font-semibold  rounded-full border border-primary  ${
                    productVariant.id === product.id ? 'bg-primary text-white' : 'text-secondary-black'
                  }`}
                >
                  {productVariant.variant}
                </button>
              ))}
            </div>
            <div className="mt-6 mb-2 font-medium">Quantity:</div>
            <ProductQuantity
              quantity={quantity}
              inCreaseQuantityHandler={() => setQuantity((prevQuantity) => prevQuantity + 1)}
              decreaseQuantityHandler={() => setQuantity((prevQuantity) => prevQuantity - 1)}
            />
            <div className="mt-8 sm:mt-6">
              <button
                type="button"
                onClick={onClickBuyNowHandler}
                className="w-full px-16 py-2 font-semibold text-white rounded-full sm:w-auto bg-primary border-primary"
              >
                Buy Now
              </button>
            </div>

            <div className="mt-10">
              <div
                className="prose"
                dangerouslySetInnerHTML={{
                  __html: product.short_description,
                }}
              />
              <div className="flex justify-end mt-2">
                <a href="#product-details" className="text-sm font-medium text-primary">
                  See product details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OderProcessingDialog
        open={processCheckout}
        handleClose={() => {
          setProcessCheckout(false);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }}
      />
    </>
  );
}

export default ProductDetails;
