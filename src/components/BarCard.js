const BarCard = ({ name, address, price }) => {
  return(
    <div className="barCard">
      <p className="h1">{name}</p>
      <p className="mini">{address}</p>
      <p className="mini">A pint costs <span className="bold">{price}€</span></p>
    </div>
  )
}

export default BarCard