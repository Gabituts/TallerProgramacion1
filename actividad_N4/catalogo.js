
export default class Catalogo{

    constructor(){}

    async consumir_api_productos (){
        //mediante la fucnion nativa de javascript denominada fetch, una solicitud HTTP a traves del método GET de manera de obtener las publicaciones en notacion JSON
        const products = await fetch('https://fakestoreapi.com/products') 

        const datos_products = await products.json()

        let itemsTotales = []

        datos_products.forEach(element => {

            // mostrar precio titulo e imagen
            let col = `
            <div class="col m-1">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <img src="${element.image}" class="card-img-top" style="width: 100px; height: 150px;">
                        <h5 class="card-title">${element.title}</h5>
                        <h5 class="">$${element.price}</h5>
                    </div>
                </div>
            </div>
            `
            itemsTotales.push(col)
        });

        document.getElementById("grid").innerHTML = itemsTotales.join("")
    }
} 
