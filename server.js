var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/:id', function(req, res) {
  var id = req.params.id;
  var resDateObj;
  console.log('Input = ' + id);
  if(isNaN(id)){
	var d = new Date(id);
  }
  else{
  	var d = new Date(parseInt(id, 10));
  }
  if(isNaN(d.getTime())){
  	console.log('Invalid date');
  	resDateObj = {
            unix: 'null',
            natural: 'null'
        };
  }
  else{
  	console.log('Valid date');
  	resDateObj = {
            unix: d.getTime(),
            natural: d.toDateString()
    };
  }
  
  console.log(resDateObj);
  res.end(JSON.stringify(resDateObj));
});

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});