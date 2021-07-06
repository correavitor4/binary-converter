class Converter{
    static hexa = "16";
    static decimal = "10";
    static octal = "8";
    static binary = "2";
    constructor(num,type){
        this.number = num;
        this.type = type;
    }
    valid(){
        return this.checkNumber(this.number,this.type);
    }
    convertTo(type){
        return parseInt(this.number,this.type)
               .toString(type)
               .toUpperCase();
    }
    checkNumber(num,type){
        switch(type){
            case Converter.hexa:
                return this.checkPattern(num,"-0123456789ABCDEF");
            case Converter.decimal:
                return this.checkPattern(num,"-0123456789");
            case Converter.octal:
                return this.checkPattern(num,"-01234567");
            case Converter.binary:
                return this.checkPattern(num,"-01");
        }
        return false;
    }
    checkPattern(num,pattern){
        return num.toString()
                  .split("")
                  .filter(
                      (x)=>pattern.indexOf(x)==-1
                  ).length == 0;
    }
}