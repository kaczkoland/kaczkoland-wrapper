const fetch = require("node-fetch")
/**
 * Get user from API
 * @param {*} user Username
 */
module.exports = async (user) => {
	return new Promise(async (resolve, reject) => {
		try {
			let req = await fetch("https://api.kaczkoland.pl/all").then(r => r.json());
			let val = req.find(u => u.username == user);
			resolve(val);
		} catch (err) {
			reject(err);
		}

	})


}