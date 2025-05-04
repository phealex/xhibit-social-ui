// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function filterKeys<T>(obj: any, keys: (keyof T)[]): T {
    const filtered: Partial<T> = {};
    keys.forEach((key) => {
      if (key in obj) {
        filtered[key] = obj[key];
      }
    });
    return filtered as T;
  }