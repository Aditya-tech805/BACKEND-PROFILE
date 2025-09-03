const http = require("http");
//const fs = require("fs");
//const url  = require("url");
const express =require("express");

const app =express(); // handler function of the express 

app.get('/', (req,res)=>{
    return res.send("hello from the page");
});

app.get('/about', (req,res)=>{
    return res.send(`hello ${req.query.name}`);
});

// function myhandler(req, res){
//      if(req.url=== '/favicon.ico') return res.end();
//     const log = `${Date.now()}:${req.method} ${req.url} New request received\n`;
//     const myurl =url.parse(req.url ,true);

//     fs.appendFile('log.txt', log, (err,data) => {
//        switch(myurl.pathname){
//         case "/":
//             if(req.method === 'GET')
//             res.end("homepage");
//         break;
//         case '/about':
//             const username =myurl.query.name;
//             res.end(`Hi,${username}`);
//         break;
//         case '/search':
//         const search=myurl.query.search_query;
//         res.end("here are your results for "+search);
        
//         case "/signup":
//             if(req.method ==="GET")
//                 res.end("this is a signup form");
//             else if (req.method === "POST"){
//                 //DB QUERY
//                 res.end("Success");
//             }
//         default:
//             res.end("404 Not found");
//        }
// });

// };


//  const myserver = http.createServer(app);
// myserver.listen(8000, () => {
//     console.log("Server started on port 8000");
// });

app.listen(8000,() => console.log("Server Started!"));