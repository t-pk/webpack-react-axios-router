const isNumber = (value) => {
  return !(value && /[^0-9]/i.test(value));
};

export default isNumber;
