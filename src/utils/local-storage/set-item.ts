export function setItem(key: string, value: string) {
  if (typeof localStorage === "undefined") {
    return;
  }
  localStorage.setItem(key, value);
}
