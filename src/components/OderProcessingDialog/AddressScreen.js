import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorAlert from './ErrorAlert';
import { deleteMyAddress, getMyAddresses, updateMyAddress } from '@/services/account.services';
import AddressModificationDialog from './AddressModificationDialog';
import OrderProductDetails from './OrderProductDetails';
import DeleteAddressDialog from './DeleteAddressDialog';

function AddressScreen({ product, quantity, userAddress, setUserAddress }) {
  const [editAddressId, setEditAddressId] = useState(null);
  const [deleteAddressId, setDeleteAddressId] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onAddressUpdateHandler = async (address) => {
    setLoading(true);
    setError('');
    try {
      const response = await updateMyAddress({
        id: editAddressId,
        name: address.name,
        addressLine1: address.address_line_1,
        addressLine2: address.address_line_2,
        phoneNumber: address.phone_number,
        country: address.country,
        state: address.state,
        district: address.district,
        pin: address.pin,
        landmark: address.landmark,
      });

      setUserAddress((prev) => {
        return prev.map((addr) => {
          if (addr.id === editAddressId) {
            return {
              ...addr,
              address_line_1: response?.address_line_1 || '',
              address_line_2: response?.address_line_2 || '',
              country: response?.country || '',
              district: response?.district || '',
              landmark: response?.landmark || '',
              name: response?.name || '',
              phone_number: response?.phone_number || '',
              pin: response?.pin || '',
              state: response?.state || '',
            };
          }
          return addr;
        });
      });
      setEditAddressId(() => null);
      setDeleteAddressId(() => null);
    } catch (err) {
      console.error('📢[AddressScreen.js]: err: ', err);
      setError(err?.response?.data?.error || err?.message || 'Error at updating address');
    } finally {
      setLoading(false);
    }
  };

  const onClickDeleteAddressHandler = async () => {
    setError('');
    setLoading(true);
    try {
      await deleteMyAddress(deleteAddressId);
      const newAddress = await getMyAddresses();
      setUserAddress(() => newAddress);
      setEditAddressId(() => null);
      setDeleteAddressId(() => null);
    } catch (err) {
      console.error('📢[AddressScreen.js]: err: ', err);
      setError(err?.response?.data?.error || err?.message || 'Error at deleting address');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="py-3 border-b shadow-sm mb-9 border-primary">
        <OrderProductDetails product={product} quantity={quantity} readOnly />
      </div>

      {userAddress?.length > 0 && (
        <ul className="text-sm text-primary-black">
          {userAddress.map((address) => (
            <li key={address.id} className="pb-2 mb-2 border-b last:border-b-0 border-x-gray-800">
              <div className="mb-0.5 flex">
                <p className="flex-grow mr-3 font-medium">{address.name}</p>
                <button
                  type="button"
                  className="text-secondary-black"
                  onClick={() => setEditAddressId(() => address.id)}
                >
                  <EditIcon
                    sx={{
                      fontSize: '18px',
                    }}
                  />
                </button>
              </div>
              <p className="mb-0.5">{address.address_line_1}</p>
              <p className="mb-0.5">
                {address.address_line_2}, {address.landmark}
              </p>
              <p className="">
                {address.district}, {address.state} - {address.pin}, {address.country}
              </p>
            </li>
          ))}
        </ul>
      )}

      {editAddressId && (
        <AddressModificationDialog
          open={editAddressId}
          title="Edit Address"
          initialAddress={userAddress.find((address) => address.id === editAddressId)}
          actionButtonLabel={
            <>
              <CheckIcon sx={{ mr: 1.5, fontSize: '22px' }} />
              Update Address
            </>
          }
          onClickCLoseHandler={() => setEditAddressId(() => null)}
          loading={loading}
          actionButtonHandler={onAddressUpdateHandler}
        >
          <div className="flex items-end justify-end my-3">
            <button
              type="button"
              onClick={() => setDeleteAddressId(() => editAddressId)}
              className="flex items-center text-sm font-medium text-red-500"
            >
              <DeleteIcon sx={{ fontSize: '20px', mr: 1 }} />
              Delete Address
            </button>
            <DeleteAddressDialog
              deleteAddressId={deleteAddressId}
              setDeleteAddressId={setDeleteAddressId}
              loading={loading}
              onClickDeleteAddressHandler={onClickDeleteAddressHandler}
            />
          </div>
        </AddressModificationDialog>
      )}

      <ErrorAlert error={error} />
    </>
  );
}

export default AddressScreen;
