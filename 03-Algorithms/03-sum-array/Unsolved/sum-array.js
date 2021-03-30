// Write code to add all the numbers in `arr` and return the total

// var sumArray = function(arr) {};


const sumArray = (arrOfNum)=>{
    let sum = 0;
    for (i=0; i<arrOfNum.length;i++){
        sum = sum + arrOfNum[i];
        
    }
    console.log(sum);
}

 

sumArray([10,5,4,3]);  