const x = [ ]
var i 
for( i=1;i<= 100;i++){
    x[i]=i;
}
for(j=0;j<x.length;j++){
    if(x[j] === 1){
        console.log('Equals to 1')
    } else {
        if (x[j]%3 == 0){
        console.log('fizz')
    } if (x[j]%5 ==0) {
        console.log('buzz')
    }
      if(x[j]%5 ==0 || x[j]%3 == 0){
          console.log('fizz buzz')
      } 
    }
}


