export function numberWithCommas(num: number) {
  return new Intl.NumberFormat().format(num);
}

// caution: gen example by chatgpt
