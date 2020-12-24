function factorial(n) {
  let result = n;

  while (n > 1) {
    n = n - 1;
    result = result * n;
  }

  return result;
}
