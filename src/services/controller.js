const pool = require("../../db");
const queries = require("./quries");

const getServices = (req, res) => {
  console.log("getting services");
  pool.query(queries.getServices, (error, results) => {
    if (error) {
      console.log(`error: ${error}`);
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getServiceById = (req, res) => {
  console.log("getting service by id");
  const id = parseInt(req.params.id);
  pool.query(queries.getServiceById, [id], (error, results) => {
    if (error) {
      console.log(`error: ${error}`);
      throw error;
    }
    if (results.rowCount === 0) {
      res.send("Service does not exist in the database");
      return;
    }
    res.status(200).json(results.rows);
  });
};

const addService = (req, res) => {
  console.log("creating new service");
  const { name, description, price, createdAt, createdBy } = req.body;
  pool.query(queries.checkServiceExists, [name], (error, results) => {
    if (results.rows.length) {
      res.send("Service already exists");
      return;
    }
    pool.query(
      queries.addService,
      [name, description, price, createdAt, createdBy],
      (error, results) => {
        if (error) {
          console.log(`error: ${error}`);
          throw error;
        }
        res.status(201).send("created new service successfully");
      }
    );
  });
};

const deleteServiceById = (req, res) => {
  console.log("deleting service by id");
  const id = parseInt(req.params.id);
  pool.query(queries.getServiceById, [id], (error, results) => {
    if (results.rowCount === 0) {
      res.send("Service does not exist in the database");
      return;
    }
    pool.query(queries.deleteServiceById, [id], (error, results) => {
      if (error) {
        console.log(`error: ${error}`);
        throw error;
      }
      res.status(200).send("service deleted successfully");
    });
  });
};

const updateServiceById = (req, res) => {
  console.log("updating a user");
  const id = parseInt(req.params.id);
  const { name, description, price, updatedAt, updatedBy } = req.body;
  pool.query(queries.getServiceById, [id], (error, results) => {
    if (results.rowCount === 0) {
      res.send("Service does not exist in the database");
      return;
    }
    pool.query(
      queries.updateServiceById,
      [name, description, price, updatedAt, updatedBy, id],
      (error, results) => {
        if (error) {
          console.log(`error: ${error}`);
          throw error;
        }
        res.status(200).send("service updated successfully");
      }
    );
  });
};

module.exports = {
  getServices,
  getServiceById,
  addService,
  deleteServiceById,
  updateServiceById,
};
