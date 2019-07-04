x = []
const findIndex = (Array,Sen) => {
    if(Array.length ==1){
        for(j=0;j<Sen.length;j++){
            if( Array == Sen[j] ){  
               return console.log(j)

            }
         }
    } else    {
    for (i=0;i<Array.length;i++){
        const view = Array[i]
             for(j=0;j<Sen.length;j++){
                    if( view == Sen[j] ){  
                      console.log(j)
                        x.push(Array[i])
                      }
                }
        }
            for(t=0;t<x.length;t++){
                const rem = x[t]
                   for(s=0;s<Array.length;s++){
                      if(rem == Array[s])
                           Array.splice(s,1)
                      }           
                }
            }
   
            if(Array.length >1 ){
                Array.forEach(element => {
                    console.log(element + ' This symbol does not exist in the second argument')
                })
            } else {
                console.log(Array + ' This symbol does not exist in the second argument')
            }
 }

findIndex('x','sbBxcI')