async function demo() {
	const API = require("kaczkoland-wrapper");
	const user = await API.get("Aleksio1123");
	const rank = user.primary_rank;
	console.log(rank);
}
demo()