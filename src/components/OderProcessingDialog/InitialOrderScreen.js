import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useState } from 'react';
import OrderProductDetails from './OrderProductDetails';
import FullWithPrimaryButton from './FullWithPrimaryButton';
import PriceSummarySection from './PriceSummarySection';
import ErrorAlert from './ErrorAlert';
import { extractServerValidationError } from '@/helpers/serverValidationError.helper';

function InitialOrderScreen({ product, quantity, setQuantity, continueHandler, disableBackButton, enableBackButton }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onClickContinueHandler = async () => {
    setLoading(true);
    disableBackButton();
    setError('');
    try {
      await continueHandler();
    } catch (err) {
      console.error('📢[AuthScreen.js]: err: ', err);
      setError(
        extractServerValidationError(err) || err?.response?.data?.error || err?.message || 'Error at sending otp',
      );
    } finally {
      setLoading(false);
      enableBackButton();
    }
  };

  return (
    <>
      <OrderProductDetails product={product} quantity={quantity} setQuantity={setQuantity} />
      <PriceSummarySection product={product} quantity={quantity} />
      <div className="mt-6">
        <FullWithPrimaryButton onClick={onClickContinueHandler} className="font-bold" loading={loading}>
          Process to Checkout <ShoppingCartCheckoutIcon sx={{ fontSize: '24px', marginLeft: '8px' }} />
        </FullWithPrimaryButton>
      </div>

      <ErrorAlert error={error} />
    </>
  );
}

export default InitialOrderScreen;
