export function getItem<T>(key: string) {
  if (typeof localStorage === "undefined") {
    return null;
  }
  const content = localStorage.getItem(key);
  if (content === null) {
    return null;
  }
  return JSON.parse(content) as T;
}
