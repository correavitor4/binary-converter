//Os parâmetros dessa função devem ser fornecidos em formato de string com algarismos variando de 0 a 9
function decimalToBinary( decimal_number_received){
    let decimal_number=parseInt(decimal_number_received)
    let binary=[]
    let binary_string

    while (decimal_number>0) {

        if(decimal_number==1){
            binary.unshift(1)
            decimal_number=0
        }
        else{
            if(decimal_number%2==1){
                decimal_number=(decimal_number-1)/2
                binary.unshift("1")
                
            }
            else{
                decimal_number=decimal_number/2
                binary.unshift("0")
            }
        }

        
    }

    
    binary_string = binary.join("")

    return binary_string


}

//Os parâmetros dessa função devem ser fornecidos em formato de string, com algarismos variando de 0 a 7
function octalToBinary(octal_number_received){
    let octal = octal_number_received.split("")
    let binary=[]
    let binary_string=""

    for(var i=0;i<octal.length;i++){
        switch(octal[i]){
            case "0":
                binary.push("0")
                binary.push("0")
                binary.push("0")
                break
            case "1":
                binary.push("0")
                binary.push("0")
                binary.push("1")
                break
            case "2":
                binary.push("0")
                binary.push("1")
                binary.push("0")
                break
            case "3":
                binary.push("0")
                binary.push("1")
                binary.push("1")
                break
            case "4":
                binary.push("1")
                binary.push("0")
                binary.push("0")
                break
            case "5":
                binary.push("1")
                binary.push("0")
                binary.push("1")
                break
            case "6":
                binary.push("1")
                binary.push("1")
                binary.push("0")
                break
            case "7":
                binary.push("1")
                binary.push("1")
                binary.push("1")
                break
        }
    }

    
    
    while (binary[0]=="0") {
        binary.shift()
    }

    
    binary_string=binary.join("")


    return binary_string
}

//Os parâmetros dessa função devem ser fornecidos em formato de string, e com "letras" maiúsculas e algarismos numéricos variando entre 0 e 9
function hexadecimalToBinary(hexadecimal_number_received){
    let hexadecimal = hexadecimal_number_received.split("")
    let binary = []
    let binary_string

    for(let i=0;i<hexadecimal.length;i++){

        switch(hexadecimal[i]){
            case "0":
                binary.push("0")
                binary.push("0")
                binary.push("0")
                binary.push("0")
                break
            case "1":
                binary.push("0")
                binary.push("0")
                binary.push("0")
                binary.push("1")
                break
            case "2":
                binary.push("0")
                binary.push("0")
                binary.push("1")
                binary.push("0")
                break
            case "3":
                binary.push("0")
                binary.push("0")
                binary.push("1")
                binary.push("1")
                break
            case "4":
                binary.push("0")
                binary.push("1")
                binary.push("0")
                binary.push("0")
                break
            case "5":
                binary.push("0")
                binary.push("1")
                binary.push("0")
                binary.push("1")
                break
            case "6":
                binary.push("0")
                binary.push("1")
                binary.push("1")
                binary.push("0")
                break
            case "7":
                binary.push("0")
                binary.push("1")
                binary.push("1")
                binary.push("1")
                break
            case "8":
                binary.push("1")
                binary.push("0")
                binary.push("0")
                binary.push("0")
                break
            case "9":
                binary.push("1")
                binary.push("0")
                binary.push("0")
                binary.push("1")
                break
            case "A":
                binary.push("1")
                binary.push("0")
                binary.push("1")
                binary.push("0")
                break
            case "B":
                binary.push("1")
                binary.push("0")
                binary.push("1")
                binary.push("1")
                break
            case "C":
                binary.push("1")
                binary.push("1")
                binary.push("0")
                binary.push("0")
                break
            case "D":
                binary.push("1")
                binary.push("1")
                binary.push("0")
                binary.push("1")
                break
            case "E":
                binary.push("1")
                binary.push("1")
                binary.push("1")
                binary.push("0")
                break
            case "F":
                binary.push("1")
                binary.push("1")
                binary.push("1")
                binary.push("1")
                break
        }
    }

    while(binary[0]=="0"){
        binary.shift()
    }

    binary_string= binary.join("")
    return binary_string
}




