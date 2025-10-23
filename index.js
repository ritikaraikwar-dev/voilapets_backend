// const express = require('express');
// const PORT = 4000;
// const dbConnect = require('./config/dbConnect');
// const route = require('./routes/route')
// const app = express();
// const cors = require('cors');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const cookieParser = require('cookie-parser');
//  const { v4: uuidv4 } = require('uuid');


// // Allow requests from localhost:3000 (your React app)
// app.use(cors({
//   origin: 'http://localhost:3000',  // or use '*' for all origins (not recommended for production)
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true // if you use cookies/auth headers
// }));
 
// app.use(cookieParser());

// app.use((req, res, next) => {
//   if (!req.cookies.guest_id) {
//     const guestId = uuidv4();
//     res.cookie("guest_id", guestId, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "lax",
//       maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
//     });
//   }
//   next();
// });

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



const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require('./routes/route');
const dbConnect = require('./config/dbConnect');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://voilapets-frontend.vercel.app'
  ],
  credentials: true
}));

app.use(cookieParser());

app.use((req, res, next) => {
  if (!req.cookies.guest_id) {
    const guestId = uuidv4();
    res.cookie("guest_id", guestId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
    });
  }
  next();
});

app.use(express.json());
dbConnect();
app.use('/voilapets', route);
app.get('/', (req, res) => {
  res.send("hello how are you");
});

module.exports = app;
