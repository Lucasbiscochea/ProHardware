import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import  { traerProductos } from "../../utils/gFecht"
import "./ItemListContainer.css"
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams()
    console.log(idCategoria)

useEffect(()=>{
    traerProductos()
    .then(resp =>{
        if (idCategoria) {
            setProductos(resp.filter(items=> items.categoria===idCategoria))
        } else {  
           setProductos(resp)  
        }
    })
    .catch( err => console.log(err))
    .finally( ()=> setLoading(false))
},[idCategoria])

   console.log(productos)
    return(
        <div className="main_content">
           {loading 
           ? <p>Cargando</p> 
           : productos.map((item)=><div className="card" key={item.id}>
           <div className="card_img">
               <img src={item.thumb} />
           </div>
           <div className="card_header">
               <h2>{item.product_name}</h2>
               <p className="price">{item.price}<span>{item.currency}</span></p>
               <Link to={`/detalle/${item.id}`} className="btn">
               <div>Ver Detalles</div>
               </Link>
           </div>
       </div>) }
        </div>
  )
}