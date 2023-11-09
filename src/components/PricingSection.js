import { getPriceWithCurrencySymbol } from '@/helpers/product.helper';

export default function PricingSection({ product, pricingTextSizeClass = 'text-2xl', className = 'mt-3' }) {
  const discount = Math.round(((Number(product.mrp) - Number(product.sellingPrice)) / Number(product.mrp)) * 100);

  return (
    <div className={className}>
      <span className={`mr-3 font-bold ${pricingTextSizeClass}`}>
        {getPriceWithCurrencySymbol(product.sellingPrice)}
      </span>
      <span className="ml-2 line-through text-secondary-black">{getPriceWithCurrencySymbol(product.mrp)}</span>
      {discount > 0 && <span className="ml-3 font-bold text-secondary">{discount}% off</span>}
    </div>
  );
}
