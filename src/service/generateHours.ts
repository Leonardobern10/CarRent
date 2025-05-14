export default function generateHours(): Array<string> {
  const hours: Array<string> = [];
  for (let i = 8; i < 21; i++) {
    if (i < 10) hours.push(`0${i}:00`);
    else hours.push(`${i}:00`);
  }
  return hours;
}
