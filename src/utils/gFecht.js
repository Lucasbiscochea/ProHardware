 const gFecht = [
    {
        id:1,
        categoria: "procesador",
        product_name: "Procesadores AMD Ryzen™ 9 5900X",
        description: "asfasdfadsfadsf",
        price: 350,
        currency: "$",
        thumb: "src/img/CajaRyzen9.png"
    },
    {
        id:2,
        category: "Video",
        product_name: "Placa De Video Geforce Rtx 2080",
        description: "asfasdfadsfadsf",
        price: 350,
        currency: "$",
        thumb: "src/img/PngItem_1806590.png"
    },
    {
        id:3,
        category: "ram",
        product_name: "Trident Z Rgb Ddr4-4700 Ram",
        description: "asfasdfadsfadsf",
        price: 350,
        currency: "$",
        thumb: "src/img/img3.png"
    }
]

export default gFecht;

export const traerProductos = () => new Promise ( (res, rej)=> {
    let condition = true
    if (condition) {
        setTimeout(()=>{
            res(traerProductos)
        }, 2000)
    } else{
        rej('todo mal')
    }
})

