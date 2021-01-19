exports.formatDatetimeIST = (UTC) => {
  UTC = UTC.getTime(); // Get UTC Timestamp

  let IST = new Date(UTC); // Clone UTC Timestamp
  IST.setHours(IST.getHours() + 5); // set Hours to 5 hours later
  IST.setMinutes(IST.getMinutes() + 30); // set Minutes to be 30 minutes later.
  
  const datetime = IST.toISOString()
    .slice(0, 19)
    .replace(/-/g, "-")
    .replace("T", " ");

  return datetime;
};