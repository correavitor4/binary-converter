//Os parâmetros dessa função devem ser fornecidos em formato de string com algarismos variando de 0 a 9
//Ela retorna uma string
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
//Ela retorna uma string
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
//Ela retorna uma string
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

//Os parâmetros dessa função devem ser fornecidos em formato de string, contendo apenas 0 e 1 como algarismos
//Ela retorna uma string
function binaryToDecimal(binary_number_received){
    let binary = binary_number_received.split("")
    let inverted_binary=binary.reverse()
    let decimal =0
    let decimal_string

    for(let i=0;i<inverted_binary.length;i++){
        decimal += parseInt(inverted_binary[i])*Math.pow(2,i)      
    }

    decimal_string=decimal.toString()

    return decimal_string

    


}

//Os parâmetros dessa função devem ser fornecidos em formato de string, contendo apenas 0 e 1 como algarismos
//Ela retorna uma string
function binaryToOctal(binary_number_received){
    let binary = binary_number_received.split("")
    let binary_ready_for_conversion = []
    let octal=[]
    let octal_string=""

    while(binary.length<3){
        binary.unshift("0")
    }

    while(binary.length%3 !=0){
        binary.unshift("0")
    }

    

    for(let i=0;i< binary.length;i+=3){
        binary_ready_for_conversion.push(binary[i]+binary[i+1]+binary[i+2])
    }


    for(i=0;i<binary_ready_for_conversion.length;i++){
        switch(binary_ready_for_conversion[i]){
            case "000":
                octal.push("0")
                break
            case "001":
                octal.push("1")
                break
            case "010":
                octal.push("2")
                break
            case "011":
                octal.push("3")
                break
            case "100":
                octal.push("4")
                break
            case "101":
                octal.push("5")
                break
            case "110":
                octal.push("6")
                break
            case "111":
                octal.push("7")
                break
            
            }
    }

    while (octal[0]=="0") {
        octal.shift()
    }

    octal_string=octal.join("")
    
    return octal_string

}

//Os parâmetros dessa função devem ser fornecidos em formato de string, contendo apenas 0 e 1 como algarismos
//Ela retorna uma string
function binaryToHexadecimal(binary_number_received){
    let binary = binary_number_received.split("")
    let binary_ready_for_conversion = []
    let hexadecimal = []
    let hexadecimal_string =""

    while ((binary.length<4)) {
        binary.unshift("0")
    }
    while(binary.length%4 !=0){
        binary.unshift("0")
    }


    for(let  i=0;i<binary.length;i+=4){
        binary_ready_for_conversion.push(binary[i]+binary[i+1]+binary[i+2]+binary[i+3])
    }

    for(i=0;i<binary_ready_for_conversion.length;i++){
        switch(binary_ready_for_conversion[i]){
            case "0000":
                hexadecimal.push("0")
                break
            case "0001":
                hexadecimal.push("1")
                break
            case "0010":
                hexadecimal.push("2")
                break
            case "0011":
                hexadecimal.push("3")
                break
            case "0100":
                hexadecimal.push("4")
                break
            case "0101":
                hexadecimal.push("5")
                break
            case "0110":
                hexadecimal.push("6")
                break
            case "0111":
                hexadecimal.push("7")
                break
            case "1000":
                hexadecimal.push("8")
                break
            case "1001":
                hexadecimal.push("9")
                break
            case "1010":
                hexadecimal.push("A")
                break
            case "1011":
                hexadecimal.push("B")
                break
            case "1100":
                hexadecimal.push("C")
                break
            case "1101":
                hexadecimal.push("D")
                break
            case "1110":
                hexadecimal.push("E")
                break
            case "1111":
                hexadecimal.push("F")
                break
            
            }
         }

         while (hexadecimal[0]=="0") {
             hexadecimal.shift()
         }

         hexadecimal_string=hexadecimal.join("")

         return hexadecimal_string
    
}



