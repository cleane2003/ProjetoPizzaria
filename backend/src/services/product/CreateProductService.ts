import { productRepository } from '../../database/repositories/productRepository';

interface ProductRequest {
  name: string;
  price: number;
  description: string;
  banner: string;
  // category_id: number;
}

export class CreateProductService {
  async execute({
    name,
    price,
    // category_id,
    description,
    banner,
  }: ProductRequest) {
    const product = productRepository.create({
      name,
      price,
      description,
      banner,
      // category_id,
    });

    await productRepository.save(product);

    return product;
  }
}
