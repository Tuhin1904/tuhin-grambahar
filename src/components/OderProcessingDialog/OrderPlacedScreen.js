import OrderPlacedSvg from '../Icons/OrderPlacedSvg';
import FullWithPrimaryButton from './FullWithPrimaryButton';
import OrderAddressViewSection from './OrderAddressViewSection';
import OrderProductDetails from './OrderProductDetails';

function OrderPlacedScreen({ product, quantity, selectedAddress, continueHandler }) {
  return (
    <>
      <div className="py-3 border-b shadow-sm mb-9 border-primary">
        <OrderProductDetails product={product} quantity={quantity} readOnly />
      </div>

      <div className="flex items-center justify-center mb-5">
        <OrderPlacedSvg className="w-60 text-primary" />
      </div>
      <div className="text-sm">
        <p className="mb-2 text-base font-semibold text-center">Order Placed Successfully</p>
        <p className="mb-1 text-sm text-center">Your order has been placed successfully.</p>
      </div>

      <OrderAddressViewSection address={selectedAddress} className="mt-6" sectionTitle="Order will be delivered to" />

      <p className="mt-5 italic font-light text-right text-17">Thank you!</p>
      <div className="mt-8">
        <FullWithPrimaryButton onClick={continueHandler}>Continue Shopping</FullWithPrimaryButton>
      </div>
    </>
  );
}

export default OrderPlacedScreen;
