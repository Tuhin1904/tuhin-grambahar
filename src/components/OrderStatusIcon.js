export const orderStatusColorClassName = (orderStatus) => {
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

function OrderStatusIcon({ orderStatus, className = '' }) {
  let colorClassName = 'text-secondary-black';

  if (orderStatus === 'on-hold') colorClassName = 'text-yellow-500';
  if (orderStatus === 'delayed') colorClassName = 'text-yellow-500';
  if (orderStatus === 'payment_pending') colorClassName = 'text-yellow-500';
  if (orderStatus === 'pending') colorClassName = 'text-yellow-500';
  if (orderStatus === 'confirm') colorClassName = 'text-yellow-500';
  if (orderStatus === 'in-progress') colorClassName = 'text-blue-500';
  if (orderStatus === 'out_for_delivery') colorClassName = 'text-blue-500';
  if (orderStatus === 'cancelled') colorClassName = 'text-red-500';
  if (orderStatus === 'refunded') colorClassName = 'text-red-500';
  if (orderStatus === 'delivered') colorClassName = 'text-green-500';

  if (orderStatus === 'on-hold') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`${colorClassName} ${className}`}
      >
        <g fill="none">
          <path d="M24 0v24H0V0h24zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018zm.265-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092z" />
          <path
            fill="currentColor"
            d="M12 4a8 8 0 110 16 8 8 0 010-16zM4.6 5.2a1 1 0 01.199 1.4A8.956 8.956 0 003 12c0 2.027.67 3.895 1.799 5.4a1 1 0 01-1.6 1.2A10.956 10.956 0 011 12c0-2.475.819-4.762 2.2-6.6a1 1 0 011.4-.2zm16.2.2A10.956 10.956 0 0123 12c0 2.475-.819 4.762-2.2 6.6a1 1 0 11-1.599-1.2A8.956 8.956 0 0021 12c0-2.027-.67-3.895-1.799-5.4a1 1 0 011.6-1.2zM12 6a6 6 0 100 12 6 6 0 000-12zm2 2a1 1 0 011 1v6a1 1 0 11-2 0v-2h-2v2a1 1 0 11-2 0V9a1 1 0 112 0v2h2V9a1 1 0 011-1z"
          />
        </g>
      </svg>
    );
  }

  if (orderStatus === 'delayed') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className={`${colorClassName} ${className}`}
      >
        <g fill="none" stroke="currentColor" strokeWidth="4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M36 26V14a2 2 0 00-2-2H10a2 2 0 00-2 2v24a2 2 0 002 2h17M16 12v28m12-28v17m0-17V6a2 2 0 00-2-2h-8a2 2 0 00-2 2v6"
          />
          <path d="M35 44a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M34 32v4h4" />
          <path strokeLinecap="round" d="M13 40v4" />
        </g>
      </svg>
    );
  }

  if (orderStatus === 'out_for_delivery') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`${colorClassName} ${className}`}
      >
        <g fill="none">
          <path
            fill="currentColor"
            d="M7.506 15.265a.75.75 0 001.446-.4l-1.446.4zm-1.43-7.99l.724-.2-.723.2zM4.705 5.92l-.2.723.2-.723zM3.2 4.725a.75.75 0 10-.402 1.445L3.2 4.725zm16.988 11a.75.75 0 10-.378-1.451l.378 1.451zm-9.991 1.834c.31 1.12-.37 2.303-1.574 2.616L9 21.626c1.977-.513 3.185-2.502 2.643-4.467l-1.446.4zm-1.574 2.616c-1.212.315-2.428-.389-2.74-1.519l-1.446.4c.54 1.955 2.594 3.082 4.563 2.57l-.377-1.451zm-2.74-1.519c-.31-1.12.37-2.303 1.574-2.616l-.377-1.45c-1.977.513-3.186 2.502-2.643 4.467l1.446-.4zm1.574-2.616c1.212-.315 2.428.389 2.74 1.519l1.446-.4c-.54-1.955-2.594-3.082-4.563-2.57l.377 1.451zm1.494-1.175L6.8 7.075l-1.446.4 2.152 7.79 1.446-.4zM4.904 5.197l-1.703-.472-.402 1.445 1.704.473.401-1.446zM6.8 7.075a2.707 2.707 0 00-1.896-1.878l-.4 1.446c.425.118.742.44.85.831l1.446-.4zm4.31 11.01l9.079-2.36-.378-1.451-9.079 2.36.377 1.451z"
          />
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M9.565 8.73c-.485-1.755-.727-2.633-.315-3.324.411-.692 1.316-.927 3.126-1.398l1.92-.498c1.81-.47 2.715-.706 3.428-.307.713.4.956 1.277 1.44 3.033l.515 1.862c.485 1.755.728 2.633.316 3.325-.412.691-1.317.927-3.127 1.397l-1.92.499c-1.81.47-2.715.705-3.428.306-.713-.4-.955-1.277-1.44-3.032L9.565 8.73z"
            opacity="0.5"
          />
        </g>
      </svg>
    );
  }

  if (orderStatus === 'refunded') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`${colorClassName} ${className}`}
      >
        <path
          fill="currentColor"
          d="M13.91 2.91L11.83 5H14a8 8 0 018 8h-2a6 6 0 00-6-6h-2.17l2.09 2.09-1.42 1.41L8 6l1.41-1.41L12.5 1.5l1.41 1.41zM2 12v10h16V12H2zm2 6.56v-3.11A4 4 0 005.45 14h9.1A4 4 0 0016 15.45v3.11A3.996 3.996 0 0014.57 20H5.45A3.996 3.996 0 004 18.56zm6 .44c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2z"
        />
      </svg>
    );
  }

  if (orderStatus === 'cancelled') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`${colorClassName} ${className}`}
      >
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2">
          <path strokeDasharray="60" strokeDashoffset="60" d="M5.636 5.636a9 9 0 1112.728 12.728A9 9 0 015.636 5.636z">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0" />
          </path>
          <path strokeDasharray="18" strokeDashoffset="18" d="M6 6l12 12">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="18;0" />
          </path>
        </g>
      </svg>
    );
  }

  if (orderStatus === 'payment_pending' || orderStatus === 'pending') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`${colorClassName} ${className}`}
      >
        <path
          fill="currentColor"
          d="M7 13.5q.625 0 1.063-.438T8.5 12q0-.625-.438-1.063T7 10.5q-.625 0-1.063.438T5.5 12q0 .625.438 1.063T7 13.5zm5 0q.625 0 1.063-.438T13.5 12q0-.625-.438-1.063T12 10.5q-.625 0-1.063.438T10.5 12q0 .625.438 1.063T12 13.5zm5 0q.625 0 1.063-.438T18.5 12q0-.625-.438-1.063T17 10.5q-.625 0-1.063.438T15.5 12q0 .625.438 1.063T17 13.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20zm0-8z"
        />
      </svg>
    );
  }

  if (orderStatus === 'in-progress') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`${colorClassName} ${className}`}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M1 1h22M10 4.5h4V6c0 1-2 2-2 2s-2-1-2-2V4.5zM5 1v5c0 3 5 3.235 5 6s-5 3-5 6v5M19 1v5c0 3-5 3.235-5 6s5 3 5 6v5M1 23h22M8 21c0-2 4-4 4-4s4 2 4 4v2H8v-2z"
        />
      </svg>
    );
  }
  if (orderStatus === 'confirm' || orderStatus === 'delivered') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`${colorClassName} ${className}`}
      >
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path strokeDasharray="60" strokeDashoffset="60" d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0" />
          </path>
          <path strokeDasharray="14" strokeDashoffset="14" d="M8 12l3 3 5-5">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0" />
          </path>
        </g>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`${colorClassName} ${className}`}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12a9.97 9.97 0 001.3 4.935l-1.249 3.749a1 1 0 001.265 1.265l3.749-1.25A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 6c-.902 0-1.731.297-2.4.8a1 1 0 11-1.2-1.6 6 6 0 018.4 8.4 1 1 0 01-1.598-1.2A4 4 0 0012 8zm-5 3a1 1 0 011 1 4 4 0 004 4 1 1 0 110 2 6 6 0 01-6-6 1 1 0 011-1zm5-1a2 2 0 100 4 2 2 0 000-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default OrderStatusIcon;
