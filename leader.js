let array = [2,3,4,2,1,4,5,6,7,1,10];
let a=[];
const output = array =>{
    for(let i=0;i<array.length-1;i++)
    {
        if(array[i]>array[i+1])
        a.push(array[i]);
    }
}

console.log(output(array));
console.log(a);