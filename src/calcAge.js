export function calculateAge(birthDate) {
  const today = new Date();

  let years = today.getFullYear() - birthDate.year;
  let months = today.getMonth() - birthDate.month + 1;
  let days = today.getDate() - birthDate.day;

  if (months < 0 || (months === 0 && today.getDate() < birthDate.day)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    var prevMonthLastDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days = prevMonthLastDay - birthDate.day + today.getDate();
    months--;
  }

  return {
    years: years,
    months: months,
    days: days,
  };
}
