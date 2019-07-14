const x = '.'
let y = []
let z = ''
for(i=0;i<x.length;i++)
    y.push(x[i])
for(i=0;i<y.length;i++)
    if(y[i].charCodeAt() >= 97 && y[i].charCodeAt() <= 122 )
            z+= y[i]

        

console.log(z)