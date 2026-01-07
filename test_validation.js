const http = require('http');

// Test case: Missing password
const data = JSON.stringify({
    username: 'incomplete_user',
    email: 'incomplete@example.com'
    // password is missing
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/register',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

console.log("Testing Missing Fields...");
const req = http.request(options, (res) => {
    console.log(`StatusCode: ${res.statusCode}`);

    res.on('data', (d) => {
        process.stdout.write(d);
        console.log("\n-------------------");
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.write(data);
req.end();
