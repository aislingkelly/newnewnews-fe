export function formatDateString(dateString) {
  let date = new Date(dateString);
  return new Intl.DateTimeFormat('default', {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    year: 'numeric',
    month: 'short',
  }).format(date);
}
