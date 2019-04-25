export function randomHash() {
  let id = '';
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let t = 0; t < 5; t++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}
