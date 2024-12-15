export const convertAMPMToISO = (time) => {
  const [hour, minute, second] = time.slice(0, 8).split(":").map(Number);
  const isPM = time.includes("PM");
  const finalHour = isPM && hour !== 12 ? hour + 12 : hour === 12 && !isPM ? 0 : hour;

  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    finalHour,
    minute,
    second || 0
  );
};

export const generateTimeIntervals = (
  start: string,
  totalMinutes: number,
  intervalMinutes: number
) => {
  let interval: string[] = [];
  let current = new Date(start);
  for (let i = 0; i < totalMinutes / intervalMinutes; i++) {
    interval.push(current.toTimeString().slice(0, 5));
    current.setMinutes(current.getMinutes() + intervalMinutes);
  }
  return interval;
};

export const convertTo12HourFormat = (date_array: string) => {
  const [hours, minutes] = date_array.split(":");
  let period = "AM";
  let hour = parseInt(hours, 10);
  if (hour >= 12) {
    period = "PM";
    if (hour > 12) {
      hour -= 12;
    }
  } else if (hour === 0) {
    hour = 12;
  }
  return `${hour}:${minutes} ${period}`;
};

export const hours = (start, end) => {
  console.log(start,end)
  const starting = convertAMPMToISO(start);
  const ending = convertAMPMToISO(end);
  const differenceInMilliseconds = ending - starting;
  const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60); 
  return differenceInHours;
};