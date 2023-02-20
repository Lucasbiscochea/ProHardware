import { useParams } from "react-router-dom"


 const ItemDetailsContainer = () => {

  const { idProducto }= useParams()
  console.log (idProducto)
  return (
    <div>ItemDetailsContainer</div>
  )
}

export default ItemDetailsContainer
