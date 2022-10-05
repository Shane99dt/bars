import { useContext, useRef } from "react"
import { MapContext } from "../contexts/Map"
import BarCard from "./BarCard"

const SideList = () => {
  const {bars} = useContext(MapContext)
  // console.log(bars)
  const titleRef = useRef()


  return(
    <div className="w-30 sidelist-box flex flex-col gap">
      {bars.map((bar, i) => {
        return(
          <BarCard key={i} name={bar.name} address={bar.address} price={bar.price}/>
        )
      })}
    </div>
  )
}

export default SideList