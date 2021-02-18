// 'use strict';

// const https = require('https');
// const crypto = require('crypto');
// const { errorResponse, CustomError } = require('../helpers/errorHelper');

// const checkSumGenerator = async (url) => {

//     https.get(url, (res) => {
//       const { statusCode } = res;
    
//       let error;
//       if (statusCode !== 200) {
//         error = new Error('Request Failed.\n' +
//                           `Status Code: ${statusCode}`);
//       }
//       if (error) {
//         console.error(error.message);
//         res.resume();
//         return;
//       }

      
//       const hash = crypto.createHash('md5');
//       res.setEncoding('utf8');
//       res.pipe(hash)
//       let rawData = '';

//       res.on('data', (chunk) => { 
//           rawData += chunk; 
//           hash.update(rawData, 'utf8')
//       });

//       res.on('end', () => {
//         try {
//           hash.digest('hex');
//         } catch (error) {
//           const customError = new CustomError({
//             message: 'Failed to hash MP3 file',
//             status: error.status,
//             meta: {
//               error
//             }
//           });
//           return errorResponse(customError);
//         }
//       });
//     }).on('error', (error) => {
//       const customError = new CustomError({
//         message: 'Got error',
//         status: error.status,
//         meta: {
//           error
//         }
//       });
//       return errorResponse(customError);
//     });
//     }

// module.exports = {
//     checkSumGenerator
// }