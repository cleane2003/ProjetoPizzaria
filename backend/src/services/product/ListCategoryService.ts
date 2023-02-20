import { productRepository } from '../../database/repositories/productRepository';

interface ProductRequest {
  category_id: number;
}

export class ListCategoryService {
  async execute({ category_id }: ProductRequest) {
    const findAllCategory = await productRepository.findOneBy({ category_id });

    return findAllCategory;
  }
}
