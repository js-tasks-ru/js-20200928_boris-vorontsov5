/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const res = arr.slice().map(str => str.normalize()).sort((str1, str2) => {
    const compare = str1.localeCompare(str2, undefined, {caseFirst: 'upper'});

    if (compare >= 0) {
      return 1;
    }

    return -1;
  });
  return param === 'desc' ? res.reverse() : res;
}
