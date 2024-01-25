//repeat
function repeat(str,count){
    let str2 = ''
    for (let i = 0 ; i< count; i++){
        str2 += ' ' + str
    }
    return str2
}

//lastindexof
function  lastIndexOf(str, subStr) {
  for (let i = str.length; i >= 0; i--) {
    let includes = true
    for (let k = 0; k < subStr.length; k++) {
      if (str[i + k] !== subStr[k]) {
        includes = false
        break
      }
    }
    if (includes) {
      return i
    }
  }
  return false}

//slice
function slic(str,  start=0, end=str.length){
    let nStr = ''
    for (let i = start;i<end;i++){
        nStr += str[i]
    }
    return nStr
}
//subString
function subString(str,  start=0, end=str.length){
    let nStr = ''
    for (let i = start;i<end;i++){
        nStr += str[i]
    }
    return nStr
}

//replace
function replace(string, search, replaceValue) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let includes = true;
        for (let k = 0; k < search.length; k++) {
            if (string[i + k] !== search[k]) {
                includes = false
                break
            }
        }
         if (includes) {
                result += replaceValue
                i+= search.length - 1
            } else {
                result += string[i]
            }
    }
      return result;
}