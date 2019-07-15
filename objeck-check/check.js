
const objectQuantity = (sent) => {
    count = 0
        const x = sent.toLowerCase().split(' ')
           splitarray = []
           for(i=0;i<x.length;i++)
                splitarray.push(x[i])
        for(j=0;j<splitarray.length;j++)
            splitarray[j]=change(splitarray[j])
    console.log(splitarray)
            splitarray.sort()
    let set1 = new Set(splitarray)
     set1.forEach(Element =>{
            if( Element != ''){
                splitarray.forEach(element1 =>{
                    if(Element == element1)
                        count ++
                })            
            console.log(Element + ' = ' + count)
            count = 0
            }
        })
    }
 const change = (x) => {
    let y = []
    let z = ''
    for(i=0;i<x.length;i++)
        y.push(x[i])
    for(i=0;i<y.length;i++)
        if(y[i].charCodeAt() >= 32 && y[i].charCodeAt() <= 64 ||  y[i].charCodeAt() >=91 &&  y[i].charCodeAt() <=96 ||  y[i].charCodeAt() >=122 && y[i].charCodeAt() <=255 )
                    continue
        else z+= y[i]            
            
    return z
    
    }
const x = 'windows სდფას. '
objectQuantity (x)