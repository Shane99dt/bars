import Map from "./components/Map"
import { MapContextProvidor } from "./contexts/Map"

import './App.css'
import SideList from "./components/SideList"

const App = () => {
  return(
    <MapContextProvidor>
        <div className="flex hidden-y">
          <SideList/>
          <Map/>
        </div>
    </MapContextProvidor>
  )
}

export default App