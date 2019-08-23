SETLOCAL 
SET parentFolder=%~dp0
SET WorkFolder=%parentFolder%

cd %parentFolder%
npm install
bower install
node start %parentFolder%\"server.js"