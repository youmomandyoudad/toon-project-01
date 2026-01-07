const pool = require('./config/database');

async function testConnection() {
    try {
        const client = await pool.connect();
        const res = await client.query('SELECT 1 + 1 AS result');
        console.log('Database connected successfully:', res.rows[0].result);
        client.release();
        process.exit(0);
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

testConnection();
