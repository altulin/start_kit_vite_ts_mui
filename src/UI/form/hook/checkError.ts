/* eslint-disable @typescript-eslint/no-explicit-any */
const useCheckError = (fields: any) => {
  const isError = fields.touched && fields.error;
  const error_text = fields.error;

  return { isError, error_text };
};

export default useCheckError;
