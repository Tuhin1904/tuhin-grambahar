import { getMyOrders } from '@/services/order.services';
import { useEffect, useState } from 'react';
import { FaCaretSquareDown, FaCaretSquareUp } from 'react-icons/fa';
import { getAbsImageUrl } from '@/services';
import Image from 'next/image';

function UserOrderSection({product}) {
  const [orders, setOrders] = useState([]);
  const [view, setView] = useState(false);
  const [productImage, setProductImage]= useState()

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
  const orderShow = () => {
    setView(!view);
  };

  return (
    <>
      <p className="flex mt-12 mb-2 text-lg font-bold">
        My Orders: {view ? <FaCaretSquareUp onClick={orderShow} /> : <FaCaretSquareDown onClick={orderShow} />}
      </p>
      {view && (
        <div className="w-auto mb-4">
          {orders.map((eachOrder, i) => (
            <div key={i} className="p-2 my-2 rounded-lg box" style={{ backgroundColor: 'rgba(37, 116, 37,0.6)' }}>
              <div className="flex justify-between">
                <div className="flex">
                  <b>{i + 1}.</b>
                  <p className="ml-4 mr-3">
                    Order Date :<b> {formatDate(eachOrder.date_created)}</b>
                  </p>
                </div>
                <p className="mr-3 text-white">
                  Order Status : <b>{eachOrder.order_status}</b> <br /> Payment Mode: <b>{eachOrder.payment_method}</b>
                </p>
                {/* <Image
                // src={getAbsImageUrl(mainImage)}
                // alt={product.name}
                className="object-cover w-full h-auto"
                width={900}
                height={700}
              /> */}
              </div>
              <hr />
              <p className="ml-4">
                Product Name :
                <span className="text-white">
                  {eachOrder.items[0].name} <span className="text-sm">{eachOrder.items[0].short_description}</span>
                </span>
              </p>
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
      )}
    </>
  );
}

export default UserOrderSection;
