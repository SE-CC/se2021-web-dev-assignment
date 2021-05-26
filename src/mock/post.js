var bodyparser = require("body-parser")
var fs = require("fs")
module.exports = function(app){

  app.use(bodyparser.json());
  app.post('/api/data',(req,res)=>{
    const body = req.body;
    const content = JSON.stringify(body);
    fs.writeFileSync('./src/mock/data.json',content);
    res.send('success');
  })
}
