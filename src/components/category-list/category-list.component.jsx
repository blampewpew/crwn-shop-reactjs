import DirectoryItem from '../directory-item/directory-item.component';

import { CategoriesContainer } from './category-list.styles.jsx';

const CategoryList = ({ categories }) => {
    return (
        <CategoriesContainer>
        { categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
        ))}
        </CategoriesContainer>
    )

}

export default CategoryList;