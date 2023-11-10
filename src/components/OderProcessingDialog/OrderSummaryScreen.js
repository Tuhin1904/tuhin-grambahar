import ContactlessIcon from '@mui/icons-material/Contactless';
import { getPriceWithCurrencySymbol } from '@/helpers/product.helper';
import OrderProductDetails from './OrderProductDetails';
import PriceSummarySection from './PriceSummarySection';
import FullWithPrimaryButton from './FullWithPrimaryButton';

const DELIVERY_CHARGE = 40;

function OrderSummaryScreen({
  product,
  quantity,
  selectedAddress,
  continueHandler,
  isPrepaidOrder,
  setIsPrepaidOrder,
  setQuantity,
  disableBackButton,
  enableBackButton,
}) {
  return (
    <>
      <div className="py-3 border-b shadow-sm mb-9 border-primary">
        <OrderProductDetails product={product} quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className="text-sm">
        <p className="mb-2 text-base font-semibold">Delivered To</p>
        <p className="mb-1 text-sm">{selectedAddress.name}</p>
        <p className="mb-1 text-sm">{selectedAddress.address_line_1}</p>
        <p className="mb-1">
          {selectedAddress.address_line_2}, {selectedAddress.landmark}
        </p>
        <p className="mb-1">
          {selectedAddress.district}, {selectedAddress.state} - {selectedAddress.pin}, {selectedAddress.country}
        </p>
        <p className="">Phone Number: {selectedAddress.phone_number}</p>
      </div>

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
        <FullWithPrimaryButton onClick={continueHandler}>
          Process Payment
          <ContactlessIcon sx={{ fontSize: '24px', marginLeft: '8px' }} />
        </FullWithPrimaryButton>
      </div>
    </>
  );
}

export default OrderSummaryScreen;
