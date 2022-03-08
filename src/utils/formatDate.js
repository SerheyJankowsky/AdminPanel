export function formatDate(date) {
  let current = new Date(date).toString().substr(4, 11);
  let day = current.slice(3, 6);
  let month = current.slice(0, 3);
  let year = current.slice(9, 11);

  return day + "." + setMounth(month) + "." + year;
}

function setMounth(mounth) {
  switch (mounth) {
    case "Jan":
      return "01";
    case "Feb":
      return "02";
    case "Mar":
      return "03";
    case "Apr":
      return "04";
    case "May":
      return "05";
    case "Jun":
      return "06";
    case "Jul":
      return "07";
    case "Aug":
      return "08";
    case "Sep":
      return "09";
    case "Oct":
      return "10";
    case "Nov":
      return "11";
    case "Dec":
      return "12";
    default:
      return;
  }
}
