const express = require('express');
const PORT = 4000;
const dbConnect = require('./config/dbConnect');
const route = require('./routes/route')
const app = express();
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
 
app.use(session({
  secret: 'voilapets@1234',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/voilapets' }),
  cookie: { secure: false }
})) 

app.get('/health', (req, res) => {
  console.log('Current session ID:', req.sessionID);
  res.send('server started succesfully');
});

 
dbConnect();

app.use(express.json());
app.use(cors(
    {
         origin: 'http://localhost:3000',
  credentials: true,
    }
));

app.use('/voilapets',route);


app.listen(PORT,()=>{
    console.log("server start on :",PORT);
});

app.get('/',(req,res)=>{
    res.send("hello how are you");
});