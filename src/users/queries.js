const getUsers = `select * from users`;

const getUserById = `select * from users where id = $1`;

const checkUserExists = `select u from users u where u.email = $1 or u."phoneNumber" = $2`;

const addUser = `insert into users (name, email, password, "phoneNumber", "createdAt", "createdBy", "userTypeId") values ($1, $2, $3, $4, $5, $6, $7)`;

const deleteUserById = `delete from users where id = $1`;

const updateUserById = `update users set name = coalesce($1, name), email = coalesce($2, email), password = coalesce($3, password), "phoneNumber" = coalesce($4, "phoneNumber"), "updatedAt" = coalesce($5, "updatedAt"), "updatedBy" = coalesce($6, "updatedBy") where id = $7`;

module.exports = {
  getUsers,
  getUserById,
  checkUserExists,
  addUser,
  deleteUserById,
  updateUserById,
};
