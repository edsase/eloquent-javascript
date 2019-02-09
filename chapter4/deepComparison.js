function deepEqual(value1, value2){
    // test if the two values are objects
    if (typeof(value1) == 'object' && typeof(value2)=='object'){
        // flatten object
        vals1 = flatten(value1)
        vals2 = flatten(value2)

        //check values length
        if (vals1.length == vals2.length){
            return true;
        } else return false;

        // check values deeply
        for (let v of vals1){
            if (vals2.includes(v)){
                return true;
            } else return false;
        }


    } else {if (value1===value2) {
        return true;} else{
            return false;
        }

    } 

}

function flatten(obj){
    arr = []
    for (let k of Object.keys(obj)){
        if (typeof(obj[k])=='object'){
            flatten(obj[k]);

        } else {
            arr.push(obj[k]);
                            
            } 
        }
    return arr;
    }
    


obj = {
    a: {b: 2,
        d: 22
    },
    c: 999
}

o2 = 1

console.log(deepEqual(obj, obj))