import { RiFireFill } from "react-icons/ri";

const Marker = ({ active, onClick }) => {
  console.log()
  return (
    <div className={`marker ${Boolean(active) ? 'active' : ''}`} onClick={onClick}>
      <RiFireFill />
    </div>
  );
};

export default Marker;
