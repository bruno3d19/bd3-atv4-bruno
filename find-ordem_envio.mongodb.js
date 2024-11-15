const database = 'BD3-ATIV4';

const collection = 'CONVERSAS';

use(database);

db[collection].find({ contato: "Contato 1" }).sort({ data_hora: 1 });