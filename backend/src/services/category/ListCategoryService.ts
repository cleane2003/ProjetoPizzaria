import { categoryRepository } from '../../database/repositories/categoryRepository';

export class ListCategoryService {
  async execute() {
    const category = await categoryRepository.find({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}
