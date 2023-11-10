import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef, useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useMediaQuery from '@mui/material/useMediaQuery';
import InitialOrderScreen from './InitialOrderScreen';
import { getCart, setCart } from '@/helpers/localStorage.helper';
import AuthScreen from './AuthScreen';
import ErrorAlert from './ErrorAlert';
import AddressScreen from './AddressScreen';
import { getMyAddresses } from '@/services/account.services';
import OrderSummaryScreen from './OrderSummaryScreen';
import { updateMyCart } from '@/services/cart.servies';
import { createMyOrder } from '@/services/order.services';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ORDER_SCREEN_CONFIGS = {
  initialScreen: {
    name: 'initialScreen',
    title: 'Your Cart | Order Details',
  },
  authScreen: {
    name: 'authScreen',
    title: 'Your Cart | User Details',
  },
  addressScreen: {
    name: 'addressScreen',
    title: 'Checkout | Address',
  },
  orderSummeryScreen: {
    name: 'orderSummeryScreen',
    title: 'Checkout | Order Summary',
  },
};

function OderProcessingDialog({ open, handleClose }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderScreen, setOrderScreen] = useState(ORDER_SCREEN_CONFIGS.initialScreen.name);
  const [error, setError] = useState('');
  const [userAddress, setUserAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isPrepaidOrder, setIsPrepaidOrder] = useState(true);
  const [cartId, setCartId] = useState(null);
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery('(max-width:639px)');

  const goToAuthSection = async () => {
    setError(() => '');
    try {
      await updateMyCart([{ product: Number(product.id), quantity }]);
      setOrderScreen(ORDER_SCREEN_CONFIGS.authScreen.name);
    } catch (err) {
      console.error('📢[index.js]: err: ', err);
      setError(err?.response?.data?.error || err?.message || 'Error at updating cart');
    }
  };

  const goToAddressSelectionScreen = async () => {
    setError(() => '');
    try {
      await setCart({ product, quantity });
      const addresses = await getMyAddresses();
      setUserAddress(() => addresses);

      setOrderScreen(ORDER_SCREEN_CONFIGS.addressScreen.name);
    } catch (err) {
      console.error('📢[index.js]: err: ', err);
      setError(err?.response?.data?.error || err?.message || 'Error at updating cart');
    }
  };

  const goToSummerySection = async () => {
    setOrderScreen(ORDER_SCREEN_CONFIGS.orderSummeryScreen.name);
  };

  const onCLickBackHandler = () => {
    setCart({
      product,
      quantity,
    });
    if (orderScreen === ORDER_SCREEN_CONFIGS.authScreen.name) {
      setOrderScreen(ORDER_SCREEN_CONFIGS.initialScreen.name);
    } else if (orderScreen === ORDER_SCREEN_CONFIGS.addressScreen.name) {
      setOrderScreen(ORDER_SCREEN_CONFIGS.initialScreen.name);
    } else if (orderScreen === ORDER_SCREEN_CONFIGS.orderSummeryScreen.name) {
      setOrderScreen(ORDER_SCREEN_CONFIGS.addressScreen.name);
    } else {
      handleClose();
    }
  };

  const processOrderAndPaymentHandler = async () => {
    setError(() => '');
    setLoading(true);
    try {
      const userCart = await updateMyCart([{ product: Number(product.id), quantity }]);
      const orderRes = await createMyOrder({
        cartId: userCart.id,
        addressId: selectedAddress,
        paymentMethod: isPrepaidOrder ? 'prepaid' : 'cod',
      });
      console.log('📢[index.js:105]: orderRes: ', orderRes);
      console.log('📢[index.js:96]: userCart: ', userCart);
    } catch (err) {
      console.error('📢[index.js]: err: ', err);
      setError(err?.response?.data?.error || err?.message || 'Error at updating cart');
    } finally {
      setLoading(false);
    }
  };

  const disableBackButton = () => {
    const backButton = document.querySelector('[data-id="cart-process-back-button"]');
    if (backButton) {
      backButton.disabled = true;
    }
  };

  const enableBackButton = () => {
    const backButton = document.querySelector('[data-id="cart-process-back-button"]');
    if (backButton) {
      backButton.disabled = false;
    }
  };

  useEffect(() => {
    if (open) {
      const cart = getCart();
      setProduct(cart?.product);
      setQuantity(cart?.quantity);
    }
  }, [open]);

  if (!open) return null;

  return (
    <Dialog open={open} TransitionComponent={Transition} keepMounted maxWidth="sm" fullWidth fullScreen={isMobile}>
      <DialogTitle>
        <button
          type="button"
          className="mr-3 text-secondary-black"
          data-id="cart-process-back-button"
          onClick={onCLickBackHandler}
        >
          <ArrowBackIcon sx={{ fontSize: '20px' }} />
        </button>
        {ORDER_SCREEN_CONFIGS[orderScreen].title}
      </DialogTitle>
      <DialogContent>
        {!product && <p>Cart is Empty</p>}
        {product && orderScreen === ORDER_SCREEN_CONFIGS.initialScreen.name && (
          <InitialOrderScreen
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
            continueHandler={goToAuthSection}
            disableBackButton={disableBackButton}
            enableBackButton={enableBackButton}
          />
        )}
        {product && orderScreen === ORDER_SCREEN_CONFIGS.authScreen.name && (
          <AuthScreen
            product={product}
            quantity={quantity}
            continueHandler={goToAddressSelectionScreen}
            disableBackButton={disableBackButton}
            enableBackButton={enableBackButton}
          />
        )}

        {product && orderScreen === ORDER_SCREEN_CONFIGS.addressScreen.name && (
          <AddressScreen
            product={product}
            quantity={quantity}
            userAddress={userAddress}
            setUserAddress={setUserAddress}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            continueHandler={goToSummerySection}
            disableBackButton={disableBackButton}
            enableBackButton={enableBackButton}
          />
        )}

        {product && orderScreen === ORDER_SCREEN_CONFIGS.orderSummeryScreen.name && (
          <OrderSummaryScreen
            product={product}
            quantity={quantity}
            selectedAddress={userAddress.find((address) => address.id === selectedAddress)}
            continueHandler={processOrderAndPaymentHandler}
            isPrepaidOrder={isPrepaidOrder}
            setIsPrepaidOrder={setIsPrepaidOrder}
            setQuantity={setQuantity}
            disableBackButton={disableBackButton}
            enableBackButton={enableBackButton}
          />
        )}

        <ErrorAlert error={error} />
      </DialogContent>
    </Dialog>
  );
}

export default OderProcessingDialog;
