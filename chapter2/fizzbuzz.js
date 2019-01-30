function fizzBuzz(){
    for (let num=1; num<=100; num++){
        if (num%3==0){
            console.log("Fizz");
        } else if (num % 5 == 0){
            console.log("Buzz");
        } else {
            console.log(num);
        }
    }
}

// fizzBuzz()


function fizzBuzz2(){
    for (let num=1; num<=100; num++){
        if (num%3 == 0){
            if (num%5 == 0){
                console.log("FizBuzz");
            } else {
                console.log("Fizz");
            }

        } else if (num%5==0){
            console.log("Buzz")
        } else{
            console.log(num)
        }
    }
}

// fizzBuzz2()