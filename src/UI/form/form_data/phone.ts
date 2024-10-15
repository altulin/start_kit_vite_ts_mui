/* eslint-disable no-useless-escape */
import { onPhoneInput } from "../masks/phone";
import { ITextInput } from "../types";
import { required, valid } from "../validation/errText";

export const fieldPhone = (args: ITextInput) => {
  return {
    type: "tel",
    onInput: onPhoneInput,
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "matches",
        params: [/^(\+7|8) \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/gm, valid],
      },
    ],
    ...args,
  };
};
