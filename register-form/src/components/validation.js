export const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) {
    errors.name = "Username required!";
  } else {
    delete errors.name;
  }
  if (!data.email) {
    errors.email = "Email required!";
  } else if (!/\S+@\S+\.\S+/.test(data.email)){
    errors.email = "Email Format Invalid!";
  } else{
      delete errors.email;
  }
  if (!data.password) {
      errors.password = "Password required!";
  } else if(data.password.length < 6) {
    errors.password = "Password most have atleast 6 characters";
      
  }else{
   delete errors.password;
}
    if (!data.confirmPassword) {
        errors.confirmPassword = "You need to Confirm Password!"
    } else if(data.confirmPassword !== data.password) {
        errors.confirmPassword ="Passwords do not match!";
    }else{
        delete errors.confirmPassword;
    }
    if (data.isChecked) {
        delete errors.isChecked
    } else {
        errors.isChecked = "You need to accept our policy"
    }



return errors;

};
