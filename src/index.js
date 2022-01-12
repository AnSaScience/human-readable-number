module.exports = function toReadable (number) {
    let zeroesCount=0;
    let new_num=number;
    let readableNumber="";
    let thousands = ['thousand','million','billion','trillion','quadrilion','quintilion','sextilion','septilion']
    while(new_num/10>=1)
    {
        zeroesCount+=1;
        new_num/=10;
    }
    while(zeroesCount>=0){
        switch (zeroesCount){
            case 0: readableNumber=`${readableNumber}${numberClass(number)}`;
            zeroesCount-=1;
            break;
            case 1: readableNumber=`${readableNumber}${numberClass(number)}`;
            zeroesCount-=2;
            break;
            case 2: readableNumber=`${readableNumber}${numberClass(number)}`;
            zeroesCount-=3;
            break;
            //В розробці аби програма читала числа  999 
            // case 3: readableNumber=`${readableNumber} thousand ${numberClass(number.toString.slice(-3))} `;
            // number=Math.floor(number/1000);
            // zeroesCount-=3;
            // break;

        }
             
    }
    return readableNumber;
}

const numberClass =(num) =>{
    let a =['zero', 'one', 'two', 'three', 'four' , 'five' , 'six' , 'seven', 'eight', 'nine'];
    let b=['ten', 'eleven', 'twelve' ,'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decade=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let zeroes=0;
    let var_num=num; 
    let result="";
       while(var_num/10>=1)
       {
           zeroes+=1;
           var_num/=10;
       }
       switch(zeroes){
       case 0: result= `${result}${a[Number(num)] }`;
       break;
   
       case 1: if(num<20){
           result = `${result}${b[num%10] }`;
                 }
       else{ 
           if(num%10!==0)
           {
               result= `${result}${decade[Math.floor(num/10)-2]} ${a[num%10] }`
           }
           else{
            result = `${result}${decade[Math.floor(num/10)-2]}`
                       }
                  }
       break;
       case 2: if(num%100!==0)
       {
        result = `${result}${a[Math.floor(num/100)]} hundred ${numberClass(num%(Math.floor(num/100)*100))}`;
       }
       else{
        result = `${result}${a[Math.floor(num/100)]} hundred`
       }
       break;
       }
       return result;
   }