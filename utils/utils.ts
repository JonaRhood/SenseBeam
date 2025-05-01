export const createCookie = (name: string, value: string, maxAge: null | number, path: string) => {
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=${path}`;
    return null;
  }