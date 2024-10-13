import jwt from 'jsonwebtoken';

export async function decodeJwt(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'your-secret-key', (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}