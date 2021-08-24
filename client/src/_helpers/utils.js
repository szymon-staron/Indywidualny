export const chunkArrayWithSlice = (arr, amountInChunk,index =15) => {
  let chunk = 0;
  if (arr.length < index) {
    return 1;
  } else
    while (chunk < arr.length/amountInChunk) {
      chunk++;
    }
  return chunk;
};

export function canculateComplexity(password) {
  var complexity = 0;

  var regExps = [/[a-z]/, /[A-Z]/, /[0-9]/, /.{6}/, /[!-//:-@[-`{-}ÿ]/];

  regExps.forEach((regexp) => {
    if (regexp.test(password)) {
      complexity++;
    }
  });
  return {
    value: complexity,
    max: regExps.length,
  };
}
