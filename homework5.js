//ex1 Given a number. Write a recursive function that reverse the number. Return the new
//number.
function func(num,index=0){
    
  let str = String(num)
    
    if(index===str.length-1){
        return  Number(str[index])
    }
  
    return Number( func(str,index+=1) + str[index-1] )
}
//ex2 Given a number and an array. Find the second occurrence of the number in the array.
//Consider that the occurrence of each element in the array is at least two.
//function func(num,arr,count=0,i=0){

if(arr[i]===num){
    count++
}
    if(count===2){
        return i
    }

   return  func(num,arr,count,i+=1)
}
//ex5 Given an array of nested arrays. Write a recursive function that flattens it. (Hint create


function func(arr,i=0,nArr=[]){

    
    if(i === arr.length){
        return nArr
    }
    if(Array.isArray(arr[i])){
        (func(arr[i],0,nArr))
       i++
        
    }else{
        nArr.push(arr[i])
          i++
        
        }
    
 return func(arr,i,nArr)
    
}


//ex4 Given a string, compute recursively (no loops) a new string where all appearances of pi;
//have been replaced by 3.14;.

function  func(str,i=0,nStr=''){
    if(i===str.length){
        return nStr
    }
    if(str[i]==='p' && str[i+1]==='i' || str[i+1]==='I' || str[i]==='P' && str[i+1]==='I' || str[i+1]==='i' ){
       nStr+=3.14
        i+=2
    }else{nStr+=str[i]
      i++   }
   
    return func(str,i,nStr)
}


//ex6 Given a number. Write a function that calculates its sum of the digits and if that sum has
//more than 1 digit find the sum of digits of that number. Repeat that process if needed
//and return the result.

function func(num,sum=0,lastdigit=0){
    if(num===0){
        return sum
    }
    lastdigit = num%10
    num = (num-lastdigit)/10
    sum=lastdigit+sum
    if(sum>9){
        return func(sum,0,0)
    }
    return func(num,sum,lastdigit)
    
    
}