import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE_URL || "sql12809655",   // database name or connection string
  process.env.DATABASE_USERNAME || "sql12809655",               // username
  process.env.DATABASE_PASSWORD || "hjqYDqa2XI",           // password
  {
    host: process.env.DATABASE_HOST || "sql12.freesqldatabase.com",
    dialect: "mysql",
    port: process.env.DATABASE_PORT || 3306,
    dialectOptions: {
      connectTimeout: 60000 // 60 seconds
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000, // 30 seconds
      idle: 10000,    // 10 seconds
    },
    // Add SSL configuration if your production database requires it
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false // For self-signed certs or specific providers
    //   }
    // }
  }
);

export default sequelize;
