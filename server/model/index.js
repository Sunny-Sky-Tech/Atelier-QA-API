// For reference - Client Calls
// const getQuestions = (id, count) => axios.get(`/qa/questions/${id}&count=${count}`);

// const postQuestion = (form) => axios.post('/qa/questions', form);

// const addAnswer = (id, form) => axios.post(`/qa/${id}/answers`, form);

// const addHelpfulQuestion = (id, endpoint) => axios.put(`qa/${endpoint}/${id}/helpful`);

// const reportAnswer = (id) => axios.put(`/qa/answers/${id}/report`);

const db = require('../../db').connection


module.exports = {

  getQuestions: function (params, callback) {
    var queryStr = `SELECT body, timestamp, user, reported, helpfulness FROM questions WHERE product_id=? LIMIT 0, ?`
    db.query(queryStr, params, (err, results) => {
      // console.log(err)
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
  })

  },

  postQuestion: function (params, callback) {
    var queryStr = `INSERT INTO questions (body, user, email, product_id) VALUES (?, ?, ?, ?)`
    db.query(queryStr, params, (err) => {
        // console.log(err)
        if (err) {
          callback(err)
        } else {
          callback(null)
        }
    })
  }
};