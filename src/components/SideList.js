import { useContext } from "react"
import { MapContext } from "../contexts/Map"
import BarCard from "./BarCard"

const SideList = () => {
  const {bars, setSelectedBar, selectedBar } = useContext(MapContext)

  const handleChangeHover = (bar) => {
    setSelectedBar(bar)
  }


  return(
    <div className="w-30 sidelist-box flex flex-col gap">
      {bars.map((bar) => {
        return(
            <BarCard key={bar.id} name={bar.name} address={bar.address} price={bar.price} selected={selectedBar?.id === bar.id} handleMouseEnter={() => handleChangeHover(bar)} />
        )
      })}
    </div>
  )
}

export default SideList