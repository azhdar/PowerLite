var restify = require('restify');
var addon = require('./node_modules/elastic-beam/build/Release/power_ctl');

var pwr_ctl = addon.PowerCtl();

var server = restify.createServer({ name: 'power-lite' });
server.use(restify.fullResponse()).use(restify.bodyParser());

server.get('/toggle/:id', function (req, res, next) {
	if (req.params.id == "1") pwr_ctl.toggle(1);
	if (req.params.id == "2") pwr_ctl.toggle(2);
	if (req.params.id == "3") pwr_ctl.toggle(3);
	if (req.params.id == "4") pwr_ctl.toggle(4);

	res.send(req.params.id + " toggled !");
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});