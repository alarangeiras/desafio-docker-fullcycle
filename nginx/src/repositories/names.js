const dbPool = require('../config/db');

exports.allNames = function() {
  return new Promise((resolve, reject) => {
    dbPool.getConnection((err, connection) => {
      if (err) reject(err);

      connection.query('SELECT NAME FROM NAMES', function (error, results, fields) {
        connection.release();
    
        if (error) reject(error);
        
        let namesList = [];
        if (results.length > 0) {
          namesList = results.map(result=> result.NAME);
        }
        resolve(namesList);
      
      });
    });
  });
}