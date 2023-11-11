import ContactlessIcon from '@mui/icons-material/Contactless';
import { useState } from 'react';
import { getPriceWithCurrencySymbol } from '@/helpers/product.helper';
import OrderProductDetails from './OrderProductDetails';
import PriceSummarySection from './PriceSummarySection';
import FullWithPrimaryButton from './FullWithPrimaryButton';
import OrderAddressViewSection from './OrderAddressViewSection';

const DELIVERY_CHARGE = 40;

function OrderSummaryScreen({
  product,
  quantity,
  selectedAddress,
  continueHandler,
  isPrepaidOrder,
  setIsPrepaidOrder,
  setQuantity,
}) {
  const [loading, setLoading] = useState(false);

  const onClickContinueHandler = async () => {
    setLoading(() => true);
    await continueHandler();
    setLoading(() => false);
  };

  return (
    <>
      <div className="py-3 border-b shadow-sm mb-9 border-primary">
        <OrderProductDetails product={product} quantity={quantity} setQuantity={setQuantity} />
      </div>
      <OrderAddressViewSection address={selectedAddress} />

      <div className="mt-8 text-sm">
        <p className="mb-2 text-base font-semibold">Choose Payment Type</p>
        <div className="grid grid-cols-2 border-2 rounded-full border-primary">
          <button
            type="button"
            onClick={() => setIsPrepaidOrder(() => true)}
            className={`py-2 font-semibold text-center rounded-l-full ${
              isPrepaidOrder ? 'text-white bg-primary' : 'text-secondary-black'
            }`}
          >
            Online Payment (Prepaid)
          </button>
          <button
            type="button"
            onClick={() => setIsPrepaidOrder(() => false)}
            className={`py-2 font-semibold text-center rounded-r-full ${
              isPrepaidOrder ? 'text-secondary-black' : 'text-white bg-primary'
            }`}
          >
            Cash On Delivery (COD)
          </button>
        </div>
      </div>
      {!isPrepaidOrder && (
        <p className="mt-3 text-sm italic text-right">
          You can save {getPriceWithCurrencySymbol(DELIVERY_CHARGE)} by paying online
        </p>
      )}

      <PriceSummarySection
        product={product}
        quantity={quantity}
        showDeliveryCharge
        deliveryCharge={isPrepaidOrder ? 0 : DELIVERY_CHARGE}
      />

      <div className="mt-8">
        <FullWithPrimaryButton loading={loading} onClick={onClickContinueHandler}>
          Process Payment
          <ContactlessIcon sx={{ fontSize: '24px', marginLeft: '8px' }} />
        </FullWithPrimaryButton>
      </div>
    </>
  );
}

export default OrderSummaryScreen;
