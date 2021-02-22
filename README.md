# rss-reader

The purpose of this application is to extract data from an RSS feed and expose it to and endpoint called /episodes

# Endpoints

GET /episodes using the port 3000 locally and port 8000 in Docker

# How to run locally
run the command npm run start

Alternatively, use nodemon index.js so that you don't have to start the server all the time after making changes

# Running tests
run the command npm test

# Things to improve the application
- The checksum generator uses a stream to get the data, read it then calculate the checksum. Since the files are quite large then it takes longer to process these files. At the moment I have capped the data in 15 items so as to show a response. If I had more time, I would find a way to chunk the data so as to improve performance and send it back to the client faster

- Another thing to improve is adding integration tests to test if the request to read the MP3 files succeeds  and more unit tests for other functions.

- Another thing to consider is to store the data in a cache so that the application doesn't have to compute the data all the time, making it more stable and the data being accessed much faster.


