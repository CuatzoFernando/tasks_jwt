const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.DB_PORT}/${process.env.DB_NAME}`, {
   	useNewUrlParser: true, 
	useUnifiedTopology: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)