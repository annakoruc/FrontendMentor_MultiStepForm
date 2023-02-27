import * as yup from "yup";

export const UserDataSchema = yup.object().shape({
  //   name: yup.string().required(),
  //   email: yup.string().email("Pleas enter valid email").required(),
  //   phone: yup.number().min(6).max(9).positive().integer(),
});
