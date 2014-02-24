var addon = require('./node_modules/elastic-beam/build/Release/power_ctl');
var pwr_ctl = addon.PowerCtl();
var express = require('express');
var app = express();

app.configure(function () {
    app.use(
        "/",
        express.static(__dirname)
    );
});

app.get('/toggle/:id', function(req, res){
	if (req.params.id == "1") pwr_ctl.toggle(1);
	if (req.params.id == "2") pwr_ctl.toggle(2);
	if (req.params.id == "3") pwr_ctl.toggle(3);
	if (req.params.id == "4") pwr_ctl.toggle(4);

	var body = req.params.id + ' toggled !';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', Buffer.byteLength(body));
	res.end(body);
});

app.listen(80, function() {
  console.log('PowerCtl ready !');
});