import { useState, useEffect } from "react";
import { Map, Overlay } from "pigeon-maps";
import Marker from "./Marker.js";
import Info from "./Info.js";

const MyMap = ({ events }) => {
  const [info, setInfo] = useState();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setInfo();
    setShow(true);
  }, [show]);

  return (
    <div className="map">
      <Map defaultCenter={[45, -93]} defaultZoom={4} minZoom={3}>
        {events
          .filter((e) => e.categories[0].id === 8)
          .map((e) => {
            const id = e.id;
            const title = e.title;
            const date = e.geometries[0].date;
            const lat = e.geometries[0].coordinates[1];
            const lng = e.geometries[0].coordinates[0];
            return (
              <Overlay key={e.id} anchor={[lat, lng]}>
                <Marker
                  onClick={() => setInfo({ id, title, date, lat, lng })}
                />
              </Overlay>
            );
          })}
      </Map>
      {show && info && <Info info={info} onClick={() => setShow(!show)} />}
    </div>
  );
};

export default MyMap;
