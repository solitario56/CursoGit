let elemento = document.getElementById("formulario");

let texto = elemento["nombre"];

texto.addEventListener("change",(objeto)=>{
    document.getElementById("texto").innerHTML = "Hola";
})

