function arrayToList(arr){
    let list = {};
    let current_obj = list;
    for (let i=0; i<arr.length; i++){
        current_obj.value = arr[i]
        if (arr.slice(i+1,).length>0){
            current_obj.rest = {};
            current_obj = current_obj.rest;
        } else{
            current_obj.rest = null;
        }

    }

    return list;
  
}



function listToArray(list){
    let arr = [];
    while (true){
        if (list.rest===null){
            arr.push(list.value);
            break;
            
        } else {
            arr.push(list.value);
            list = list.rest;
        }
    }
    return arr;
}

let arr = [1,2,3,4,8]
p = arrayToList(arr)

console.log(p)
console.log(listToArray(p))