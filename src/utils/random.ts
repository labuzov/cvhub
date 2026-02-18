export const getRandomChar = () => {
  const type = Math.floor(Math.random() * 3);

  // '0'–'9'
  if (type === 0) {
    return String.fromCharCode(48 + Math.floor(Math.random() * 10));
  } 

  // 'A'–'Z'  
  if (type === 1) {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26)); 
  }

  // 'a'–'z'
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
};

export const getRandomId = (max: number = 8) => {
  const length = Math.max(4, max);
  let result = "";
  
  for (let i = 0; i < length; i++) {
    result += getRandomChar();
  }
  
  return result;
}