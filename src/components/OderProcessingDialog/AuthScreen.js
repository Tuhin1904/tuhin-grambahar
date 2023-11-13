import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FullWithPrimaryButton from './FullWithPrimaryButton';
import { sendLoginOtp, verifyLoginOtp } from '@/services/auth.service';
import ErrorAlert from './ErrorAlert';
import { getMyProfile, updateMyPersonalInfo } from '@/services/account.services';
import { getLocalStorageUser, setLocalStorageUser } from '@/helpers/localStorage.helper';
import OrderProductDetails from './OrderProductDetails';
import { extractServerValidationError } from '@/helpers/serverValidationError.helper';

function AuthScreen({
  product,
  quantity,
  continueHandler,
  disableBackButton,
  enableBackButton,
  backToPreviousHandler,
}) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const onAuthorizationErrorGoBack = (err) => {
    if (err?.response?.status === 401) {
      setTimeout(() => {
        backToPreviousHandler();
      }, 300);
    }
  };

  const sendOtpHandler = async () => {
    setLoading(true);
    setError('');
    disableBackButton();
    try {
      await sendLoginOtp(phoneNumber);
      setShowOtp(true);
    } catch (err) {
      console.error('📢[AuthScreen.js]: err: ', err);
      setError(
        extractServerValidationError(err) || err?.response?.data?.error || err?.message || 'Error at sending otp',
      );
      onAuthorizationErrorGoBack(err);
    } finally {
      setLoading(false);
      enableBackButton();
    }
  };

  const verifyOtpHandler = async () => {
    setLoading(true);
    setError('');
    disableBackButton();
    try {
      const res = await verifyLoginOtp(phoneNumber, otp);
      setLocalStorageUser(res);
      const profile = await getMyProfile();
      setUserName(() => profile.name || '');
      setUserEmail(() => profile.email || '');
      setUser(() => res);
      if (profile.name && profile.email) {
        await continueHandler();
      }
    } catch (err) {
      console.error('📢[AuthScreen.js]: err: ', err);
      setError(
        extractServerValidationError(err) || err?.response?.data?.error || err?.message || 'Error at sending otp',
      );
      onAuthorizationErrorGoBack(err);
    } finally {
      setLoading(false);
      enableBackButton();
    }
  };

  const saveUserDateHandler = async () => {
    setLoading(true);
    setError('');
    disableBackButton();
    try {
      await updateMyPersonalInfo({ email: userEmail, name: userName });
      await continueHandler();
    } catch (err) {
      console.error('📢[AuthScreen.js]: err: ', err);
      setError(
        extractServerValidationError(err) || err?.response?.data?.error || err?.message || 'Error at sending otp',
      );
      onAuthorizationErrorGoBack(err);
    } finally {
      setLoading(false);
      enableBackButton();
    }
  };

  useEffect(() => {
    const localUser = getLocalStorageUser();
    if (localUser?.auth) {
      setLoading(() => true);
      disableBackButton();
      getMyProfile()
        .then((res) => {
          setUserName(() => res.name || '');
          setUserEmail(() => res.email || '');
          if (res.name && res.email) {
            continueHandler();
          }
          setLoading(() => false);
          enableBackButton();
        })
        .catch((err) => {
          console.error('📢[AuthScreen.js]: err: ', err);
          setError(
            extractServerValidationError(err) ||
              err?.response?.data?.error ||
              err?.message ||
              'Error at getting user profile',
          );
          setLoading(() => false);
          enableBackButton();
          onAuthorizationErrorGoBack(err);
        });
    }

    setUser(localUser);
  }, []);

  if (user?.auth)
    return (
      <>
        <div className="py-3 border-b shadow-sm mb-9 border-primary">
          <OrderProductDetails product={product} quantity={quantity} readOnly />
        </div>

        <TextField
          fullWidth
          label="Account Name"
          type="text"
          required
          variant="standard"
          placeholder="Riya"
          disabled={loading}
          value={userName}
          sx={{ mb: 3 }}
          onChange={(event) => setUserName(() => event.target.value || '')}
        />
        <TextField
          fullWidth
          label="Account Email"
          type="email"
          required
          variant="standard"
          placeholder="example@gmail.com"
          disabled={loading}
          value={userEmail}
          sx={{ mb: 3 }}
          onChange={(event) => setUserEmail(() => event.target.value || '')}
        />
        <FullWithPrimaryButton
          onClick={saveUserDateHandler}
          className="font-bold"
          disabled={!userName?.trim() || !userEmail?.trim()}
          loading={loading}
        >
          Continue to Checkout
          <ArrowForwardIcon sx={{ fontSize: '24px', marginLeft: '8px' }} />
        </FullWithPrimaryButton>
        <ErrorAlert error={error} />
      </>
    );

  return (
    <>
      <div className="py-3 border-b shadow-sm mb-9 border-primary">
        <OrderProductDetails product={product} quantity={quantity} readOnly />
      </div>

      <TextField
        fullWidth
        label="Phone Number"
        type="tel"
        required
        variant="standard"
        placeholder="9876543210"
        autoFocus
        disabled={showOtp || loading}
        value={phoneNumber}
        sx={{ mb: 3 }}
        onChange={(event) => setPhoneNumber(() => event.target.value)}
      />
      {showOtp && (
        <TextField
          fullWidth
          sx={{ mb: 3 }}
          disabled={loading}
          label="OTP for account verification"
          type="number"
          autoFocus
          required
          variant="standard"
          placeholder="123456"
          value={otp}
          onChange={(event) => setOtp(() => event.target.value)}
        />
      )}
      <FullWithPrimaryButton
        onClick={showOtp ? verifyOtpHandler : sendOtpHandler}
        className="font-bold"
        disabled={showOtp ? String(otp).length < 6 : phoneNumber?.length < 10}
        loading={loading}
      >
        {showOtp ? 'Verify OTP' : 'Send OTP'}
      </FullWithPrimaryButton>
      <ErrorAlert error={error} />
    </>
  );
}

export default AuthScreen;
