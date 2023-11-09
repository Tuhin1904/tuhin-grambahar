import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef, useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InitialOrderScreen from './InitialOrderScreen';
import { getCart, setCart } from '@/helpers/localStorage.helper';

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
};
function OderProcessingDialog({ open, handleClose, title = '' }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderScreen, setOrderScreen] = useState(ORDER_SCREEN_CONFIGS.initialScreen.name);

  const goToAuthSection = () => {
    setCart({ product, quantity });
    setOrderScreen(ORDER_SCREEN_CONFIGS.authScreen.name);
  };

  useEffect(() => {
    if (open) {
      const cart = getCart();
      setProduct(cart?.product);
      setQuantity(cart?.quantity);
    }
  }, [open]);

  const onCLickBackHandler = () => {
    if (orderScreen === ORDER_SCREEN_CONFIGS.authScreen.name) {
      setOrderScreen(ORDER_SCREEN_CONFIGS.initialScreen.name);
    } else {
      handleClose();
    }
  };

  if (!open) return null;

  return (
    <Dialog open={open} TransitionComponent={Transition} keepMounted maxWidth="sm" fullWidth>
      <DialogTitle>
        <button type="button" className="mr-3 text-secondary-black" onClick={onCLickBackHandler}>
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
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default OderProcessingDialog;
