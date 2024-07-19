const pool = require("../../db");
const queries = require("./queries");

const getUsers = (req, res) => {
  console.log("getting users");
  pool.query(queries.getUsers, (error, results) => {
    if (error) {
      console.log(`error: ${error}`);
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  console.log("getting user by id");
  const id = parseInt(req.params.id);
  pool.query(queries.getUserById, [id], (error, results) => {
    if (error) {
      console.log(`error: ${error}`);
      throw error;
    }
    if (results.rowCount === 0) {
      res.send("User does not exist in the database");
      return;
    }
    res.status(200).json(results.rows);
  });
};

const addUser = (req, res) => {
  console.log("creating a new user");
  const {
    name,
    email,
    password,
    phoneNumber,
    createdAt,
    createdBy,
    userTypeId,
  } = req.body;
  pool.query(
    queries.checkUserExists,
    [email, phoneNumber],
    (error, results) => {
      if (results.rows.length) {
        res.send("User already exists");
        return;
      }
      pool.query(
        queries.addUser,
        [name, email, password, phoneNumber, createdAt, createdBy, userTypeId],
        (error, results) => {
          if (error) {
            console.log(`error: ${error}`);
            throw error;
          }
          res.status(201).send("created new user successfully");
        }
      );
    }
  );
};

const deleteUserById = (req, res) => {
  console.log("deleting user by id");
  const id = parseInt(req.params.id);
  pool.query(queries.getUserById, [id], (error, results) => {
    if (results.rowCount === 0) {
      res.send("User does not exist in the database");
      return;
    }
    pool.query(queries.deleteUserById, [id], (error, results) => {
      if (error) {
        console.log(`error: ${error}`);
        throw error;
      }
      res.status(200).send("user deleted successfully");
    });
  });
};

const updateUserById = (req, res) => {
  console.log("updating a user");
  const id = parseInt(req.params.id);
  const { name, email, password, phoneNumber, updatedAt, updatedBy } = req.body;
  pool.query(queries.getUserById, [id], (error, results) => {
    if (results.rowCount === 0) {
      res.send("User does not exist in the database");
      return;
    }
    pool.query(
      queries.updateUserById,
      [name, email, password, phoneNumber, updatedAt, updatedBy, id],
      (error, results) => {
        if (error) {
          console.log(`error: ${error}`);
          throw error;
        }
        res.status(200).send("user updated successfully");
      }
    );
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  deleteUserById,
  updateUserById,
};
