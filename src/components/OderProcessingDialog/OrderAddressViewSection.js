function OrderAddressViewSection({ address, className = '', sectionTitle = 'Delivered To' }) {
  return (
    <div className={`text-sm ${className}`}>
      <p className="mb-2 text-base font-semibold">{sectionTitle}</p>
      <p className="mb-1 text-sm">{address.name}</p>
      <p className="mb-1 text-sm">{address.address_line_1}</p>
      <p className="mb-1">
        {address.address_line_2}, {address.landmark}
      </p>
      <p className="mb-1">
        {address.district}, {address.state} - {address.pin}, {address.country}
      </p>
      <p className="">Phone Number: {address.phone_number}</p>
    </div>
  );
}

export default OrderAddressViewSection;
