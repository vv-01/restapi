const pool = require("../../db");
const queries = require("./queries");

const getUserTypes = (req, res) => {
  console.log("getting user types");
  pool.query(queries.getUserTypes, (error, results) => {
    if (error) {
      console.log(`error: ${error}`);
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getUserTypeById = (req, res) => {
  console.log("getting user type by id");
  const id = parseInt(req.params.id);
  pool.query(queries.getUserTypeById, [id], (error, results) => {
    if (error) {
      console.log(`error: ${error}`);
      throw error;
    }
    if (results.rowCount === 0) {
      res.send("User type does not exist in the database");
      return;
    }
    res.status(200).json(results.rows);
  });
};

const addUserType = (req, res) => {
  console.log("creating a new user type");
  const { userType, description, createdAt, createdBy } = req.body;
  pool.query(queries.checkExistingType, [userType], (error, results) => {
    if (results.rows.length) {
      res.send("User type already exists");
      return;
    }
    pool.query(
      queries.addUserType,
      [userType, description, createdAt, createdBy],
      (error, results) => {
        if (error) {
          console.log(`error: ${error}`);
          throw error;
        }
        res.status(201).send("created new user type successfully");
      }
    );
  });
};

const deleteUserTypeById = (req, res) => {
  console.log("deleting user type by id");
  const id = parseInt(req.params.id);
  pool.query(queries.getUserTypeById, [id], (error, results) => {
    if (results.rowCount === 0) {
      res.send("User type does not exist in the database");
      return;
    }
    pool.query(queries.deleteUserTypeById, [id], (error, results) => {
      if (error) {
        console.log(`error: ${error}`);
        throw error;
      }
      res.status(200).send("user type deleted successfully");
    });
  });
};

const updateUserTypeById = (req, res) => {
  console.log("updating a user");
  const id = parseInt(req.params.id);
  const { userType, description, updatedAt, updatedBy } = req.body;
  pool.query(queries.getUserTypeById, [id], (error, results) => {
    if (results.rowCount === 0) {
      res.send("User type does not exist in the database");
      return;
    }
    pool.query(
      queries.updateUserTypeById,
      [userType, description, updatedAt, updatedBy],
      (error, results) => {
        if (error) {
          console.log(`error: ${error}`);
          throw error;
        }
        res.status(200).send("user type updated successfully");
      }
    );
  });
};

module.exports = {
  getUserTypes,
  getUserTypeById,
  addUserType,
  deleteUserTypeById,
  updateUserTypeById,
};
