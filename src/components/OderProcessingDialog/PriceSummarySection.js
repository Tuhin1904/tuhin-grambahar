import { getPriceWithCurrencySymbol } from '@/helpers/product.helper';

function PriceSummarySection({
  product,
  quantity,
  deliveryCharge = 0,
  showDeliveryCharge = false,
  className = 'mt-8',
}) {
  return (
    <div className={className}>
      <p className="mb-1 font-semibold">Pricing Summary</p>
      <p className="flex mb-1.5">
        <span className="flex-grow mr-3">Total MRP</span>
        <span>{getPriceWithCurrencySymbol(product.mrp * quantity)}</span>
      </p>
      <p className="flex mb-1.5">
        <span className="flex-grow mr-3">Discount on MRP</span>
        <span className="text-secondary">
          -{getPriceWithCurrencySymbol((product.mrp - product.sellingPrice) * quantity)}
        </span>
      </p>
      {showDeliveryCharge && (
        <p className="flex mb-1.5">
          <span className="flex-grow mr-3">Delivery Charge</span>
          <span className="">{getPriceWithCurrencySymbol(deliveryCharge)}</span>
        </p>
      )}
      <p className="flex mb-1.5 font-bold border-primary border-t pt-1">
        <span className="flex-grow mr-3">Total</span>
        <span className="text-primary">
          {getPriceWithCurrencySymbol(product.sellingPrice * quantity + (showDeliveryCharge ? deliveryCharge : 0))}
        </span>
      </p>
    </div>
  );
}

export default PriceSummarySection;
