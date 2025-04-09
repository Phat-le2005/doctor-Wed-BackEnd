module.exports = (sequelize, DataTypes) => {
    const DoctorSpecialty = sequelize.define('DoctorSpecialty', {
      doctorId: DataTypes.INTEGER,
      specialtyId: DataTypes.INTEGER
    }, { timestamps: false ,tableName: 'doctorspecialties'});
  
    return DoctorSpecialty;
  };