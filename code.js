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

