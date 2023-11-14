import Rating from './Rating';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

function ShowProductReviews({ reviews, className = '' }) {
  return (
    <ul className={className}>
      {shuffleArray(reviews).map((review) => (
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
          <p className="mt-2 text-gray-700 pl-13">{review.review}</p>
        </li>
      ))}
    </ul>
  );
}

export default ShowProductReviews;
