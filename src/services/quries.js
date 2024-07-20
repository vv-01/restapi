const getServices = `select * from services`;

const getServiceById = `select * from services where id = $1`;

const checkServiceExists = `select s from services s where s.name = $1`;

const addService = `insert into services (name, description, price, "createdAt", "createdBy") values ($1, $2, $3, $4, $5)`;

const deleteServiceById = `delete from services where id = $1`;

const updateServiceById = `update services set name = coalesce($1, name), description = coalesce($2, description), price = coalesce($3, price), "updatedAt" = coalesce($4, "updatedAt"), "updatedBy" = coalesce($5, "updatedBy") where id = $6`;

module.exports = {
  getServices,
  getServiceById,
  checkServiceExists,
  addService,
  deleteServiceById,
  updateServiceById,
};
