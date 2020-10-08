/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

export function createGetter(path) {
  return (object) => {
    if (!object) {
      return object;
    }

    const parsedPath = path.split('.');

    switch (parsedPath.length) {

    case 0:
      return object;

    case 1:
      return object[parsedPath[0]];

    default:
      return createGetter(parsedPath.slice(1).join('.'))(object[parsedPath[0]]);
    }
  };
}

