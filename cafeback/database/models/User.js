module.exports = (sequelize, dataTypes) => {

    let alias = "User";
    let cols = {
       id: {type: dataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},       
       username: { type: dataTypes.STRING(100), allowNull: false},       
       password: {type: dataTypes.STRING(100), allowNull: false },                     
     };
     let config = {
       tableName: 'user',
       timestamps: false
     };
    
    const Model = sequelize.define(alias, cols, config);
    
    return Model;    
    }