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


export const toBase64 = (str: string) => {
    return typeof window === "undefined"
        ? Buffer.from(str).toString("base64")
        : window.btoa(str);
}

export const shimmer = () => {
    const blue1 = '#e2f4ff';
    const blue2 = '#ffffff';
  
    return `
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <rect width="100%" height="100%" fill="${blue1}">
          <animate 
            attributeName="fill" 
            values="${blue1};${blue2};${blue1}" 
            dur="0.8s" 
            repeatCount="indefinite" />
        </rect>
      </svg>
    `;
  };
  