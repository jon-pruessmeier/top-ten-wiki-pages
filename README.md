This project shows up to ten random pages from the german Wikipedia. The wikipedia-crawler starts with the "Article of the day" and then crawl to next articles. An Express-Server receives the data from the crawler and returns it via GET-request at the API-endpoint '/articles'.

To install the project on your on machine you have to fulfill several requirements:
-Python installed
-Firefox installed
-Geckodriver installed and accessible from PATH
-Node installed

If all requirements are fulfilled you can install all dependencies and finally start the server with these commands starting from the root-directory:

cd wikipedia-crawler
python -m venv /venv
./venv/Scripts/activate
pip isntall -r requirements.txt
cd ..
cd client
npm install
npm run-script build
cd ..
cd server
npm install
node server.js