require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'dev',
    db: {
        dev:{
            dialect: 'postgres',
            host: process.env.DB_DEV_HOST,
            port: process.env.DB_DEV_PORT,
            database: process.env.DB_DEV_NAME,
            username: process.env.DB_DEV_USER,
            password: process.env.DB_DEV_PASS,
            //Extra configs
            define: {
                timestamp: true,
                underscored: true
            }
        },
        prod: {
            dialect: 'postgres',
            host: process.env.DB_PROD_HOST,
            port: process.env.DB_PROD_PORT,
            database: process.env.DB_PROD_NAME,
            username: process.env.DB_PROD_USER,
            password: process.env.DB_PROD_PASS,
            //Extra configs
            define: {
                timestamp: true,
                underscored: true
            },
            //Production special config
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        },
        test: {
            dialect: 'postgres',
            host: process.env.DB_DEV_HOST,
            port: process.env.DB_DEV_PORT,
            database: process.env.DB_DEV_NAME,
            username: process.env.DB_DEV_USER,
            password: process.env.DB_DEV_PASS,
            //Extra configs
            define: {
                timestamp: true,
                underscored: true
            }
        }
    }
}

module.exports = config;