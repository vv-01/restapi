const getLocations = `select * from locations`;

const getLocationById = `select * from locations where id = $1`;

const checkLocationExists = `select l from locations l where l.address = $1 and l.city = $2`;

const addLocation = `insert into locations (name, address, city, state, country, "createdAt", "createdBy") values ($1, $2, $3, $4, $5, $6, $7)`;

const deleteLocationById = `delete from locations where id = $1`;

const updateLocationById = `update locations set name = coalesce($1, name), address = coalesce($2, address), city = coalesce($3, city), state = coalesce($4, state), country = coalesce($5, country), "updatedAt" = coalesce($6, "updatedAt"), "updatedBy" = coalesce($7, "updatedBy") where id = $8`;

module.exports = {
  getLocations,
  getLocationById,
  checkLocationExists,
  addLocation,
  deleteLocationById,
  updateLocationById,
};
