import { Category } from "../Entities/category.entity";

export class CategoriesService {
    async create (): Promise <Category> {
        const category = new Category({
                title: 'example category',
            color: '#ff33bb'
            });
            return category;
    }
}