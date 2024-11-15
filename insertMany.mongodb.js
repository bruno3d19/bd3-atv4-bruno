const database = 'BD3-ATIV4';

const collection = 'CONVERSAS';

use(database);

db[collection].insertMany([
    { contato: "Contato 1", data_hora: new Date("2024-11-15T10:00:00Z"), mensagem: "Olá, como você está?" },
    { contato: "Contato 1", data_hora: new Date("2024-11-15T10:01:00Z"), mensagem: "Estou bem, obrigado!" },
    { contato: "Contato 1", data_hora: new Date("2024-11-15T10:02:00Z"), mensagem: "E você, como vai?" },
    { contato: "Contato 1", data_hora: new Date("2024-11-15T10:03:00Z"), mensagem: "Tudo ótimo por aqui." },
    { contato: "Contato 1", data_hora: new Date("2024-11-15T10:04:00Z"), mensagem: "Que bom! Tem alguma novidade?" },
    { contato: "Contato 1", data_hora: new Date("2024-11-15T10:05:00Z"), mensagem: "Sim, comecei um novo projeto." },
    { contato: "Contato 1", data_hora: new Date("2024-11-15T10:06:00Z"), mensagem: "Que legal! Me conta mais." },
    { contato: "Contato 1", data_hora: new Date("2024-11-15T10:07:00Z"), mensagem: "Claro, é sobre desenvolvimento de software." },
    { contato: "Contato 1", data_hora: new Date("2024-11-15T10:08:00Z"), mensagem: "Parece interessante. Boa sorte!" },
    { contato: "Contato 1", data_hora: new Date("2024-11-15T10:09:00Z"), mensagem: "Obrigado! Vamos marcar para conversar mais depois." }
]);