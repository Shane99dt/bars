import { createContext, useEffect, useState } from "react";
import barsTable from "../bars.json"

const MapContext = createContext({})

const MapContextProvidor = ({children}) => {
  const [ location, setLocation ] = useState(null)
  const [ bars, setBars ] = useState(barsTable)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      location => {
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        })
      },
      error => {
        console.log(error)
      }
    )
  }, [])

  const value = {
    location,
    bars,
  }

  return (
    <MapContext.Provider value={value}>{children}</MapContext.Provider>
  )
}

export { MapContext, MapContextProvidor }