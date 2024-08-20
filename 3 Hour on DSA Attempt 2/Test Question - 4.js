var switches = function (arr) {
  let set=new Set();
  for(let i=0;i<arr.length;i++)
  {
   if(arr[i]=='')
   {
     continue;
   }
    if(set.has(arr[i]))
    {
      set.delete(arr[i]);
    }
    else if(arr[i]==="END")
    {
      set.clear();
    }
    else
    {
      set.add(arr[i]);
    }
  }
  return set.size;
}
let input=["1", "2", "1", "END", "2"];
let output=switches(input);
console.log(output);