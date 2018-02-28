module.exports = function check(str, bracketsConfig) {
  // your solution

  unev = str.length % 2;
  if (unev != 0) return false; //если скобок нечетное число, соответствие невозможно

  var arr = [];

  for (i = 0; i < str.length; i++)
  {
    for (j = 0; j < bracketsConfig.length; j++)
    {
      if (str[i] == bracketsConfig[j][1] && arr[arr.length - 1] == bracketsConfig[j][0])
        arr.pop()

      else if (str[i] == bracketsConfig[j][0]) 
          arr.push(str[i])
    }
  }

  if (arr.length === 0)
    checkRes = true
  else checkRes = false
   
  return checkRes
}
