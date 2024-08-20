// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Product,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'product-category'
});
// Categories have many Products
Category.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Category,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'category-product'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Product,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'product-tag'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Tag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'tag-product'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
