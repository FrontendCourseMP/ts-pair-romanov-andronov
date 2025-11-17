const pairs: { [key: string]: string } = {
  "(": ")",
  "[": "]",
  "{": "}",
};

export function isValidBrackets(input: string): boolean {
  const stack: string[] = [];

  for (const element of input) {
    if (stack.length > 0) {
      const lastElement = stack[stack.length - 1];
      if (lastElement !== undefined && pairs[lastElement] === element) {
        stack.pop();
        continue;
      }
    }

    if (element in pairs) {
      stack.push(element);
    } else {
      return false;
    }
  }

  return stack.length === 0;
}
