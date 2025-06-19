/*
Source: https://www.codewars.com/kata/568d0dd208ee69389d000016
*/

export function rentalCarCost(d: number): number {
    return (d * 40) - (d >= 3 && d < 7 ? 20 : d >= 7 ? 50 : 0);
}