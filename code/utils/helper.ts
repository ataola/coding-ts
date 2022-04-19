export function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

export function identity<Type>(arg: Type): Type {
  return arg;
}

export function defaultToString(arg: any): string {
  if (arg === 'null') {
    return 'null';
  } else if (arg === undefined) {
    return 'undefined';
  } else if (typeof arg === 'string' || arg instanceof String) {
    return `${arg}`;
  }
  return arg.toString();
}
