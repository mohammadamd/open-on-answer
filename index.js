const AmiClient = require('asterisk-ami-client');
let client = new AmiClient();
const open = require('open');

client.connect('admin', 'amp111', {host: '10.211.55.6', port: 5038})
  .then(amiConnection => {
    client
      .on('event', (event) => {
        if (event.Event === 'DialEnd') {
          if (event.DialStatus === 'ANSWER' && event.Exten === '100') {
            open('https://google.com/?q=YOOOHOOOO%20Itsworker!!&caller_id=' + event.CallerIDNum);
          }

        }
      })
  })
  .catch(error => console.log(error));
