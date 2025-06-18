/*
Author: Bossclement
source: https://www.codewars.com/kata/57ed30dde7728215300005fa
*/

export function bump(x: string): string{
  const bumps = x.split('').filter(char => char === 'n').length;
  return bumps <= 15 ? 'Woohoo!' : 'Car Dead';
}
