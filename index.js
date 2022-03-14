const app = require("./app")
const { config } = require("./config")



app.listen(config.PORT, () => {
    console.log("Server listenting at port: " + config.PORT)
})