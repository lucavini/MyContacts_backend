const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();
    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);
    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }

    response.status(200).json(category);
  }

  async store(request, response) {
    const { name } = request.body;
    if (!name) {
      response.status(400).json({ error: 'Name is require' });
    }

    const category = await CategoryRepository.create({ name });
    response.status(200).json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryExits = await CategoryRepository.findById(id);
    if (!categoryExits) {
      return response.status(404).json({ error: 'Category not found' });
    }

    const category = await CategoryRepository.update(id, { name });
    response.status(200).json(category);
  }

  async delete(request, response) {
    const { id } = request.params;
    await CategoryRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
