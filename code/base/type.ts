export type objectStringType = {
  [key: string]: string;
};

export type objectNumberType = {
  [key: string]: number;
};

export type objectBooleanType = {
  [key: string]: boolean;
};

export type objectAnyType = {
  [key: string]: any;
};

export type stateType<T> = {
  [key: string]: T
}

export const defaultTypes: stateType<any> = {
  string: '',
  number: 0,
  boolean: false
}

export type paramsType = number | string | boolean