const bcrypt = require('bcrypt');

export const generatePass = async (pass) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pass , salt);
    return hash;
  
}

// export const generatePass = async (pass) => {
//   const salt = await bcrypt.genSalt(10); // Generate salt
//   const hash = await bcrypt.hash(pass, salt); // Hash password
//   return hash; // Return hashed password
// };


export const verifyPass = async (pass , hash) => {
    bcrypt.compare(pass, hash, function(err, result) {
        console.log(result)
        return result;
    });
  
}

