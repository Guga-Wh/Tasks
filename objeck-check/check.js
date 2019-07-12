const objectQuantity = (sent) => {
    count = 0
    splitarray = sent.replace(',',' ').replace('.',' ').replace('?',' ').replace('!',' ').split(' ').sort()
        let set1 = new Set(splitarray)
     set1.forEach(Element =>{
            if(Element != splitarray[0] && Element != '.'){
                splitarray.forEach(element1 =>{
                    if(Element == element1)
                        count ++
                })            
            console.log(Element + ' = ' + count)
            count = 0
            }
        })
    }

const x = 'windows is bad, is not it?. Linux is good .'
objectQuantity (x)