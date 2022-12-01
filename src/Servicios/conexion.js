export function getAllProductos(){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipad").then((res)=>res.json())
}

export function getIDProductos(id){
    return fetch(`https://api.mercadolibre.com/items/${id}`).then((res)=>res.json())
}