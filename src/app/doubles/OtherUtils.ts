export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export const calculateComplexity = (stringInfo: stringInfo) => {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
};

export const toUpperCaseWithCb = (arg: string, callback: Function) => {
  if (!arg) {
    callback("Invalid argument!");
    return;
  }

  callback(`called function with ${arg}`);

  return arg.toUpperCase();
};
