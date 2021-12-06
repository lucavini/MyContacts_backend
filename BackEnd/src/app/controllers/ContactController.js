const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  // lista todos os registros
  async index(request, response) {
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  // obter um registro
  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ Error: 'User not found' });
    }

    response.status(200).json(contact);
  }

  // criar um novo registro
  store() {}

  // atualizar um registro
  update() {}

  // deleter um novo registro
  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
