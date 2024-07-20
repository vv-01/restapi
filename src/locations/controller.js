const pool = require("../../db");
const queries = require("./queries");

const getLocations = (req, res) => {
  console.log("getting locations");
  pool.query(queries.getLocations, (error, results) => {
    if (error) {
      console.log(`error: ${error}`);
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getLocationById = (req, res) => {
  console.log("getting location by id");
  const id = parseInt(req.params.id);
  pool.query(queries.getLocationById, [id], (error, results) => {
    if (error) {
      console.log(`error: ${error}`);
      throw error;
    }
    if (results.rowCount === 0) {
      res.send("Location does not exist in the database");
      return;
    }
    res.status(200).json(results.rows);
  });
};

const addLocation = (req, res) => {
  console.log("creating a new location");
  const { name, address, city, state, country, createdAt, createdBy } =
    req.body;
  pool.query(queries.checkLocationExists, [address, city], (error, results) => {
    if (results.rows.length) {
      res.send("Location already exists");
      return;
    }
    pool.query(
      queries.addLocation,
      [name, address, city, state, country, createdAt, createdBy],
      (error, results) => {
        if (error) {
          console.log(`error: ${error}`);
          throw error;
        }
        res.status(201).send("created new location successfully");
      }
    );
  });
};

const deleteLocationById = (req, res) => {
  console.log("deleting user by id");
  const id = parseInt(req.params.id);
  pool.query(queries.getLocationById, [id], (error, results) => {
    if (results.rowCount === 0) {
      res.send("Location does not exist in the database");
      return;
    }
    pool.query(queries.deleteLocationById, [id], (error, results) => {
      if (error) {
        console.log(`error: ${error}`);
        throw error;
      }
      res.status(200).send("location deleted successfully");
    });
  });
};

const updateLocationById = (req, res) => {
  console.log("updating location");
  const id = parseInt(req.params.id);
  const { name, address, city, state, country, updatedAt, updatedBy } =
    req.body;
  pool.query(queries.getLocationById, [id], (error, results) => {
    if (results.rowCount === 0) {
      res.send("location does not exist in the database");
      return;
    }
    pool.query(
      queries.updateLocationById,
      [name, address, city, state, country, updatedAt, updatedBy, id],
      (error, results) => {
        if (error) {
          console.log(`error: ${error}`);
          throw error;
        }
        res.status(200).send("location updated successfully");
      }
    );
  });
};

module.exports = {
  getLocations,
  getLocationById,
  addLocation,
  deleteLocationById,
  updateLocationById,
};
