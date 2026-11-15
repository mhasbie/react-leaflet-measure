const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../..');
const routes = {
	'/': [path.join(__dirname, 'index.html'), 'text/html; charset=utf-8'],
	'/fixture.js': [path.join(root, '.e2e-build', 'fixture.js'), 'text/javascript; charset=utf-8'],
	'/leaflet/leaflet.css': [path.join(root, 'node_modules/leaflet/dist/leaflet.css'), 'text/css; charset=utf-8'],
};

const server = http.createServer((request, response) => {
	const pathname = new URL(request.url, 'http://127.0.0.1').pathname;
	const imageMatch = pathname.match(/^\/leaflet\/images\/([A-Za-z0-9._-]+)$/);
	const route = imageMatch
		? [path.join(root, 'node_modules/leaflet/dist/images', imageMatch[1]), 'image/png']
		: routes[pathname];

	if (!route) {
		response.writeHead(404);
		response.end('Not found');
		return;
	}

	fs.readFile(route[0], (error, contents) => {
		if (error) {
			response.writeHead(500);
			response.end(error.message);
			return;
		}

		response.writeHead(200, { 'Content-Type': route[1] });
		response.end(contents);
	});
});

server.listen(4173, '127.0.0.1');
