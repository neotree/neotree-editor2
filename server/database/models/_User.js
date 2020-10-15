/* eslint-disable object-shorthand */
import Sequelize from 'sequelize';
import sqlz from './sequelize';
import Country from './_Country';

const User = sqlz.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    country: {
      type: Sequelize.INTEGER,
      references: {
        model: Country,
        key: 'id'
      }
    },
  }
);

export default User;
