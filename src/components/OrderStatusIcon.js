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
          <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
          <path
            fill="currentColor"
            d="M12 4a8 8 0 1 1 0 16a8 8 0 0 1 0-16ZM4.6 5.2a1 1 0 0 1 .199 1.4A8.956 8.956 0 0 0 3 12c0 2.027.67 3.895 1.799 5.4a1 1 0 0 1-1.6 1.2A10.956 10.956 0 0 1 1 12c0-2.475.819-4.762 2.2-6.6a1 1 0 0 1 1.4-.2Zm16.2.2A10.956 10.956 0 0 1 23 12c0 2.475-.819 4.762-2.2 6.6a1 1 0 1 1-1.599-1.2A8.956 8.956 0 0 0 21 12c0-2.027-.67-3.895-1.799-5.4a1 1 0 0 1 1.6-1.2ZM12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12Zm2 2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0V9a1 1 0 1 1 2 0v2h2V9a1 1 0 0 1 1-1Z"
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
        <g fill="none" stroke="currentColor" stroke-width="4">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M36 26V14a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h17M16 12v28m12-28v17m0-17V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6"
          />
          <path d="M35 44a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M34 32v4h4" />
          <path stroke-linecap="round" d="M13 40v4" />
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
            d="M7.506 15.265a.75.75 0 0 0 1.446-.4l-1.446.4Zm-1.43-7.99l.724-.2l-.723.2ZM4.705 5.92l-.2.723l.2-.723ZM3.2 4.725a.75.75 0 1 0-.402 1.445L3.2 4.725Zm16.988 11a.75.75 0 1 0-.378-1.451l.378 1.451Zm-9.991 1.834c.31 1.12-.37 2.303-1.574 2.616L9 21.626c1.977-.513 3.185-2.502 2.643-4.467l-1.446.4Zm-1.574 2.616c-1.212.315-2.428-.389-2.74-1.519l-1.446.4c.54 1.955 2.594 3.082 4.563 2.57l-.377-1.451Zm-2.74-1.519c-.31-1.12.37-2.303 1.574-2.616l-.377-1.45c-1.977.513-3.186 2.502-2.643 4.467l1.446-.4Zm1.574-2.616c1.212-.315 2.428.389 2.74 1.519l1.446-.4c-.54-1.955-2.594-3.082-4.563-2.57l.377 1.451Zm1.494-1.175L6.8 7.075l-1.446.4l2.152 7.79l1.446-.4ZM4.904 5.197l-1.703-.472l-.402 1.445l1.704.473l.401-1.446ZM6.8 7.075a2.707 2.707 0 0 0-1.896-1.878l-.4 1.446c.425.118.742.44.85.831l1.446-.4Zm4.31 11.01l9.079-2.36l-.378-1.451l-9.079 2.36l.377 1.451Z"
          />
          <path
            stroke="currentColor"
            stroke-width="1.5"
            d="M9.565 8.73c-.485-1.755-.727-2.633-.315-3.324c.411-.692 1.316-.927 3.126-1.398l1.92-.498c1.81-.47 2.715-.706 3.428-.307c.713.4.956 1.277 1.44 3.033l.515 1.862c.485 1.755.728 2.633.316 3.325c-.412.691-1.317.927-3.127 1.397l-1.92.499c-1.81.47-2.715.705-3.428.306c-.713-.4-.955-1.277-1.44-3.032L9.565 8.73Z"
            opacity=".5"
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
          d="M13.91 2.91L11.83 5H14a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6h-2.17l2.09 2.09l-1.42 1.41L8 6l1.41-1.41L12.5 1.5l1.41 1.41zM2 12v10h16V12H2zm2 6.56v-3.11A4 4 0 0 0 5.45 14h9.1A4 4 0 0 0 16 15.45v3.11A3.996 3.996 0 0 0 14.57 20H5.45A3.996 3.996 0 0 0 4 18.56zm6 .44c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2s-1.5.895-1.5 2s.672 2 1.5 2z"
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
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
          <path
            stroke-dasharray="60"
            stroke-dashoffset="60"
            d="M5.63604 5.63603C9.15076 2.12131 14.8492 2.12131 18.364 5.63603C21.8787 9.15075 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15075 5.63604 5.63603Z"
          >
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0" />
          </path>
          <path stroke-dasharray="18" stroke-dashoffset="18" d="M6 6L18 18">
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
          d="M7 13.5q.625 0 1.063-.438T8.5 12q0-.625-.438-1.063T7 10.5q-.625 0-1.063.438T5.5 12q0 .625.438 1.063T7 13.5Zm5 0q.625 0 1.063-.438T13.5 12q0-.625-.438-1.063T12 10.5q-.625 0-1.063.438T10.5 12q0 .625.438 1.063T12 13.5Zm5 0q.625 0 1.063-.438T18.5 12q0-.625-.438-1.063T17 10.5q-.625 0-1.063.438T15.5 12q0 .625.438 1.063T17 13.5ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
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
          stroke-width="2"
          d="M1 1h22M10 4.5h4V6c0 1-2 2-2 2s-2-1-2-2V4.5ZM5 1v5c0 3 5 3.235 5 6s-5 3-5 6v5M19 1v5c0 3-5 3.235-5 6s5 3 5 6v5M1 23h22M8 21c0-2 4-4 4-4s4 2 4 4v2H8v-2Z"
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
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path
            stroke-dasharray="60"
            stroke-dashoffset="60"
            d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          >
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0" />
          </path>
          <path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10">
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
        fill-rule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12a9.97 9.97 0 0 0 1.3 4.935l-1.249 3.749a1 1 0 0 0 1.265 1.265l3.749-1.25A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 6c-.902 0-1.731.297-2.4.8a1 1 0 1 1-1.2-1.6a6 6 0 0 1 8.4 8.4a1 1 0 0 1-1.598-1.2A4 4 0 0 0 12 8zm-5 3a1 1 0 0 1 1 1a4 4 0 0 0 4 4a1 1 0 1 1 0 2a6 6 0 0 1-6-6a1 1 0 0 1 1-1zm5-1a2 2 0 1 0 0 4a2 2 0 0 0 0-4z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export default OrderStatusIcon;
