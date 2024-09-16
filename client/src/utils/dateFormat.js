export const dateFormat = (date, config) => {
  const defaultOptions = { day: "numeric", month: "short", year: "numeric" };
  const options = config || defaultOptions;
  return new Date(date).toLocaleDateString("en-Us", options);
};
