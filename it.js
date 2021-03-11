// Write function below
const subLength = (str,ch) =>{
    let f1= -1
    let f2= -1
    let f3= -1
    str.split('').forEach((val,i) =>{
        
      if(val===ch){
        if(f1===-1){
            //console.log(`${val} ${i}`)
          f1 = i
        }
        else if(f2=== -1 && f1!==- 1){
            //console.log(`${val} ${i}`)
          f2 = i
        }
        else if(f3==-1 && f2!==-1 && f1!==-1){
            //console.log(`${val} ${i}`)
            f3= 0
          return
        }
      }
    })
  
    if(f2==-1 || f3===0){
      return 0
    }
  
    return f2-f1+1
  }
  
  console.log(subLength('iiii','i'))