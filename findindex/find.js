check = 0
const findIndex = (Array,Sen) => {
    if(Array.length ==1){
        for(j=0;j<Sen.length;j++){
            if( Array == Sen[j] ){  
                console.log(j)
                check =1
            } 
         }
         if (check == 0)
            return console.log(Array + ' This symbol does not exist in the second argument ')
    } else {
        for (i=0;i<Array.length;i++){ 
            check = 0
            findIndex(Array[i],Sen)
           
        }
    }
   
 }

findIndex('G','scbBxcIc')