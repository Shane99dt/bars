import { useRef, useEffect } from "react"

const BarCard =({ name, address, price, handleMouseEnter, selected }) => {

  const ref = useRef()

  useEffect(() => {
    if(selected){
      ref.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [selected])

  return(
    <div ref={ref} className={`${selected ? 'selected': ''} barCard`} onMouseEnter={handleMouseEnter}>
      <p className="h1">{name}</p>
      <p className="mini">{address}</p>
      <p className="mini">A pint costs <span className="bold">{price}€</span></p>
    </div>
  )
}

export default BarCard