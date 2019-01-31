function isEven(a){
    a = Math.abs(a);
    switch (a){
        case 0:
          return true;
          break;
        case 1:
          return false;
          break;
        default:
          return isEven(a-2);

    }
}


console.log(isEven(9))
console.log(isEven(90))
console.log(isEven(-1))