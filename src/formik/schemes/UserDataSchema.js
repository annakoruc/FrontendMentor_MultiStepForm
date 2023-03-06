import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const UserDataSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email("Please enter valid email").required(),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(9, "too short")
    .max(9, "too long")
    .required(),
});
