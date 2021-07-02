inicial_basis = ""
final_basis = ""
btn_converter =document.getElementById("btn-converter")



onload(startLoadPage())

function startLoadPage(){
    console.log("Carregamento do JavaScript da página iniciado")
   

}


function startConversion(){
    let input_number = document.getElementById("num-converter").value
    input_number=input_number.toUpperCase()
    
    let choices = [];
    let els = document.getElementsByName('radio-before');
    for (var i=0;i<els.length;i++){
        if ( els[i].checked ) {
            inicial_basis=els[i].value
        }
    }


    choices=[]
    els=document.getElementsByName("inlineRadioOptions")
    for(var i=0;i<els.length;i++){
        if ( els[i].checked ) {
            final_basis=els[i].value
        }
    }

    if(input_number==""){
        alert("Você não digitou nenhum número!")
    }
    else if(inicial_basis==""){
        alert("Você não especificou a base numérica de entrada!")
    }
    else if(final_basis==""){
        alert("Você não especificou a base numérica de saída!")
    }

    else{
        if(!checkInputNumbers(input_number,inicial_basis)){
            alert("Caracteres digitados não são compatíveis com a base numérica escolhida")
        }
        else{
            prepareConversion(input_number,inicial_basis,final_basis)
        }
    }

    

    
 
}



function prepareConversion(input_number,inicial_basis,final_basis){
    let binary =""
    let result =""
    
    switch(inicial_basis){
        case "decimal":
            binary=decimalToBinary(input_number)
            break
        case "hexadecimal":
            binary=hexadecimalToBinary(input_number)
            break
        case "octal":
            binary=octalToBinary(input_number)
            break
        default:
            binary=input_number
        
    }


    switch(final_basis){
        case "decimal":
            result = binaryToDecimal(binary)
            break
        case "hexadecimal":
            result = binaryToHexadecimal(binary)
            break
        case "octal":
            result = binaryToOctal(binary)
            break
        default:
            result = binary
            break
    }

    showResults(result)

}





//This function check if input number is compatible with numerical basis (use another functions to help)
function checkInputNumbers(input_number,numerical_basis){
    if(numerical_basis=="binary"){
        return checkBinary(input_number)
    }
    if(numerical_basis=="octal"){
        return checkOctal(input_number)
    }
    if(numerical_basis=="hexadecimal"){
        return checkHexadecimal(input_number)
    }
    else{
        return checkDecimal(input_number)
    }
}


//This functions check if number is compatible with specific numerical basis
function checkBinary(input_binary){
    binary = input_binary.split("")

    for(let i=0;i<binary.length;i++){
        if(binary[i]!="0" && binary[i]!="1"){
            return false
        }
    }

    return true
}
function checkOctal(input_octal){
    octal = input_octal.split("")


    for(let i=0;i<octal.length;i++){
        switch(octal[i]){
            case "0":
                break
            case "1":
                break
            case "2":
                break
            case "3":
                break
            case "4":
                break
            case "5":
                break
            case "6":
                break
            case "7":
                break
            default:
                return false
                
        }
    }

    return true
}
function checkHexadecimal(input_hexadecimal){
    hexadecimal=input_hexadecimal.split("")

    for(let i=0;i<hexadecimal.length;i++){
        switch(hexadecimal[i]){
            case "0":
                break
            case "1":
                break
            case "2":
                break
            case "3":
                break
            case "4":
                break
            case "5":
                break
            case "6":
                break
            case "7":
                break
            case "8":
                break
            case "9":
                break
            case "A":
                break
            case "B":
                break
            case "C":
                break
            case "D":
                break
            case "E":
                break
            case "F":
                break
            default:
                return false
                
        }
    }


    return true
}
function checkDecimal(input_decimal){
    decimal=input_decimal.split("")

    for(let i=0;i<decimal.length;i++){
        switch(decimal[i]){
            case "0":
                break
            case "1":
                break
            case "2":
                break
            case "3":
                break
            case "4":
                break
            case "5":
                break
            case "6":
                break
            case "7":
                break
            case "8":
                break
            case "9":
                break
            default:
                return false
        }
    }

    return true
}

