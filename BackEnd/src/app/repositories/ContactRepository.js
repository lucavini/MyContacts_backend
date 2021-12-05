const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Lucas',
    email: 'lucas@gmail.com',
    phone: '12345678',
    category: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactRepository();
