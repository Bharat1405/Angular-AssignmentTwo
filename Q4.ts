var ChkArmstrong = ( num : number): boolean => {
    
    let digits : number[] = num.toString().split('').map(Number);
    let Sum : number = 0;

    for (let i :number = 0; i < digits.length; i++)
    {
        let power = digits[i]*digits[i];
        Sum = Sum + power;
    }

    console.log(Sum);
    
    if(num === Sum)
    { 
        return true;
    }
    else
    {
        return false;
    }
      
}

var Input : number = 153;
if(ChkArmstrong(Input))
{
    console.log("It is Armstrong");
}
else{
    console.log("It is Armstrong");
}


