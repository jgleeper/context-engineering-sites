const https = require('https');

const options = {
  hostname: 'api.vercel.com',
  path: '/v1/integrations/deploy/prj_AWzJlNCMBsvKEnSQJ8FxYXSa4MNJ/SCckCKVpXG',
  method: 'POST',
};

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  res.on('data', (d) => process.stdout.write(d));
});

req.on('error', (error) => {
  console.error('Deployment trigger failed:', error);
});

req.end();
