let pdfreader = require('pdfreader');

new pdfreader.PdfReader().parseFileItems('./server/download/sample.pdf', function(err, item) {
    if (err)
      console.log(err);
    else if (!item)
      console.log('No item');
    else if (item.text)
      console.log(item.text);
  });