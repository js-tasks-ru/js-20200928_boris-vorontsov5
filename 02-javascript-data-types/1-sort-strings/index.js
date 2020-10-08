/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const compareFc = (str1, str2, direction = 1) => direction * str1.localeCompare(str2, ['ru', 'eng'], {caseFirst: 'upper'});

  return [...arr].sort((str1, str2) => {

    if (param === 'desc') {
      return compareFc(str1, str2, -1);
    }

    return compareFc(str1, str2);
  });
}
