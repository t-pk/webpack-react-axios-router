/**
 * let data = [{id: 1, name: 'Test'}, {id: 2, name: 'King'}]
 * data.sort(compareValues('name', 'desc'))
 * @param {*} key
 * @param {*} order
 */
const sortCompareValues = (key, order = 'asc') => {
  return (a, b) => {
    if (
      !Object.prototype.hasOwnProperty.call(a, key) ||
      !Object.prototype.hasOwnProperty.call(b, key)
    ) {
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
};

export default sortCompareValues;
