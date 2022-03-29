export function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

export function identity<Type>(arg: Type): Type {
  return arg;
}
