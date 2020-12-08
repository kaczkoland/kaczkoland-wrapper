let methods = {
	get: require("./methods/get")
}

module.exports = {
	get: methods.get,
	version: require("./package.json").version
}
