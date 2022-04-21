import { defaultToString } from './helper';

export function loseloseHashCode(key: any): number {
  if (typeof key === 'number') {
    return key;
  }

  let hash = 0;
  const tableKey = defaultToString(key);
  for (let i = 0; i < tableKey.length; i++) {
    hash += tableKey.charCodeAt(i);
  }

  return hash % 37;
}

export function djb2HashCode(key: any): number {
  const tableKey = defaultToString(key);
  let hash = 5381;
  for (let i = 0; i < tableKey.length; i++) {
    hash = hash * 33 + tableKey.charCodeAt(i);
  }

  return hash % 1013;
}
