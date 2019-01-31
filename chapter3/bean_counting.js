function countBs (text){
    let count = countChar(text, 'B');
    console.log (`we found ${count} Bs`);
}


function countChar(text, char){
    let count = 0;
    for (let i of text){
        if (i == char){
            count++;
        }
    }

    return count;

}





let t = 'Tomorrow is the Birthday of Mr. Birthday. Berry Happy'

countBs(t)