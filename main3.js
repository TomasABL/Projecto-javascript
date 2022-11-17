const personas = JSON.parse(localStorage.getItem("personas"));
const saldoactual= document.getElementById('saldo_actual')
const botonsaldo = document.getElementById('botonsaldo')

//---------------------------------------------------------------

const deposito=document.getElementById('deposito')
deposito.addEventListener('click', (e) => {
    e.preventDefault()
    const valor =document.getElementById('valor').value
    personas.forEach((item) => {
        const ingreso= personas[1].saldo+parseInt(valor)
        if (!valor) {
            saldoactual.innerHTML = `<p>Se debe ingresar un valor</p>`
        } else{
            if (ingreso>990) {
                saldoactual.innerHTML = `<p>El saldo no debe ser mayor a $990</p>`
                document.getElementById('valor').value='';
                
            } else {
                item.saldo=ingreso
                saldoactual.innerHTML = `<p>Saldo actual: $${personas[1].saldo}</p>`
                document.getElementById('valor').value='';
            }
        }
        
    })
})

//-------------------------------------------------------------------------------------------------

const retiro=document.getElementById('retiro')
retiro.addEventListener('click', (e) => {
    e.preventDefault()
    const valor =document.getElementById('valor').value
    personas.forEach((item) => {
        const ingreso2= personas[1].saldo-parseInt(valor)
        if (!valor) {
            saldoactual.innerHTML = `<p>Se debe ingresar un valor</p>`
        } else {
            if (ingreso2<10) {
                saldoactual.innerHTML = `<p>Deben haber por lo menos $10 en la cuenta</p>`
                document.getElementById('valor').value='';
            } else {
                item.saldo=ingreso2
                saldoactual.innerHTML = `<p>Saldo actual: $${personas[1].saldo}</p>`
                document.getElementById('valor').value='';
            }
        }
        
    })
    
})

//---------------------------------------------------------------------------------------------------

const salir=document.getElementById('salir')
salir.addEventListener('click', (e) => {
    e.preventDefault()
    location="index.html"
})

//----------------------------------------------------------------------------------------------------

botonsaldo.addEventListener('click', (e) => {
 e.preventDefault()
 saldoactual.innerHTML = `<p>Saldo actual: $${personas[1].saldo}</p>`
})