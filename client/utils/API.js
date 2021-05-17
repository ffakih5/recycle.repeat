import axios from "axios";

export default {
  // Gets all books
  getScore: function() {
    return axios.get("/api/score");
  },
  // Gets the book with the given id
  getScore: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteScore: function(id) {
    return axios.delete("/api/score/" + id);
  },
  // Saves a book to the database
  saveScore: function(scoreData) {
    return axios.post("/api/score", scoreData);
  }
};
