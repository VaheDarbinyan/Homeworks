//find
function func(arr,callback){
    for (let i = 0; i<arr.length; i++){
        if(callback(arr[i],i,arr)){
            return arr[i]
        }
    }
    return undefined
}
//filter
function filter(arr,callBack){
    let nArr = []
    for (let i = 0;i<arr.length;i++){
        if(callBack(arr[i],i,arr)){
            nArr.push(arr[i])
        }
    }
    return nArr
}
//map
function map(arr,callBack){
    let nArr = []
    for (let i = 0;i<arr.length;i++){
       nArr.push(callBack(arr[i],i,arr))
    }
    return nArr
}


//every
function every(arr,callBack){
    
    for (let i = 0;i<arr.length;i++){
       if(!callBack(arr[i],i,arr)){
           return false
       }
    }
    return true
}
//findIndex
function findIndex(arr,callback){
    for (let i = 0; i<arr.length; i++){
        if(callback(arr[i],i,arr)){
            return i
        }
    }
    return -1
}
//forEach
function forEach(arr,callback){
    for (let i = 0;i<arr.length;i++){
        callback(arr[i],i,arr)
    }
}
//some
function some(arr,callBack){
    
    for (let i = 0;i<arr.length;i++){
       if(callBack(arr[i],i,arr)){
           return true
       }
    }
    return false
}
//reduce
function reduce(arr,callback,initalValue){
    let accum = initalValue
    
    if(  !initalValue ){
        accum =arr[0]
        for (let i =1;i<arr.length;i++){
              accum = callback(accum,arr[i],i,arr)
    }
        return accum
    }
    if(initalValue === 0){
       accum = initalValue
   }
    
    for (let i =0;i<arr.length;i++){
        accum = callback(accum,arr[i],i,arr)
    }
    return accum
}