
const dotenv = require('dotenv');

dotenv.config();

module.export = {
    jwtSecret: process.env.JWT_SECRET, // vai procurar e extrair junto com env
    port: process.env.PORT 
}