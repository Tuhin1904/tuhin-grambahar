import Image from 'next/image';
import { getAbsImageUrl } from '@/services';
import { getPriceWithCurrencySymbol } from '@/helpers/product.helper';
import PricingSection from '../PricingSection';
import ProductQuantity from '../ProductQuantity';

function OrderProductDetails({ product, quantity, setQuantity, readOnly = false, className = '' }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-8 text-primary-black">
        <div className="mb-5 sm:mb-0">
          <Image
            src={getAbsImageUrl(product?.images?.[0])}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain object-center w-auto mx-auto h-36 sm:h-auto sm:mx-0 sm:w-full"
          />
        </div>
        <div className="sm:col-span-3">
          <p className="font-bold">{product?.name}</p>
          <div className="flex mt-2">
            <div className="flex text-sm font-medium border-2 rounded-r-full border-primary">
              <p className="px-2 py-1 mr-2 text-white bg-primary">Product Variant</p>
              <p className="px-4 py-1 font-semibold text-primary">{product?.variant}</p>
            </div>
          </div>
          <PricingSection product={product} pricingTextSizeClass="text-base" className="mt-2 text-sm" />
          <div className="grid items-center grid-cols-2 mt-3">
            <ProductQuantity
              quantity={quantity}
              readOnly={readOnly}
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
