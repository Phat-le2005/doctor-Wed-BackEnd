const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('demo', 'root', null, {
  host: 'localhost',
  dialect:  'mysql' ,
  logging:false
});
const connectDB = async() =>{
    try {
        await sequelize.authenticate();
        console.log('Connection successfully.');
      } catch (error) {
        console.error('Connection Faile:', error);
      }
}
module.exports = connectDB