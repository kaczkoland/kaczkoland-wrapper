const fetch = require("node-fetch");

/**
 * Get user from API
 * @param {*} user - Username
 * @returns {object} - User object or { code:  404, message: "Not found" }
 */
async function get(user) {
    if (!user) throw new TypeError("User is required");
    const req = await fetch("https://api.kaczkoland.pl/all").then(r => r.json());
    const val = req.find(u => u.username === user);
    if (!val) return { code: 404, message: "Not found" }
    return val;
}

module.exports = {
    get: get,
    version: require("./package.json").version
}
