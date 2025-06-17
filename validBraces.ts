/*
Auth: Bossclement
Source: https://www.codewars.com/kata/5277c8a221e209d3f6000b56
*/

export function validBraces(braces: string): boolean {
  const res: {[key:string]: number} = {};
  const dict: {[key:string]: string} = {};
  let opened_queue:string[] = [];

  dict[dict['{'] = '}'] = '{';
  dict[dict['['] = ']'] = '[';
  dict[dict['('] = ')'] = '(';
  
  const add: [...string[]] = ['{', '(', '['];
  
  for (const char of [...braces]) {
    if (add.includes(char)) {
      opened_queue.push(char);
      if (!(char in res)) res[char] = 0;
      res[char] += 1;
    } else {
      if (opened_queue.pop() !== dict[char]) return false;
      res[dict[char]] -= 1;
    }
  }
  return Object.values(res).every(v => v === 0);
}

