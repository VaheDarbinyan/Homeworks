//ex1  Given an array. Determine whether it consists only from uniques or not

function func(arr){
  for (let elem of arr){
      let count = 0
      for (let elem1  of arr){
          if(elem === elem1){
              count++
              if(count ===2){
                  return false
              }
          }
      }
  }
  return true
}

//ex2  Given an array of numbers. Find the sum of prime numbers.

function func(arr){
  let sum = 0
  for (let elem of arr){
      if(elem % 2 !==0  && elem % 3 !==0 && elem % 5 !== 0 && elem % 7 !==0 && elem !==1 ){
         sum += elem
          
      }
      if(elem === 2 || elem === 3 || elem === 5 || elem === 7){
               sum += elem
          }
  }
  return sum
}

//ex3  Given an array of integers, find the pair of adjacent elements that has the largest product and return that product

function func(arr){
  let maximum = arr[0]*arr[1]
  for (let i = 1; i<arr.length;i++){
      if(maximum<arr[i]*arr[i+1]){
          maximum = arr[i]*arr[i+1]
      }
  }
  return maximum
}

//ex4  Given a sorted array and an element from that array. Find the index of that element using binary search. (You should research binary search)

function func(arr,x){
  let start = 0
  let end = arr.length-1
  while(start<= end){
      let middle = Math.floor((start + end)/2)
      if(arr[middle] === x){
          return middle
      }else if(arr[middle ]<x){
          start = middle +1
      }else{
          end = middle - 1
      }
  }
  return -1
}