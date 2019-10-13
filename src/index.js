module.exports = function zeros(expression) {
let arr = expression.split('*');
let elem = 0;
let count_2 = 0;
let count_5 = 0;
let minus;


for(elem; elem<arr.length; elem++){
    if(arr[elem].includes('!!')){
        minus = 2;
    }
    else if(arr[elem].includes('!') && !(arr[elem].includes('!!'))){
        minus = 1;
    }
    let num = parseInt(arr[elem]);

    while(num>0){
        if(!(num%2) && num >= 2){
            let a = num;
            while(!(a % 2))
            {
                a = a / 2;
                count_2 = count_2 + 1;
            }
        }

        if(!(num%5) && num >= 5){

            let b = num;
            while(!(b % 5))
            {
                b = b / 5;
                count_5 = count_5 + 1;
            }
        }
        num=num-minus;
    }
}

if(count_2<count_5){
    return count_2;
}else{
    return count_5;
}
}


