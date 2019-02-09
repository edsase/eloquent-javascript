function reverseArray(arr){
    result = []

    for (let item of arr){
        result.unshift(item);
    };

    return result;
}



function reverseArrayInplace(arr){
    let arr_copy = arr.slice();
    for (let i=0; i<arr.length; i++){
        arr[i] = arr_copy.pop();
    }
    
    return arr
}



let arr = [1,2,3,4,5]

console.log(arr)
console.log(reverseArrayInplace(arr))
console.log(arr)