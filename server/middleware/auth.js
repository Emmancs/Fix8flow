// Auth middleware is simplified for demo mode:
// - It does NOT verify any token
// - It simply injects a fixed demo user id so the app can be explored without authentication
// NOTE: Do NOT use this in production – restore proper JWT verification instead.

export const authenticate = (req, res, next) => {
  // Hard-coded demo user id – Mongoose will cast this string to an ObjectId
  req.userId = '000000000000000000000001';
  next();
};

