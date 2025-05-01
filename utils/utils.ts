export const createCookie = (name: string, value: string, maxAge: null | number, path: string) => {
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=${path}`;
    return null;
}

export const dateFormat = (date: string) => {
const parts = date.split("-");
const year = parts[0];
const month = parts[1].padStart(2, "0");
const day = parts[2].padStart(2, "0");

const reversed = `${day}-${month}-${year}`;
return reversed;
}