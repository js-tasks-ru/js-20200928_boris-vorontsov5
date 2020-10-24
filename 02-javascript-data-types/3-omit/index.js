/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */

const pick = (obj, ...fields) => {
  return fields.reduce((acc, field) => {
    acc[field] = obj[field];
    return acc;
  }, {});
};

export const omit = (obj, ...fields) => {
  const newFields = Object.keys(obj).filter(newField => !fields.includes(newField));
  return pick(obj, ...newFields);
};
