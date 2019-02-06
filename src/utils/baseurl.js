export function baseurl(endpoint) {
  const local = 'http://localhost:3000/api/v1/';
  const remote = '';

  return `${local}${endpoint}`;
}