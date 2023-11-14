/* eslint-disable react/no-array-index-key */
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

function Rating({ rating, totalRating, containerClassName = '', fontSize = '20px' }) {
  return (
    <div className={`flex -ml-1 text-sm ${containerClassName}`}>
      {Array.from({ length: Math.floor(rating) }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <StarIcon
          key={index}
          sx={{
            fontSize,
            color: 'rgb(255, 187, 29)',
          }}
        />
      ))}
      {rating - Math.floor(rating) > 0 ? <StarHalfIcon sx={{ fontSize, color: 'rgb(255, 187, 29)' }} /> : null}
      {Array.from({ length: 5 - Math.ceil(rating) }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <StarOutlineIcon sx={{ fontSize, color: 'rgb(255, 187, 29)' }} key={index} />
      ))}
      {totalRating && <div className="ml-2">({totalRating})</div>}
    </div>
  );
}

export default Rating;
