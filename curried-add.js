function curriedAdd(total) {
  if (total === undefined) return 0;

  return function add(number) {
    if (number === undefined) return total;

    total += number;

    return add;
  };
}

module.exports = { curriedAdd };
