import fs from "fs"

export const config_filename = './config.json'

export let config = {
    PORT: 3001,
}

// fs.readFileSync(path, options)
// fs.writeFileSync(path, data, options)
// fs.appendFileSync(path, data)
// fs.existsSync(path)
// fs.mkdirSync(path, { recursive: true })
// fs.rmSync(path, { recursive: true, force: true })
// fs.renameSync(oldPath, newPath)

function loadConfig() {
    config = {
        ...config,
        ...fs.existsSync(config_filename) ? JSON.parse(fs.readFileSync(config_filename, 'utf-8')) : {}
    }
}

loadConfig()

export function put(key, value) {
    loadConfig()
    config[key] = value
    fs.writeFileSync(config_filename, JSON.stringify(config, null, 2))
}

for (const key in config)
    if (process.env[key] !== undefined)
        put(key, process.env[key])
