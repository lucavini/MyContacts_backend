const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();
    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;
    if (!name) {
      response.status(400).json({ error: 'Name is require' });
    }

    const category = await CategoryRepository.create({ name });
    response.status(200).json(category);
  }
}

module.exports = new CategoryController();
