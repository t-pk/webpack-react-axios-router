const isEmail = (email = '') => {
  if (!email) return false;
  const emailTrimed = email.toString().trim();
  return !(
    emailTrimed &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailTrimed)
  );
};

export default isEmail;
