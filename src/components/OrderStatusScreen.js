import { getPriceWithCurrencySymbol } from '@/helpers/product.helper';
import OrderAddressViewSection from './OderProcessingDialog/OrderAddressViewSection';
import OrderProductDetails from './OderProcessingDialog/OrderProductDetails';
import PriceSummarySection from './OderProcessingDialog/PriceSummarySection';

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

const orderStatusColorClassName = (orderStatus) => {
  if (orderStatus === 'on-hold') return 'text-yellow-500';
  if (orderStatus === 'in-progress') return 'text-blue-500';
  if (orderStatus === 'cancelled') return 'text-red-500';
  if (orderStatus === 'refunded') return 'text-red-500';
  if (orderStatus === 'delayed') return 'text-yellow-500';
  if (orderStatus === 'out_for_delivery') return 'text-blue-500';
  if (orderStatus === 'delivered') return 'text-green-500';
  if (orderStatus === 'payment_pending') return 'text-yellow-500';
  if (orderStatus === 'pending') return 'text-yellow-500';
  if (orderStatus === 'confirm') return 'text-yellow-500';

  return '';
};

function OrderStatusScreen({ order }) {
  return (
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
  );
}

export default OrderStatusScreen;
