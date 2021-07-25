import { useState, useEffect } from "react";

import MyMap from "./components/MyMap";
import Spinner from "./components/Spinner";
import Header from "./components/Header";

function App() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      let res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
      let { events } = await res.json();
      setEvents(events);
      setIsLoading(false);
    };
    getEvents();
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? <Spinner /> : <MyMap events={events} />}
    </div>
  );
}

export default App;
