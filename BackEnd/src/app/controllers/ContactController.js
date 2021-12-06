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
  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExistis = await ContactRepository.findByEmail(email);

    if (contactExistis) {
      return response.status(400).json({ error: 'User already exists' });
    }

    const contact = await ContactRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

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
