import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ProductQuantity({
  quantity,
  inCreaseQuantityHandler,
  decreaseQuantityHandler,
  className = '',
  readOnly = false,
}) {
  return (
    <div
      className={`flex w-full text-xl border-2 rounded-full sm:w-48 border-primary ${
        readOnly ? 'opacity-95' : ''
      } ${className}`}
    >
      <button
        className="w-16 text-white rounded-l-full sm:w-14 bg-primary disabled:opacity-80 disabled:cursor-default"
        type="button"
        disabled={readOnly || quantity < 2}
        onClick={decreaseQuantityHandler}
      >
        <RemoveIcon />
      </button>
      <div className="flex-grow py-0.5 mx-5 font-bold text-center text-primary">{quantity}</div>
      <button
        className="w-16 text-white rounded-r-full sm:w-14 bg-primary disabled:cursor-default disabled:opacity-80"
        type="button"
        disabled={readOnly}
        onClick={inCreaseQuantityHandler}
      >
        <AddIcon />
      </button>
    </div>
  );
}
