const fetch = require("node-fetch");

/**
 * Get user from API
 * @param {*} user - Username
 * @returns {object} - User object or { code:  404, message: "Not found" }
 */
async function get(user) {
	if (!user) throw new TypeError("User is required");
	return new Promise(async (resolve, reject) => {
		try {
			let req = await fetch("https://api.kaczkoland.pl/all").then(r => r.json());
			let val = req.find(u => u.username == user);
			if (!val) resolve({ code: 404, message: "Not found" })
			resolve(val);
		} catch (err) {
			reject(err);
		}
	})
}

module.exports = {
	get: get,
	version: require("./package.json").version
}
