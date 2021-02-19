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
- The checksum generator does a HEAD request to get the headers object and from there we can get the content-MD5 which is the checksum for the file. This would depend on a server if they provide this value or not. It is impossible to download the files and then calculate the hash from that since the files are quite large and there is many of them so if I had more time I would have spent designing a solution for that in order to get the real checksum value.

- Another thing to improve is adding integration tests to test if the request to read the MP3 files succeeds  and more unit tests for other functions.

- Another thing to consider is to store the data in a cache so that the application doesn't have to compute the data all the time, making it more stable and the data being accessed much faster.


