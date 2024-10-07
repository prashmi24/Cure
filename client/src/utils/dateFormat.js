export const dateFormat = (date, config, locale = "en-US") => {
  const defaultOptions = { day: "numeric", month: "short", year: "numeric" };
  const options = config || defaultOptions;

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    return "Invalid Date";
  }

  return parsedDate.toLocaleDateString(locale, options);
};
