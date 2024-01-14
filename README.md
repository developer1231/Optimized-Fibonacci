# Optimized-Fibonacci
# Fibonacci Sequence with Modified Initial Values

- Overview
This repository contains a JavaScript implementation of the Fibonacci sequence with a modified recurrence relation. The sequence starts with the values {2, 2, 4, 6, 10}, and each subsequent term is calculated as the sum of the two previous terms.

- Implementation
The core logic is implemented using a recursive function, fib(n), with memoization to optimize performance. Memoization ensures that previously computed values are stored and reused, preventing redundant calculations and reducing overall time complexity.

- Usage
To compute the nth term of the modified Fibonacci sequence, simply call the fib(n) function:

```js
const result = fib(4); // Returns 10
```
Important is that we do not calculate the amount of pairs we have like in the original sequence, but we calculate how much the result in individual elements we have (total count not total pairs).

- Contributions
Contributions and improvements are welcome. Feel free to fork the repository, create branches, and submit pull requests.

