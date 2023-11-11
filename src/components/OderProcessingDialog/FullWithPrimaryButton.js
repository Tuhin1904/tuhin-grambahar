import CircularProgress from '@mui/material/CircularProgress';

function FullWithPrimaryButton({ children, className = '', loading = false, disabled = false, ...rest }) {
  return (
    <button
      className={`w-full py-2 font-bold text-center text-white rounded-full bg-primary disabled:cursor-default disabled:opacity-60 ${className}`}
      type="button"
      disabled={loading || disabled}
      {...rest}
    >
      {children}
      {loading && (
        <CircularProgress
          color="inherit"
          size={16}
          sx={{
            marginLeft: 1.5,
          }}
        />
      )}
    </button>
  );
}

export default FullWithPrimaryButton;
