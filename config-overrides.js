module.exports = function override(config, env) {
    console.log('override')
    let loaders = config.resolve
    loaders.fallback = {
        "fs": false,
        "tls": false,
        "net": false,
        "https": false,
        "process": require.resolve("process/browser")

    }

    return config
}