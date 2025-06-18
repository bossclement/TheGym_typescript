/*
Auth: Bossclement
source: https://www.codewars.com/kata/5ac6932b2f317b96980000ca
*/

export const minValue = (values: number[]): number => {
    return Number([...new Set(values.sort())].reduce((r,c) => r + '' + c, ''));
};
