import { categoryRepository } from '../../database/repositories/categoryRepository';

interface CategoryRequest {
  name: string;
}

export class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === '') {
      throw new Error('Name invalid');
    }

    const category = categoryRepository.create({ name });

    await categoryRepository.save(category);

    return category;
  }
}
