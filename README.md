Instructions:

1) Create mysql DB with name "testDB" on mysql. Replace your credential in config/config.json under "dev".

2) Run Command on root folder: 

	NODE_ENV=dev node ./ws/bin/sync
	
	* This will create tables in DB
	
3) Run Command on root folder: 

	NODE_ENV=dev node ./ws/bin/www
	
	* start server at 3000 port
	
4) Check "localhost:3000/categories" api