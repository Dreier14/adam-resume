require( 'dotenv' ).config();
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const session = require( 'express-session' );
const massive = require( 'massive' );
const path = require( 'path' );
const sM =require('./controllers/nodeMailerController'); 


const PORT = 3400;

const app = express();

app.use(express.static(path.join(__dirname, '/../build')));

app.use(bodyParser.json());
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 60 * 60 * 60 * 24 * 14
//     }
// }))

// massive(process.env.CONNECTION_STRING).then(db =>{
//     app.set('db',db);
    
// }).catch(err => console.log('Connection error -------------', err));

/*********Node Mailer Endpoint ***********************/
app.post('/api/sendmail', sM.sendMail);

app.listen(PORT, () => {
    console.log(`Hey your server is up and working on port ${PORT}🚀`)
})
