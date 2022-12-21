export const errorToMap = (errors: string[] | string) => {
  let errorsMap: Record<string, string> = {};

  if (Array.isArray(errors)) {
    errors.forEach((error) => {
      const field = error.split(" ")[0];
      const message = error;

      errorsMap[field] = message;
    });
  } else {
    const field = errors.split(" ")[0];
    const message = errors;
    errorsMap[field] = message;
  }

  console.log(errorToMap);
  return errorsMap;
};
