Instructions:

1) Please run `npm install` and `bower install`

2) Create mysql DB with name "testDB" on mysql. Replace your credential in config/config.json under "dev".

3) Run Command on root folder: 

	NODE_ENV=dev node ./ws/bin/sync
	
	* This will create tables in DB
	
4) Run Command on root folder: 

	NODE_ENV=dev node ./ws/bin/www
	
	* start server at 3000 port
	
5) Check "localhost:3000/categories" api