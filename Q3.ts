function Maximum(Arr:number[]): number {
    let Max :number = 0;
    let SecondLargest :number = 0;

    for(let i = 0; i < Arr.length; i++)
    {
        if (Arr[i] > Max)
        {
            SecondLargest = Max;
            Max = Arr[i];
        }
        else if(Arr[i] > SecondLargest && Arr[i] != Max)
        {
            SecondLargest = Arr[i];
        }
    }

    return SecondLargest;
}

var Input : number[] = [23,89,6,29,56,45,77,32];
var Ret : number = 0;
Ret = Maximum(Input);

console.log("Second largest number is :"+Ret);





