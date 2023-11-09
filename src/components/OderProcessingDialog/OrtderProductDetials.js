import Image from 'next/image';
import { getAbsImageUrl } from '@/services';
import { PricingSection, ProductQuantity } from '../ProductDetails';
import { getPriceWithCurrencySymbol } from '@/helpers/product.helper';

function OrderProductDetails({ product, quantity, setQuantity }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-8 text-primary-black">
        <div>
          <Image
            src={getAbsImageUrl(product?.images?.[0])}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain object-center mx-auto w-28 h-28 sm:h-auto sm:mx-0 sm:w-full"
          />
        </div>
        <div className="sm:col-span-3">
          <p className="font-bold">{product?.name}</p>
          <p className="mt-1 text-secondary-black">{product?.short_description}</p>
          <PricingSection product={product} pricingTextSizeClass="text-base" className="mt-2 text-sm" />
          <div className="grid items-center grid-cols-2 mt-3">
            <ProductQuantity
              quantity={quantity}
              inCreaseQuantityHandler={() => setQuantity((qty) => qty + 1)}
              decreaseQuantityHandler={() => setQuantity((qty) => qty - 1)}
            />
            <div className="text-right">
              <span className="px-4 rounded-l-full py-1.5 font-semibold text-right text-white bg-primary">
                {getPriceWithCurrencySymbol(product.sellingPrice * quantity)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderProductDetails;
