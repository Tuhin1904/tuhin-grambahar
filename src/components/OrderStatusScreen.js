import { getPriceWithCurrencySymbol } from '@/helpers/product.helper';
import OrderAddressViewSection from './OderProcessingDialog/OrderAddressViewSection';
import OrderProductDetails from './OderProcessingDialog/OrderProductDetails';
import PriceSummarySection from './OderProcessingDialog/PriceSummarySection';
import OrderStatusSvg from './Icons/OrderStatusSvg';
import OrderStatusIcon, { orderStatusColorClassName } from './OrderStatusIcon';

function SectionTitle({ title, className = '' }) {
  return <p className={`mb-3 text-base font-semibold ${className}`}>{title}</p>;
}

function SectionListItem({ title, value, className = '', titleClassName = '', valueClassName = '' }) {
  return (
    <div className={`flex justify-between mb-2 ${className}`}>
      <p className={`text-sm font-medium ${titleClassName}`}>{title}</p>
      <p className={`text-sm ${valueClassName}`}>{value}</p>
    </div>
  );
}

function OrderStatusScreen({ order }) {
  return (
    <>
      <div className="grid grid-cols-1 pb-12 mt-5 mb-10 border-b gap-y-10 gap-x-14 sm:grid-cols-2">
        <div className="flex justify-center">
          <OrderStatusSvg className="max-w-xs text-primary" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex-grow">
            <p className="mb-6 text-3xl font-semibold text-center text-secondary-black">Order Status</p>
            <div className="flex items-center justify-center mb-4">
              <OrderStatusIcon orderStatus={order.order_status} className="w-28 h-28" />
            </div>
            <p className={`font-medium text-center uppercase text-19 ${orderStatusColorClassName(order.order_status)}`}>
              {order.order_status}
            </p>
          </div>
          <div className="flex items-end justify-end w-full mt-10">
            <p className="py-1 pr-2 font-semibold text-white rounded-l-full pl-7 bg-primary">Thanks for choosing us</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 pt-10 gap-x-16 gap-y-10 sm:grid-cols-2">
        <div>
          {order.items.map((item) => (
            <div key={item.id} className="py-3 border-b shadow-sm mb-9 border-primary">
              <OrderProductDetails product={item} quantity={item.quantity} readOnly />
            </div>
          ))}

          <OrderAddressViewSection address={order.billing_address} className="mt-6" sectionTitle="Billing Address" />

          <OrderAddressViewSection address={order.shipping_address} className="mt-8" sectionTitle="Shipping Address" />
        </div>
        <div>
          <PriceSummarySection
            product={order.items[0]}
            quantity={order.items[0].quantity}
            showDeliveryCharge
            deliveryCharge={order.shipping_change}
            className=""
          />

          <SectionTitle title="Order Details" className="mt-6" />
          <SectionListItem title="Order Id" value={`OD${order.id}${order.date_created.split('-')[0]}-${order.id}`} />
          <SectionListItem title="Order Date" value={`${order.date_created.split('T')[0]}`} />
          <SectionListItem
            title="Order status"
            valueClassName={`capitalize text-medium ${orderStatusColorClassName(order.order_status)}`}
            value={`${order.order_status}`}
          />
          <SectionListItem title="Payment Method" valueClassName="capitalize" value={order.payment_method} />

          <SectionTitle title="Transaction Details" className="mt-8" />
          <SectionListItem title="Transaction Id" value={`${order.transaction_id}`} />
          <SectionListItem title="Transaction State" value={`${order.transaction_details.state}`} />
          <SectionListItem title="Payment Id" value={`${order.transaction_details.transactionId}`} />
          <SectionListItem
            title="Transaction Amount"
            value={getPriceWithCurrencySymbol(order.transaction_details.amount)}
          />
        </div>
      </div>
    </>
  );
}

export default OrderStatusScreen;
