function Summation(Arr:number[]): number {
    let Sum : number = 0;

    for(let i = 0; i < Arr.length; i++)
    {
        Sum = Sum + Arr[i];
    }

    return Sum;
}

var Arr : number[] = [23,6,7,4,5,7];
var Ret : number= 0;
Ret = Summation(Arr);

console.log("Addition is :"+Ret);

