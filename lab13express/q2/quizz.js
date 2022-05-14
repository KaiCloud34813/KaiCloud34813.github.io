const express = require('express');
const app = express();
const port = 3000;
let a = [1,4,5,6,4,3];



app.get('/should', function(req, res) {
    res.send(`<ol>
                  <li></li>
                  <li></li>
              </ol>
              <a href="/add">link</a>`)
  });

  app.get('/add', function(req, res) {
    res.send(`<form>
                  <input type="text" name="enter"/>
                  <input type="submit" id="submit" value= "Submit text" />
              </form>`)
  });


  app.post("/add", (req, res) => {
    let text = req.body;
    a.push(text);
    res.send('/should');
  });  

app.listen(port, function() {
  console.log("The app is running ...");
});
