export const fetchWeatherData = async ({
  latitude,
  longitude,
  startDate,
  endDate,
}) => {
  // Convert Date objects to YYYY-MM-DD format
  const formatDate = (date) => {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const start = formatDate(startDate);
  const end = formatDate(endDate);

  // Construct the API URL with the formatted parameters
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&start_date=${start}&end_date=${end}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean&timezone=auto`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data.");
  }
  const data = await response.json();

  const dates = data.daily.time;
  const maxTemps = data.daily.temperature_2m_max;
  const minTemps = data.daily.temperature_2m_min;
  const meanTemps = data.daily.temperature_2m_mean;

  return { dates, maxTemps, minTemps, meanTemps };
};
