import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FullScreenLoader from '@/components/FullScreenLoader';

function PaymentCompleted() {
  const router = useRouter();
  const [transactionId, setTransactionId] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      console.log('📢[completed.js:6]: router: ', router.query);
      setTransactionId(() => router.query.id);
      setOrderId(() => router.query.order);
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

  return (
    <div className="container px-4 py-4 mx-auto">
      <div>1</div>
      <div>2</div>
    </div>
  );
}

export default PaymentCompleted;
