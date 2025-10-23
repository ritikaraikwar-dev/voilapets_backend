// const express = require('express');
// const PORT = 4000;
// const dbConnect = require('./config/dbConnect');
// const route = require('./routes/route')
// const app = express();
// const cors = require('cors');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');


// // Allow requests from localhost:3000 (your React app)
// app.use(cors({
//   origin: 'http://localhost:3000',  // or use '*' for all origins (not recommended for production)
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true // if you use cookies/auth headers
// }));
 
// app.use(session({
//   secret: 'voilapets@1234',
//   resave: false,
//   saveUninitialized: true,
//   store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/voilapets' }),
//   cookie: { secure: false }
// })) 

// app.get('/health', (req, res) => {
//   console.log('Current session ID:', req.sessionID);
//   res.send('server started succesfully');
// });

 
// dbConnect();

// app.use(express.json());

 

// app.use('/voilapets',route);


// app.listen(PORT,()=>{
//     console.log("server start on :",PORT);
// });

// app.get('/',(req,res)=>{
//     res.send("hello how are you");
// });

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require('./routes/route');
const dbConnect = require('./config/dbConnect');

const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');   

app.options('*', cors({
  origin: 'http://localhost:3000',
  credentials: true,
 // allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(cors({
  origin: [
    'http://localhost:3000', // For local development
    'https://your-frontend-project.vercel.app', // Vercel's default domain
    'https://www.yourcustomdomain.com', // Your custom domain, if applicable
    'https://yourcustomdomain.com' // Ensure both www and non-www versions if used
  ],
  credentials: true, // If you're using cookies or authorization headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] // Allowed HTTP methods
}));


app.use(express.json());

app.use(session({
  secret: 'voilapets@1234',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: { secure: false },
}));

dbConnect();  // Connect DB before routes

app.use('/voilapets', route);

app.get('/', (req, res) => {
  res.send("hello how are you");
});

module.exports = app;



// app.use(session({
//   secret: 'voilapets@1234',
//   resave: false,
//   saveUninitialized: true,
//   store: MongoStore.create({ mongoUrl:process.env.MONGO_URI}),
//   cookie: { secure: false }
// }))

// app.use(cors({
//   origin: 'http://localhost:3000',  
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));
// app.use(express.json());

// dbConnect();

// app.use('/voilapets', route);

 

// app.get('/', (req, res) => {
//   res.send("hello how are you");
// });

// module.exports = app;
