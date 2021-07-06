
//btn_converter =document.getElementById("btn-converter")


window.onload = startLoadPage;

function startLoadPage(){
    console.log("Carregamento do JavaScript da página iniciado")
}


function startConversion(){
    let input = document.getElementById("num-converter").value;
    let radio_from = [...document.getElementsByName("radio-before")].find((x)=>x.checked);
    let radio_to = [...document.getElementsByName("radio-after")].find((x)=>x.checked);

    if(input=="")
        alert("Você não digitou nenhum número!")
    else if(!radio_from)
        alert("Você não especificou a base numérica de entrada!")
    else if(!radio_to)
        alert("Você não especificou a base numérica de saída!")
    else{
        let converter = new Converter(input,radio_from.value);
        if(converter.valid())
            showResults(converter.convertTo(radio_to.value))
        else 
            alert("Caracteres digitados não são compatíveis com a base numérica escolhida")
    }
}