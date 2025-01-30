const compatNumberFormatter = new Intl.NumberFormat(undefined, {
  notation: 'compact',
});

export function formatCompatNumber(number: number) {
  return compatNumberFormatter.format(number);
}
