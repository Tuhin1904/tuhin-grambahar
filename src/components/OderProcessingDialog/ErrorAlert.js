import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function ErrorAlert({ error, handleClose }) {
  if (!error) return null;

  return (
    <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
}

export default ErrorAlert;
