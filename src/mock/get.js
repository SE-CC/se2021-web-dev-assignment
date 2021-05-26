module.exports = function(app)
{
    app.get('/api/data',(req,res)=>{
        const data = require('./data.json');
        res.send(data);
    })
}