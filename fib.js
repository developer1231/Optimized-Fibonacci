function fib(n, memoziation = {}) {
  if (n == 0) return 0; 
  if (n == 1) return 1;  
  if (memoziation[n] != undefined) return memoziation[n];
  let result = fib(n - 1, memoziation) + fib(n - 2, memoziation);
  memoziation[n] = result;
  return result;
}
