

export default class Criptomoneda{

    constructor(){}

    async consumir_api_cripto (){
        //mediante la fucnion nativa de javascript denominada fetch, una solicitud HTTP a traves del método GET de manera de obtener las publicaciones en notacion JSON
        const crypto = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false') 

        const datos_crypto = await crypto.json()

        let itemsTotales = []

        datos_crypto.forEach(element => {
            
            let fila = `
            <tr class="table">
                <td>${element.market_cap_rank}</td>
                <td><img src="${element.image}" width="100" height="100"></td>
                <td>${element.name}</td>
                <td>${element.symbol}</td>
                <td>${element.current_price}</td>
                <td>${element.total_volume}</td>

            </tr>
            `
            itemsTotales.push(fila)
        });

        document.getElementById("tcuerpo").innerHTML = itemsTotales.join("")
    }
} 