import { compareStrings } from './string';

export function sortObjectsByKey<T extends { [k: string]: any }>(
  arr: T[],
  key: keyof T,
  cb: (strA: string, strB: string) => number = compareStrings
): T[] {
  return arr.concat().sort((a, b) => cb(a[key], b[key]));
}

export function difference<T>(arrA: T[], arrB: T[]): T[] {
  return arrA.filter((x: T) => !arrB.includes(x));
}
