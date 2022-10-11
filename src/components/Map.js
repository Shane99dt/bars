import { MapContext } from "../contexts/Map"
import { useContext, useEffect, useRef } from "react"


import * as L from "leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { MapContainer, TileLayer, Marker, Circle, Tooltip, useMap } from "react-leaflet"
import BarMarkerPopup from "./BarMarkerPopup"
import MapContent from "./MapContent"

const markerIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-icon-2x.png',
  iconSize: [32, 50]
})

const LeafIcon = L.Icon.extend({
  options: {}
});

const greenIcon = new LeafIcon({
  iconUrl:
    "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
  iconSize: [24, 35]
});





const Map = () => {
  // const titleRef = useRef()

  // const handleChangeHover = () => {
  //   titleRef.scrollIntoView({ behavior: 'smooth' })
  // }
  const { location, bars, setSelectedBar, selectedBar } = useContext(MapContext)
  

  if(!location){
    return <div>Loading...</div>
  }

  return(
    <>
      <MapContainer center={[location.lat, location.lng]} zoom={15} scrollWheelZoom={true} >
        <MapContent>

        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Circle center={[location.lat, location.lng]} radius={300} />
        <Marker position={[location.lat, location.lng]} icon={markerIcon}>
          <Tooltip>
            You're Here
          </Tooltip>
        </Marker>
        {bars.map((bar) => {
          return(
            <Marker key={bar.id} position={[bar.latitude, bar.longitude]} icon={greenIcon} eventHandlers={{mouseover:() => {setSelectedBar(bar)}}} >
              <Tooltip>
                <BarMarkerPopup name={bar.name} address={bar.address} price={bar.price}/>
              </Tooltip>
            </Marker>
          )
        })}
        </MapContent>

      </MapContainer>
    </>
  )
}


export default Map