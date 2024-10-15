/* eslint-disable no-useless-escape */

import MySelect from "../components/select/Select";
import { ITextInput } from "../types";
import { required } from "../validation/errText";

export const fieldSelect = (args: ITextInput) => {
  return {
    type: "select",
    validation_type: "string",
    component: MySelect,
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
    ...args,
  };
};
