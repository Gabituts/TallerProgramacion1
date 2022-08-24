

function mostrar_objeto(){

let cliente ={
    nombre: 'Pepito',
    apellido: 'Pozzo',
    dni: 44545321,
    correo: {
        outlook:'pepineitor@outlook.com',
        gmail:'pepito44@gmail.com',
        yahoo:'elpepo@yahoo.com'
    }
}

    //forma tradicional
    /*
    const outlook = cliente.correo.outlook
    const gmail = cliente.correo.gmail
    const yahoo = cliente.correo.yahoo
    */


    //forma "nueva"
    const {outlook, gmail, yahoo} = cliente.correo



    console.log(`
    Correos de pepito:
        outlook: ${outlook}
        gmail: ${gmail}
        yahoo: ${yahoo}
        `)
    
}

mostrar_objeto()


//creams funcion flecha 

const consumir_api = async() => {

    //mediante la fucnion nativa de javascript denominada fetch, una solicitud HTTP a traves del método GET de manera de obtener las publicaciones en notacion JSON
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts') 

    const post_definitivas = await posts.json()

    let itemsTotales = []

    post_definitivas.forEach(element => {
        
        // console.log(''+element.title)
        let item = `<li class="list-group-item">${element.title}</li>`
        itemsTotales.push(item)
    });

    document.getElementById("lista_publicaciones").innerHTML = itemsTotales.join("")

}
consumir_api() 