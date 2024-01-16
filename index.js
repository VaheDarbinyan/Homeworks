//ex1   Given an object. Invert it (keys become values and values become keys). If there is
     //more than key for that given value create an array.

function func(obj){
    let nObj = {}
     
for(let key in obj){
    if(nObj.hasOwnProperty(obj[key])){
        if(Array.isArray(nObj[obj[key]])){
            nObj[obj[key]].push(key)
        }else{
             nObj[obj[key]] = [nObj[obj[key]],key]
        }
    }else{
      nObj[obj[key]]= key
    }



    
}
    return nObj
}

//ex2 Given two objects. Write a function that performs shallow compare.

function func(obj1, obj2){
    for(let key in obj1){
        if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]){
            return false;
        }
    }
    for(let key in obj2){
        if(!obj1.hasOwnProperty(key) ||  obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}




//ex3  Check whether string is palindrome, or not.

function func(str){
   
     for(let i = 0; i<str.length;i++){
         
         if(str[0] !== str[str.length-1] ){
             
             return false
             
         }
         str = str.slice(1,str.length-1)
     }


return true

    
}


  //ex4   Given an array of integers. All numbers are unique. Find the count of missing numbers
    //between minimum and maximum elements to make integers sequence.

function func(arr){
    let minimum = arr[0]
    let maximum = arr[0]
    let count = 0
    for (let elem of arr){
        if(minimum>elem){
            minimum = elem
        }else if(maximum < elem){
            maximum = elem
        }
    }
    for (let i = minimum; i<maximum; i++){
        if(!arr.includes(i)){
           count++
        }
        
        
    }
    return count
}

//ex5 Given an array and element. Check if that element exists in array.
function func(arr,elem){
    for (let elem1 of arr){
        if (elem === elem1){
            return true
        }
    }
    return false
}