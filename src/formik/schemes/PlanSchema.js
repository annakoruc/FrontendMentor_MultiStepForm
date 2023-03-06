import * as yup from "yup";

export const PlanSchema = yup.object().shape({ plan: yup.string().required() });
