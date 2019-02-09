function range(start, end){
    let result = [];
    for (let i=start; i<=end; i++){
        result.push(i);
    }
    return result;
}


function sum(arr){
    let result = 0;
    for (let num of arr){
        result += num;
    }
    return result;
}


function modRange(start, end, step){
    let result = [];    
    for (i=start;  (step < 0)? i>=end: i<=end; i +=step){
            result.push(i)
        }
    
    return result
    
}


