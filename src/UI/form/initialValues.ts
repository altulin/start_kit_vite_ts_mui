import { ITextInput } from "./types";

export const makeInitialValues = (fields: ITextInput[]) => {
  const object: Record<string, string> = {};

  fields.forEach((item) => {
    if (typeof item.value === "string" || typeof item.value === "number") {
      if (item.name !== undefined) {
        object[item.name] = item.value.toString();
      }
      // object[item.name] = item.value;
    } else if (item.name !== undefined) {
      object[item.name] = "";
    }
  });

  return object;
};
