import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import stateData from '@/data/state.json';
import FullWithPrimaryButton from './FullWithPrimaryButton';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AddressModificationDialog({
  open,
  title,
  initialAddress,
  children,
  actionButtonLabel = '',
  actionButtonHandler,
  onClickCLoseHandler,
  loading = false,
}) {
  const isMobile = useMediaQuery('(max-width:639px)');
  const [addressDetails, setAddressDetails] = useState({
    name: initialAddress?.name || '',
    address_line_1: initialAddress?.address_line_1 || '',
    address_line_2: initialAddress?.address_line_2 || '',
    district: initialAddress?.district || '',
    state: initialAddress?.state || '',
    pin: initialAddress?.pin || '',
    country: 'India',
    phone_number: initialAddress?.phone_number || '',
    landmark: initialAddress?.landmark || '',
  });

  return (
    <Dialog open={open} TransitionComponent={Transition} keepMounted maxWidth="sm" fullWidth fullScreen={isMobile}>
      <DialogTitle>
        <button type="button" className="mr-3 text-secondary-black" onClick={onClickCLoseHandler}>
          <ArrowBackIcon sx={{ fontSize: '20px' }} />
        </button>
        {title}
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Name"
          type="text"
          required
          variant="standard"
          placeholder="Riya"
          value={addressDetails.name}
          sx={{ mb: 3 }}
          onChange={(event) => setAddressDetails((current) => ({ ...current, name: event.target.value }))}
        />

        <TextField
          fullWidth
          label="Address"
          type="text"
          required
          variant="standard"
          placeholder="House No. 123, Street No. 123, Area"
          value={addressDetails.address_line_1}
          sx={{ mb: 3 }}
          onChange={(event) => setAddressDetails((current) => ({ ...current, address_line_1: event.target.value }))}
        />

        <TextField
          fullWidth
          label="Landmark"
          type="text"
          required
          variant="standard"
          placeholder="Near XYZ"
          value={addressDetails.landmark}
          sx={{ mb: 3 }}
          onChange={(event) => setAddressDetails((current) => ({ ...current, landmark: event.target.value }))}
        />

        <TextField
          fullWidth
          label="Phone Number"
          type="tel"
          required
          variant="standard"
          placeholder="9876543210"
          value={addressDetails.phone_number}
          sx={{ mb: 3 }}
          onChange={(event) => setAddressDetails((current) => ({ ...current, phone_number: event.target.value }))}
        />

        <div className="grid grid-cols-2 gap-x-7">
          <FormControl
            required
            variant="standard"
            fullWidth
            sx={{
              mb: 3,
            }}
          >
            <InputLabel>State</InputLabel>
            <Select
              required
              label="State"
              variant="standard"
              value={addressDetails.state}
              onChange={(event) => setAddressDetails((current) => ({ ...current, state: event.target.value }))}
            >
              {stateData?.states?.map((state) => (
                <MenuItem key={state.id} value={state.name}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="District"
            type="text"
            required
            variant="standard"
            placeholder="District"
            value={addressDetails.district}
            sx={{ mb: 3 }}
            onChange={(event) => setAddressDetails((current) => ({ ...current, district: event.target.value }))}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-7">
          <TextField
            fullWidth
            label="PIN"
            type="number"
            required
            variant="standard"
            placeholder="789456"
            value={addressDetails.pin}
            sx={{ mb: 3 }}
            onChange={(event) => setAddressDetails((current) => ({ ...current, pin: event.target.value }))}
          />

          <TextField
            fullWidth
            label="Country"
            type="text"
            required
            disabled
            variant="standard"
            placeholder="India"
            value={addressDetails.country}
            sx={{ mb: 3 }}
            onChange={(event) => setAddressDetails((current) => ({ ...current, country: event.target.value }))}
          />
        </div>

        {children}

        <div className="mt-6">
          <FullWithPrimaryButton
            className="flex items-center justify-center"
            loading={loading}
            disabled={
              addressDetails.name?.trim()?.length === 0 ||
              addressDetails.address_line_1?.trim()?.length === 0 ||
              addressDetails.phone_number?.trim()?.length === 0 ||
              addressDetails.pin?.trim()?.length === 0 ||
              addressDetails.landmark?.trim()?.length === 0 ||
              addressDetails.state?.trim()?.length === 0 ||
              addressDetails.district?.trim()?.length === 0
            }
            onClick={() => actionButtonHandler(addressDetails)}
          >
            {actionButtonLabel}
          </FullWithPrimaryButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddressModificationDialog;
