/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ErrorAlert from './ErrorAlert';
import { addMyAddress, deleteMyAddress, getMyAddresses, updateMyAddress } from '@/services/account.services';
import AddressModificationDialog from './AddressModificationDialog';
import OrderProductDetails from './OrderProductDetails';
import DeleteAddressDialog from './DeleteAddressDialog';
import FullWithPrimaryButton from './FullWithPrimaryButton';
import { extractServerValidationError } from '@/helpers/serverValidationError.helper';

function AddressScreen({
  product,
  quantity,
  userAddress,
  setUserAddress,
  selectedAddress,
  setSelectedAddress,
  continueHandler,
  disableBackButton,
  enableBackButton,
  user,
}) {
  const [editAddressId, setEditAddressId] = useState(null);
  const [deleteAddressId, setDeleteAddressId] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [addNewAddress, setAddNewAddress] = useState(false);

  const onAddressUpdateHandler = async (address) => {
    setLoading(true);
    setError('');
    disableBackButton();

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
      setError(
        extractServerValidationError(err) || err?.response?.data?.error || err?.message || 'Error at updating address',
      );
    } finally {
      setLoading(false);
      enableBackButton();
    }
  };

  const onClickDeleteAddressHandler = async () => {
    setError('');
    setLoading(true);
    disableBackButton();
    try {
      await deleteMyAddress(deleteAddressId);
      const newAddress = await getMyAddresses();
      setUserAddress(() => newAddress);
      setEditAddressId(() => null);
      setDeleteAddressId(() => null);
    } catch (err) {
      console.error('📢[AddressScreen.js]: err: ', err);
      setError(
        extractServerValidationError(err) || err?.response?.data?.error || err?.message || 'Error at deleting address',
      );
    } finally {
      setLoading(false);
      enableBackButton();
    }
  };

  const toggleAddNewAddress = () => {
    setAddNewAddress((prev) => !prev);
  };

  const addNewAddressHandler = async (address) => {
    setError('');
    setLoading(true);
    disableBackButton();
    try {
      const response = await addMyAddress({
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
        return [...prev, response];
      });
      setAddNewAddress(() => false);
    } catch (err) {
      console.error('📢[AddressScreen.js]: err: ', err);
      setError(
        extractServerValidationError(err) ||
          err?.response?.data?.error ||
          err?.message ||
          'Error at adding new address',
      );
    } finally {
      setLoading(false);
      enableBackButton();
    }
  };

  useEffect(() => {
    if (userAddress?.length === 0) {
      setAddNewAddress(() => true);
    } else if (userAddress?.length === 1) {
      setSelectedAddress(() => userAddress[0].id);
    }
  }, [setSelectedAddress, userAddress]);

  return (
    <>
      <div className="py-3 border-b shadow-sm mb-9 border-primary">
        <OrderProductDetails product={product} quantity={quantity} readOnly />
      </div>

      <p className="mb-2 font-semibold">Select Delivery Address</p>
      {userAddress?.length > 0 && (
        <ul className="text-sm text-primary-black">
          {userAddress.map((address) => (
            <li
              onClick={() => {
                setSelectedAddress(() => address.id);
              }}
              key={address.id}
              className={`px-2 pb-2 py-1.5 duration-500 mb-1 mt-1 border ease-in-out border-b cursor-pointer hover:bg-opacity-5 hover:bg-primary  ${
                address.id === selectedAddress
                  ? 'border-primary bg-primary bg-opacity-10'
                  : 'border-transparent border-b-gray-800 last:border-b-0'
              }`}
            >
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
                {address.address_line_2 ? `${address.address_line_2}, ` : ''}
                {address.landmark}
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

      <div className="flex items-center justify-end mt-6">
        <button
          type="button"
          onClick={toggleAddNewAddress}
          className="flex items-center px-4 py-1 text-sm font-semibold border-2 rounded-l-full text-primary border-primary"
        >
          <AddCircleIcon sx={{ mr: 1, fontSize: '19px' }} />
          Add Address
        </button>
      </div>

      {addNewAddress && (
        <AddressModificationDialog
          open={addNewAddress}
          title="Add New Address"
          initialAddress={{
            name: user?.name,
            phone_number: user?.phone_number,
          }}
          actionButtonLabel={
            <>
              Add New Address
              <AddIcon sx={{ ml: 1.5, fontSize: '22px' }} />
            </>
          }
          onClickCLoseHandler={() => {
            setAddNewAddress(() => null);
            setError('');
          }}
          loading={loading}
          actionButtonHandler={addNewAddressHandler}
        >
          <ErrorAlert error={error} />
        </AddressModificationDialog>
      )}

      <div className="mt-8">
        <FullWithPrimaryButton
          onClick={continueHandler}
          disabled={!userAddress.some((adds) => adds.id === selectedAddress)}
        >
          Delivered to this address <HomeIcon sx={{ fontSize: '24px', marginLeft: '8px' }} />
        </FullWithPrimaryButton>
      </div>

      <ErrorAlert error={error} />
    </>
  );
}

export default AddressScreen;
