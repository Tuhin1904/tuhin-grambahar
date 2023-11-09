import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function OderProcessingDialog({
  open,
  handleClose,
  title = '',
  children,
  showDiscardButton = false,
  discardButtonLabel = 'Discard',
  primaryActionHandler = () => {},
  primaryActionLabel = 'Agree',
}) {
  if (!open) return null;

  return (
    <Dialog open={open} TransitionComponent={Transition} keepMounted>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {showDiscardButton && <Button onClick={handleClose}>{discardButtonLabel}</Button>}
        <Button onClick={primaryActionHandler}>{primaryActionLabel}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default OderProcessingDialog;
