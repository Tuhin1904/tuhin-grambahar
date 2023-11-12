import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FullScreenLoader from '@/components/FullScreenLoader';
import { getOrderStatus } from '@/services/order.services';
import FullWithPrimaryButton from '@/components/OderProcessingDialog/FullWithPrimaryButton';

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
      <div className="container min-h-screen px-4 py-10 mx-auto">
        <div className="flex items-center justify-center mb-6 text-center text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-10 h-10">
            <path
              fill="currentColor"
              d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8Z"
            />
          </svg>
          <span className="ml-4 text-xl font-medium">Error in the traction</span>
        </div>
        <div className="font-medium text-center text-red-500">{error}</div>

        <div className="flex items-center justify-center mt-8 mb-8">
          <FullWithPrimaryButton onClick={() => router.replace('/')} className="max-w-xs">
            Back to Home
          </FullWithPrimaryButton>
        </div>
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
