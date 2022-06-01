import axios from "axios";
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
};

axios.defaults.baseURL = "http://localhost:3000"

module.exports = config;