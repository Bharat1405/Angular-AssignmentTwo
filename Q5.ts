/* 
5. Write a typescript program which contains one function named as 
ChkString. That function accept one string and check whether that string 
contains "Marvellous" word or not */


function ChekString (Str:string) : boolean
{    
    let ArrStr :string[] = Str.split(' ');
    let Chk : boolean = false;
    let Marvellous : string ="Marvellous";

    for (let i : number = 0; i < ArrStr.length; i++)
    {
       if(ArrStr[i] == Marvellous)
       {
        Chk = true;
       }
    }

   return Chk;     
}

var Input : string = "Pune Kothrude Marvellous Infosystems";
var Ret : boolean = false;

Ret = ChekString(Input);

if(Ret)
{
    console.log("String contains 'Marvellous' in it.");
}
else
{
    console.log("String does not contains 'Marvellous' in it.");
}

