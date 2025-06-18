// source: https://www.codewars.com/kata/5467e4d82edf8bbf40000155

export function descendingOrder(n: number): number {
  return Number(n.toString().split('').sort((a, b) => b.localeCompare(a)).join(''));
}
