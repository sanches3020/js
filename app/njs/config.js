import fs from 'fs'

const config_filename = "./config.json"


export var config = {
    PORT: 3080
}

if (fs.existsSync(config_filename)) {
    var text = fs.readFileSync(config_filename, "utf-8")
    var config2 = JSON.parse(text)

    for (var key of Object.keys(config2)) {
        config[key] =  config2[key]
    }
}
fs.writeFileSync(config_filename, JSON.stringify(config), "utf-8")
console.log(config)



