const http = require('http');
const fs = require('fs');
const path = require('path');

const logFilePath = process.env.LOG_FILE_PATH || './logs';
const logFileName = process.env.LOG_FILE_NAME || 'connections.log';
const logFileFormat = process.env.LOG_FILE_FORMAT || 'txt';

if (!fs.existsSync(logFilePath)) {
    fs.mkdirSync(logFilePath);
}

const server = http.createServer((req, res) => {
    const logMessage = `Time: ${new Date().toISOString()}, Method: ${req.method}, URL: ${req.url}\n`;
    const fullLogFilePath = path.join(logFilePath, `${logFileName}.${logFileFormat}`);
    
    fs.appendFile(fullLogFilePath, logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
