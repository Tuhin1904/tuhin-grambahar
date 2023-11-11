import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';

function FullScreenLoader({ title = '', subTitle = '' }) {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="relative flex items-center justify-center w-32 h-32 mb-6">
          <Image
            quality={80}
            loading="eager"
            src="/grambahar_logo.png"
            alt="logo"
            className="transform -translate-y-2"
            width={80}
            height={80}
          />
          <CircularProgress
            thickness={2}
            size={125}
            sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            color="inherit"
          />
        </div>
        <p className="mb-3 font-bold">{title}</p>
        <p>{subTitle}</p>
      </div>
    </Backdrop>
  );
}

export default FullScreenLoader;
