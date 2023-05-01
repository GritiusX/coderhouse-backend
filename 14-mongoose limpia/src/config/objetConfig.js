const {connect} = require('mongoose')

let url = 'mongodb+srv://federico:federico1@cluster0.tzkuy8w.mongodb.net/comsion39750?retryWrites=true&w=majority'

module.exports = {
    connectDB: () => {
        connect(url)
        console.log('Base de datos conectadas')
    }
}

