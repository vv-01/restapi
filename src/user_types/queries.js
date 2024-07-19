const getUserTypes = `select * from "userTypes"`;

const getUserTypeById = `select * from "userTypes" where id = $1`;

const checkExistingType = `select u from "userTypes" u where u."userType" = $1`;

const addUserType = `insert into "userTypes" ("userType", description, "createdAt", "createdBy") values ($1, $2, $3, $4)`;

const deleteUserTypeById = `delete from "userTypes" where id = $1`;

const updateUserTypeById = `update "userTypes" set "userType" = coalesce($1, "userType"), description = coalesce($2, description), "updatedAt" = coalesce($3, "updatedAt"), "updatedBy" = coalesce($4, "updatedBy")`;

module.exports = {
  getUserTypes,
  getUserTypeById,
  addUserType,
  checkExistingType,
  deleteUserTypeById,
  updateUserTypeById,
};
