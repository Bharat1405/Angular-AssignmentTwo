function Maximum(Arr:number[]): number {
    let Max :number = 0;

    for(let i = 0; i<Arr.length; i++)
    {
        if (Arr[i]> Max)
        {
            Max = Arr[i];
        }
    }

    return Max;
}

var Input : number[] = [23,89,6,29,56,45,77,32];
var Ret : number = 0;
Ret = Maximum(Input);

console.log("Maximum number is :"+Ret);

