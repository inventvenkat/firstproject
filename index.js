var http = require("http");
http.set('port', (process.env.PORT || 5000));
http.get('/',function(request,response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
   	response.end('venkatesh\nSathish');
});

http.listen(http.get('port'), function() {
  console.log('Node http is running on port', http.get('port'));
});
