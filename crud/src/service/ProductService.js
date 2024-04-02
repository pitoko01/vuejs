export const ProductService = {
    getPeopleData() {
        return [
            {
                id: '1000',
                idade: 25,
                nome: 'João',
                email: 'joao@example.com',
                cpf: '123.456.789-00'
            },
            {
                id: '1001',
                idade: 30,
                nome: 'Maria',
                email: 'maria@example.com',
                cpf: '987.654.321-00'
            },
            
            // Adicione mais pessoas conforme necessário
        ];
    },

    getPeopleMini() {
        return Promise.resolve(this.getPeopleData().slice(0, 5));
    },

    getPeopleSmall() {
        return Promise.resolve(this.getPeopleData().slice(0, 10));
    },

    getPeople() {
        return Promise.resolve(this.getPeopleData());
    },
};