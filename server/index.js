const admin = require('firebase-admin');
const serviceAccount = require('./credentials/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://cantine-3a993.firebaseio.com'
});

const db = admin.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

var data = {
    date: '16/11/2018',
    entree: 'Taboulé',
    plat: 'Poulet frites',
    laitage: 'Kiri',
    dessert: 'Tarte aux pommes'
  };
  
  // Add a new document in collection "menu" with ID 'one'
  db
    .collection('menu')
    .doc('id')
    .set(data);

  process.exit(0);