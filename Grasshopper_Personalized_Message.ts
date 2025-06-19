/*
source: https://www.codewars.com/kata/5772da22b89313a4d50012f7/
*/

export function greet(name: string, owner: string): string{
    return "Hello " + (name === owner ? 'boss' : 'guest');
}
