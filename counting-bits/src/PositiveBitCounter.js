function Count(input) {
  if (input < 0) throw new RangeError();
  else if (input === 0) return [0];

  const result = [];
  const binary = input.toString(2).split("");
  const size = binary.length;

  for (let i = size - 1; i >= 0; i--) {
    if (binary[i] > 0) result.push(Math.abs(i - size + 1));
  }

  result.unshift(result.length);

  return result;
}

module.exports = { Count };
