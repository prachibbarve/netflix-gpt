export const DataValidate = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

  if (isEmailValid == false) return "Invalid email address";
  if (isPassValid == false) return "Invalid Password";
  //if (fullname == "") return "Please enter your name";

  return null;
};
