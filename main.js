const personas=[
    {nombre:"juan", pass:"1234", saldo:300},
    {nombre:"pedro", pass:"5678", saldo:400},
    {nombre:"diego", pass:"5764", saldo:500}
]
localStorage.setItem("personas",JSON.stringify(personas));
const formLogin = document.getElementById('form-login')
const btnLogin = document.getElementById('btn-login')

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const password = document.getElementById('password').value
    if (!name && !password) {
        alert('se debe ingresar un usuario y contraseña')
    } else {
        for ( i=0; i<3; i ++){
            if (personas[0].nombre===name && personas[0].pass===password) {
                location="index2.html"                                                                                                                                                                                                                                                                         
            }
            if (personas[1].nombre===name && personas[1].pass===password) {
                location="index3.html"
            }
            if (personas[2].nombre===name && personas[2].pass===password) {
                location="index4.html"
            }
            
        }
    }
    
})


