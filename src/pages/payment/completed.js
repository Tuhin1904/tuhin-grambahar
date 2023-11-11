import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function PaymentCompleted() {
  const router = useRouter();
  const [userId, setUserId] = useState(null);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    console.log('📢[completed.js:6]: router: ', router.query);
    setUserId(() => router.query.id);
    setOrderId(() => router.query.order);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container px-4 py-4 mx-auto">
      <div>1</div>
      <div>2</div>
    </div>
  );
}

export default PaymentCompleted;
