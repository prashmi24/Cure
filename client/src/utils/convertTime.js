const convertTime = (time) => {
  const timeParts = time.split(":");
  let hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  let meridian = "am";

  if (hours >= 12) {
    meridian = "pm";

    if (hours > 12) {
      hours -= 12;
    }
  }
  if (hours === 0) {
    hours = 12;
  }

  return (
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    meridian
  );
};
export default convertTime;
