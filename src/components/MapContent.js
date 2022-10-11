import { useContext, useEffect } from "react"
import { MapContext } from "../contexts/Map"
import { useMap } from "react-leaflet"

const MapContent = ({children}) => {
  const map = useMap()
  const { selectedBar } = useContext(MapContext)

  useEffect(() => {
    if(selectedBar){
      map.setView(
        [selectedBar.latitude, selectedBar.longitude],
        map.getZoom(),
        {
          animate: true,
          pan:{
            duration: 0.5
          }
        }
      )
    }
  }, [selectedBar])

  return <>{children}</>
}

export default MapContent