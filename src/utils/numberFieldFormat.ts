export const numberFieldFormat = (str: string) => {
  return str.replace(/[a-z]|^\.|[^\w.]|\.{2}([0-9]{4})?/gm, '').replace(/\.[0-9]+(\.$)/gm, '.0');
};