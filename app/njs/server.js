import fs from 'fs'

const config_filename = "./config.json"
var config = fs.existsSync(config_filename) ? JSON.parse(fs.readFileSync(config_filename, "UTF8")) : {}

config.name = "rfirjegiherg"

fs.writeFileSync(config_filename, JSON.stringify(config, null,2))
