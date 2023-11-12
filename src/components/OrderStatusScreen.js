import OrderProductDetails from './OderProcessingDialog/OrderProductDetails';

function OrderStatusScreen({ order }) {
  console.log('📢[OrderStatusScreen.js:2]: order: ', order);

  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          {order.items.map((item) => (
            <OrderProductDetails key={item.id} product={item} quantity={item.quantity} readOnly />
          ))}
        </div>
        <div />
      </div>
    </>
  );
}

export default OrderStatusScreen;
