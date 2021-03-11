_ = {
    clamp(num,low,up){
        return Math.min(Math.max(num,low),up)
    },
    inRange(num,start=0,end){
        if(!end){
            end=start
            start=0
        }
        if(start>end){
            let temp = start
            start = end
            end = temp
        }
        return num>=start && num<end
    },
    words(str){
        return str.split(' ')
    },
    pad(str,len){
        let numOfSpaces = len - str.length
        if(numOfSpaces<0){
            return str
        }
        let half = Math.floor(numOfSpaces/2)
        if(numOfSpaces%2===0){
            return ' '.repeat(half).concat(str).concat(' '.repeat(half))
        }
        else{
        //console.log(half)
        return ' '.repeat(half).concat(str).concat(' '.repeat(numOfSpaces-half))
        }
    },
    has(ob,key){
        if(ob[key]!==undefined){
            return true
        } 
        return false
    },
    invert(ob){
        for(let objs in ob){
            if(ob[objs] === objs){
                continue
            }
            else if(ob[objs]===undefined){
                ob['undefined'] = objs
                delete ob[objs]
            }
            else{
                ob[ob[objs]] = objs
                delete ob[objs]
            }
        }
        return ob
    },
    findKey(ob,func){
        for(let keys in ob){
            if(func(ob[keys])){
                return keys
            }
        }
        return undefined
    }
};


// Do not write or modify code below this line.
module.exports = _;
let ob = {
    key:'key',
    key2:'value',
    k2:'v2'
}
console.log(_.invert(ob))