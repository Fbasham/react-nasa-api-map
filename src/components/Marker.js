import { RiFireFill } from "react-icons/ri";

const Marker = ({ onClick }) => {
  return (
    <div className="marker" onClick={onClick}>
      <RiFireFill />
    </div>
  );
};

export default Marker;
