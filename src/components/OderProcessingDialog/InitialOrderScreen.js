import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import OrderProductDetails from './OrderProductDetails';
import FullWithPrimaryButton from './FullWithPrimaryButton';
import PriceSummarySection from './PriceSummarySection';

function InitialOrderScreen({ product, quantity, setQuantity, continueHandler }) {
  return (
    <>
      <OrderProductDetails product={product} quantity={quantity} setQuantity={setQuantity} />
      <PriceSummarySection product={product} quantity={quantity} />
      <div className="mt-6">
        <FullWithPrimaryButton onClick={continueHandler} className="font-bold">
          Process to Checkout <ShoppingCartCheckoutIcon sx={{ fontSize: '24px', marginLeft: '8px' }} />
        </FullWithPrimaryButton>
      </div>
    </>
  );
}

export default InitialOrderScreen;
