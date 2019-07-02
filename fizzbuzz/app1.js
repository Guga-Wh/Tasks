let ch = 0
for(j=1;j<=100;j++){
    
  if (j%3 == 0){
        console.log('fizz ')
        ch=1
    } 
  if (j%5 ==0) {
        console.log('buzz ')
        ch=1
    }
    if(ch == 0){
        console.log(j)
    }
    ch = 0
    
}


