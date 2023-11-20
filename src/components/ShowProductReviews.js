import { useState } from 'react';
import SealCheckFillIcon from './Icons/SealCheckFillIcon';
import Rating from './Rating';

const humanizeDate = (date) => {
  const d = new Date(date);

  const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

function ShowProductReviews({ reviews, className = '' }) {
  const [showAllReviews, setShowAllReviews] = useState(10);

  const showMoreReviewsHandler = () => {
    setShowAllReviews((prevShowAllReviews) => prevShowAllReviews + 10);
  };

  return (
    <div className="pt-10" id="user-reviews">
      <p className="pb-12 text-xl font-semibold sm:text-2xl">Our User Reviews</p>
      <ul className={className}>
        {reviews.slice(0, showAllReviews).map((review) => (
          <li key={review.id} className="py-4 border-b border-b-gray-200">
            <div className="flex items-center text-secondary-black">
              <div className="flex items-center justify-center mr-4 text-lg font-semibold text-center text-white rounded-full bg-opacity-85 w-9 h-9 bg-primary">
                {review.name.substring(0, 1)}
              </div>
              <div>
                <p className="mb-1 font-medium">{review.name}</p>
                <Rating rating={review.rating} textClassName="text-11" fontSize="18px" />
              </div>
              <p />
            </div>
            <div className="flex items-center mt-2 text-sm pl-9">
              <p className="ml-4">Reviewed on {humanizeDate(review.date)}</p>
              <p className="flex items-center ml-5 font-medium text-site-orange">
                <SealCheckFillIcon className="w-5 h-5 mr-2" />
                Verified Purchase
              </p>
            </div>
            <p className="mt-2.5 text-gray-700 pl-13 font-medium">{review.review}</p>
          </li>
        ))}
        {showAllReviews < reviews.length && (
          <li className="flex items-center justify-center mt-10">
            <button type="button" className="font-bold text-primary" onClick={showMoreReviewsHandler}>
              Show More Reviews
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ShowProductReviews;
