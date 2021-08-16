import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const Ratings = ({ rating }) => {
  return (
    <div>
      {[...Array(rating)].map((value, index) => (
        <StarIcon key={index} />
      ))}
      {[...Array(10 - rating)].map((value, index) => (
        <StarBorderIcon key={index} />
      ))}
    </div>
  );
};

export default Ratings;
