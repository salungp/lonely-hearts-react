import { useState, useEffect } from "react";

function CurrentDate() {
  const [dateString, setDateString] = useState("");

  function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }

  function formatDate() {
    const now = new Date();

    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayName = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    return `${dayName} ${date}${getOrdinal(date)} ${month} ${year}`;
  }

  useEffect(() => {
    // Initial set
    setDateString(formatDate());

    // Update every second
    const timer = setInterval(() => {
      setDateString(formatDate());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  return <h3 id="current-date">{dateString}</h3>;
}

export default CurrentDate;
