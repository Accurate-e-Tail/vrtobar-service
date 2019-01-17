const { Pool, Client } = require('pg');
const Promise = require('bluebird');

const client = new Client({
    user: 'root',
    host: 'localhost',
    database: 'amazon',
    password: 'student',
    port: 5432,
});

client.connect((err) => {
    if (err) {
        throw err;    
    } else {
        console.log('connected!');
    }
});

const addItem = (item) => {
    return new Promise((resolve, reject) => {
        client.query(`INSERT INTO products(name) VALUES(${item})`, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};


module.exports = {
    addItem
}