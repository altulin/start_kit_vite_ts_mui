/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup";
import { ITextInput } from "../types";

export function createYupSchema(schema: any, config: any) {
  const { name, validation_type, validations = [] } = config;
  if (!(yup as any)[validation_type]) {
    return schema;
  }
  let validator = (yup as any)[validation_type]();
  validations.forEach((validation: any) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });
  schema[name] = validator;
  return schema;
}

export const validateSchema = (formData: ITextInput[]) => {
  const yepSchema = formData.reduce(createYupSchema, {});
  return yup.object().shape(yepSchema);
};
