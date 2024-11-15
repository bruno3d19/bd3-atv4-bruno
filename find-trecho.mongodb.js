const database = 'BD3-ATIV4';

const collection = 'CONVERSAS';

use(database);

db[collection].find({ contato: "Contato 1", mensagem: { $regex: "projeto", $options: "i" } });