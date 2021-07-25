const Info = ({ info, onClick }) => {
  return (
    <>
      <div className="close-button" onClick={onClick}>
        &#215;
      </div>
      <div className="event-info">
        <div>
          <span>ID:</span>
          <span>{info.id}</span>
        </div>
        <div>
          <span>TITLE:</span>
          <span>{info.title}</span>
        </div>
        <div>
          <span>DATE:</span>
          <span>{info.date}</span>
        </div>
        <div>
          <span>LAT:</span>
          <span>{info.lat}</span>
        </div>
        <div>
          <span>LNG:</span>
          <span>{info.lng}</span>
        </div>
      </div>
    </>
  );
};
export default Info;
