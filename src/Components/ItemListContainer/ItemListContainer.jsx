import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import gFecht, { traerProductos } from "../../utils/gFecht"
import "./ItemListContainer.css"


export const ItemListContainer = () => {
    const [loading, setLoading] = useState()
    const [productos, setProductos] = useState()
    const { idCategoria } = useParams()
    console.log(idCategoria)

    useEffect(()=> {
        if (idCategoria) {
            traerProductos()
            .then(resp => setProductos(resp.filter(traerProductos=> gFecht.categoria===idCategoria)))
            .catch( err => console.log(err))
            .finally( ()=> setLoading(false))
        } else {
            traerProductos()
            .then(resp => setProductos(resp))
            .catch( err => console.log(err))
            .finally( ()=> setLoading(false))
        }

    })



    const listItem = gFecht.map((item)=>
        <div className="card" key={item.id}>
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
        </div>
    );
    return(
        <div className="main_content">
            {listItem}
        </div>
  )
}
