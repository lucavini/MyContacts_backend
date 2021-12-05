const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  // lista todos os registros
  async index(request, response) {
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  // obter um registro
  show() {}

  // criar um novo registro
  store() {}

  // atualizar um registro
  update() {}

  // deleter um novo registro
  delete() {}
}

module.exports = new ContactController();
