
const test = (user) =>{
    var type
    var count = 0
       type = typeof (user)
            if(type == 'object'){
            console.log(type)
        for(x in user){
            count++       
         }
         if(count == 0){
             console.log('There is empty value')
         } else {
             console.log(count)
         }
        } else {
            console.log('There is no object value')
        }
    
}



s = 5
b = 1
let user1 = {}
let user = {test(user1)} 
 test(user)

