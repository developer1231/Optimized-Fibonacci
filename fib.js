let array = []
function fib (n)
{
if(n == 0 || n == 1) return 2;
if(array[n] != undefined) return array[n];
let result =  fib (n-1) + fib(n-2)
array[n] = result
return array[n];
}
