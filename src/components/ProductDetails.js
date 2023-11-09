import Image from 'next/image';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { getPriceWithCurrencySymbol } from '@/helpers/product.helper';
import Rating from './Rating';
import { getAbsImageUrl } from '@/services';

function ProductDetails({ product, products, onChangeProductHandler }) {
  const [mainImage, setMainImage] = useState(product?.images?.[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container px-4 pt-5 mx-auto text-primary-black">
      <div className="grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2">
        <div className="">
          <div>
            <Image
              src={getAbsImageUrl(mainImage)}
              alt={product.name}
              className="date-palm-jaggery-img"
              width={600}
              height={800}
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
          <div className="mt-3">
            <span className="mr-3 text-2xl font-bold">{getPriceWithCurrencySymbol(product.sellingPrice)}</span>
            <span className="ml-2 line-through text-secondary-black">{getPriceWithCurrencySymbol(product.mrp)}</span>
          </div>
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
          <div className="flex w-full text-xl border-2 rounded-full sm:w-48 border-primary">
            <button
              className="w-16 text-white rounded-l-full sm:w-14 bg-primary disabled:opacity-80"
              type="button"
              disabled={quantity < 2}
              onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
            >
              <RemoveIcon />
            </button>
            <div className="flex-grow py-1 mx-5 font-bold text-center text-primary">{quantity}</div>
            <button
              className="w-16 text-white rounded-r-full sm:w-14 bg-primary"
              type="button"
              onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
            >
              <AddIcon />
            </button>
          </div>
          <div className="mt-8 sm:mt-6">
            <button
              type="button"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
