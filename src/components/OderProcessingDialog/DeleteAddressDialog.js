import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function DeleteAddressDialog({ deleteAddressId, setDeleteAddressId, loading, onClickDeleteAddressHandler }) {
  return (
    <Dialog open={deleteAddressId} onClose={() => setDeleteAddressId('')}>
      <DialogTitle>Delete Address</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this address?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button disabled={loading} color="inherit" onClick={() => setDeleteAddressId('')}>
          Cancel
        </Button>
        <Button disabled={loading} autoFocus onClick={onClickDeleteAddressHandler} color="error">
          Yes, Delete
          {loading && (
            <CircularProgress
              color="inherit"
              size={16}
              sx={{
                marginLeft: 1.5,
              }}
            />
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteAddressDialog;
