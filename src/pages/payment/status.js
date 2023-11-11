import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FullScreenLoader from '@/components/FullScreenLoader';
import { getOrderStatus } from '@/services/order.services';

function PaymentCompleted() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setLoading(true);
      getOrderStatus({
        transactionId: router.query.id,
        orderId: router.query.order,
      })
        .then((res) => {
          setOrder(res.orderDetails);
          setLoading(false);
        })
        .catch((err) => {
          console.error('📢[status.js]: err: ', err);
          setError(
            err?.response?.data?.error ||
              err?.response?.data?.message ||
              err.message ||
              'Error while checking order status',
          );
        })
        .finally(() => {
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  if (loading) {
    return (
      <>
        <div className="h-screen" />;
        <FullScreenLoader />
      </>
    );
  }

  if (error) {
    return (
      <div className="container min-h-screen px-4 py-4 mx-auto">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }
  return (
    <div className="container min-h-screen px-4 py-4 mx-auto">
      <div className="">
        <pre>{JSON.stringify(order, null, 1)}</pre>
      </div>
    </div>
  );
}

export default PaymentCompleted;
