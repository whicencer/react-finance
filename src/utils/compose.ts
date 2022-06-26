/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line no-unused-vars
type TComposeFuncs = (arg: any) => any;

const compose =
  (...funcs: Array<TComposeFuncs>) =>
  (arg: any) =>
    funcs.reverse().reduce((acc: any, func: any) => func(acc), arg);

export default compose;
