import React from "react";
import { startOfWeek, endOfWeek, isWithinInterval } from "date-fns";

function isDateInWeek(dateToCheck, weekStartDate) {
  const weekStart = startOfWeek(weekStartDate);
  const weekEnd = endOfWeek(weekStartDate);
  console.log(weekStart, "sdfgh", weekEnd);
  return isWithinInterval(dateToCheck, { start: weekStart, end: weekEnd });
}

// Example usage
const specificDate = new Date("2023-05-24");
const weekStartDate = new Date("2023-05-24");
// console.log(weekStartDate, "week");

console.log(isDateInWeek(specificDate, weekStartDate)); // Output: true

export default function CheckWeek() {
  return <div>CheckWeek</div>;
}
