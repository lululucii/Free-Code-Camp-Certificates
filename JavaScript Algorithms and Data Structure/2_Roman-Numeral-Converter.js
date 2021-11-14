function convertToRoman(num)
{
    let a="";
    let romanUnit=["I","V","X","L","C","D","M"];
    function sym2Format(sym,num){
      switch(num){
      case 1:return sym
      case 2:return sym+sym
      case 3:return sym+sym+sym
      case 4:return sym+romanUnit[1+romanUnit.indexOf(sym)]
      case 5:return romanUnit[1+romanUnit.indexOf(sym)]
      case 6:return romanUnit[1+romanUnit.indexOf(sym)]+sym
      case 7:return romanUnit[1+romanUnit.indexOf(sym)]+sym+sym
      case 8:return romanUnit[1+romanUnit.indexOf(sym)]+sym+sym+sym
      case 9:return sym+romanUnit[2+romanUnit.indexOf(sym)]
      default:return ""
    }}
     if (num/1000>=1){a=a+sym2Format("M",(Math.floor(num/1000)))}
     if (num/100>=1){a=a+sym2Format("C",(Math.floor(num/100%10)))}
     if (num/10>=1){a=a+sym2Format("X",(Math.floor(num/10%10)))}
     if (num/1>=1){a=a+sym2Format("I",(Math.floor(num%10)))}
    console.log("Result", a)
    return a;
}

console.log("Math.floor(num/100)", Math.floor(1.52))
convertToRoman(36);
