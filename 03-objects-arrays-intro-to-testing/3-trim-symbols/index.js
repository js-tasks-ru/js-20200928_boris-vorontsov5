/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */

export function trimSymbols(string, size) {
  switch (size) {

  case 0:
    return '';

  case undefined:
  case null:
    return string;

  default:
    return trimParser(string, size);

  }
}

const trimFilter = size => {
  let counter = 0;

  return (letter, letterIndex, parsedString) => {

    if (letter === parsedString[letterIndex + 1]) {
      ++counter;
    } else {
      counter = 0;
    }

    return counter < size;
  };
};

const trimParser = (string, size) => {
  const parsedString = string.split('');

  return parsedString.filter(trimFilter(size)).join('');
};

