import { useLoadScript } from "@react-google-maps/api"
import Map from "./components/map"
import google_maps_key from "./google_maps_key"
import Persona from "./components/persona"
import { Route } from 'react-router-dom'
import Activity from "./components/activities"

function App() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: google_maps_key,
    libraries: ["places"]
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    // 

    <div>
      <Map />
      
      {/* <Persona /> */}
      {/* <Activity /> */}
    </div>

  );
}

export default App;
