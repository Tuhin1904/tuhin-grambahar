import OrderProductDetails from './OrderProductDetails';

function AddressScreen({ product, quantity, userAddress, setUserAddress }) {
  return (
    <>
      <div className="py-3 border-b shadow-sm mb-9 border-primary">
        <OrderProductDetails product={product} quantity={quantity} readOnly />
      </div>
    </>
  );
}

export default AddressScreen;
