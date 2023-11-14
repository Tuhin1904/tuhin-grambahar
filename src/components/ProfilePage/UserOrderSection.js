import { getMyOrders } from '@/services/order.services';
import { useEffect, useState } from 'react';

function UserOrderSection() {
  const [orders, setOrders] = useState([]);
  const [view, setView] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getMyOrders();
        console.log(response);
        setOrders(response);
      } catch (error) {
        console.log('Error is :', error);
      }
    };
    fetchOrders();
  }, []);
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <p className="mt-12 mb-2 text-lg font-bold">My Orders:</p>
      <div className="w-auto">
        {orders.map((eachOrder, i) => (
          <div key={i} className="p-2 my-2 rounded-lg box bg-primary">
            <div className="flex">
              <b>{i + 1}.</b>
              <p className="ml-4 mr-3">
                Order Date :<b> {formatDate(eachOrder.date_created)}</b>
              </p>
              <p className="text-white">
                Order Status : <b>{eachOrder.order_status}</b> <br /> Payment Mode: <b>{eachOrder.payment_method}</b>
              </p>
            </div>
            <hr />
            <p className="ml-4">
              Product Name : <span className="text-white"> {eachOrder.items[0].name}</span>
            </p>
            <img src={eachOrder.items} alt="product" />
            <hr />
            <p className="ml-4">
              <b>Address :</b> <span className="text-white">{eachOrder.shipping_address.address_line_1}</span>
            </p>
            <p className="ml-4">
              <b>Landmark :</b> <span className="text-white">{eachOrder.shipping_address.landmark}</span>
            </p>
            <p className="ml-4">
              <b>Name :</b> <span className="text-white">+91 {eachOrder.shipping_address.phone_number}</span>
            </p>
            <p className="ml-4">
              <b>Phone :</b> <span className="text-white">{eachOrder.shipping_address.name}</span>
            </p>
            <p className="ml-4">
              <b>Pin :</b> <span className="text-white">{eachOrder.shipping_address.pin}</span>
            </p>
            <p className="ml-4">
              <b>State :</b> <span className="text-white">{eachOrder.shipping_address.state}</span>
            </p>
            {/* <p className="ml-4">
              <b>Shipping Charge :</b>₹ <span className="text-white">{eachOrder.shipping_charge}</span>
            </p>
            <p className="ml-4">
              <b>Handling Charge :</b>₹ <span className="text-white">{eachOrder.handling_charge}</span>
            </p> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default UserOrderSection;
