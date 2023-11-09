import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { getPriceWithCurrencySymbol } from '@/helpers/product.helper';
import OrderProductDetails from './OrtderProductDetials';
import FullWithPrimaryButton from './FullWithPrimaryButton';

function InitialOrderScreen({ product, quantity, setQuantity, continueHandler }) {
  return (
    <>
      <OrderProductDetails product={product} quantity={quantity} setQuantity={setQuantity} />

      <div className="mt-8">
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
        <p className="flex mb-1.5 font-bold border-primary border-t pt-1">
          <span className="flex-grow mr-3">Total</span>
          <span className="text-primary">{getPriceWithCurrencySymbol(product.sellingPrice * quantity)}</span>
        </p>
      </div>

      <div className="mt-6">
        <FullWithPrimaryButton onClick={continueHandler} className="font-bold">
          Process to Checkout <ShoppingCartCheckoutIcon sx={{ fontSize: '24px', marginLeft: '8px' }} />
        </FullWithPrimaryButton>
      </div>
    </>
  );
}

export default InitialOrderScreen;
