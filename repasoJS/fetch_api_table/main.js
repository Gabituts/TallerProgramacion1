const obtener_usuarios = async()=> {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')

    const users_definitivos = await users.json()
    let filas = []

    users_definitivos.forEach((element, index) => {
            let fila = `
            <tr class="table">
                <td>${index+1}</td>
                <td>${element.name}</td>
                <td>${element.username}</td>
                <td>${element.email}</td>
                <td>${element.website}</td>
            </tr>
            `
            filas.push(fila)
    });
    document.getElementById("tcuerpo").innerHTML = filas.join("")
}

obtener_usuarios()