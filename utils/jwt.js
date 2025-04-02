const jwt= require("jsonwebtoken");

export const generatetoken = (token) => {
    return jwt.sign( token , "hehehe");
  
}

export function verifyToken(token) {
    try {
      return jwt.verify(token, "hehehe");
    } catch (error) {
      return null;
    }
  }
