import http.server
import socketserver

try:
    environ
except: 
    environ = None

if environ is None :
    PORT = 8000
else:
    PORT = environ.get('PORT')


Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()