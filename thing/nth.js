
var num= [3,4,1,2,5,7,10]
function n_th(array,num2) {
    for(i=0;i<=array.length;i++)
            for(j=0;j<array.length;j++){
                    swapCheck(array,j);
        }
    var result= `${array} \n index[${num2}] = ${array[num2]}` ;
    return result;
}
function swapCheck(array,j) {
    let temp;
    if(array[j]<array[j+1])
    {
        temp= array[j];
        array[j]=array[j+1];
        array[j+1]=temp;
    }
}
console.log(num);
console.log(n_th(num,0));
