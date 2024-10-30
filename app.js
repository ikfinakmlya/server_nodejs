const express = require('express')
 const app = express()
 const port = 3000
 const expressLayouts = require('express-ejs-layouts')
 const {loadContact,findContact} = require('./utils/contact');
 app.set('view engine','ejs')
 app.use(expressLayouts);
 app.use(express.static('public'));

 app.get('/', (req, res) => {
    const
    mhs=[{nama:'agus',email:'agus@gmail.com'},{nama:'ani',email:'ani@gmail.com'}];
    res.render('index',{
    nama:'FIK',
    title:'Halaman home',
    mhs:mhs,
    layout:'layouts/main-layout',
    });
    })
    app.get('/about', (req, res) => {
    res.render('about',{
    layout:'layouts/main-layout',
    title:'Halaman About'
    });
    })
    app.get('/contact', (req,res) => {
    const contacts = loadContact();
    //console.log(contacts);
    res.render('contact',{
    layout:'layouts/main-layout',
    title:'Halaman Contact',
    contacts:contacts,
    });
    })
    app.get('/contact/:nama',(req, res) => {
    const contact = findContact(req.params.nama);
    res.render('detail',{
    layout:'layouts/main-layout',
    title:'Halaman Detail Contact',
    contact,
    });
    })
    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    })


// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
