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
  as: ''
});
// Categories have many Products
Category.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Category,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: ''
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Product,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: ''
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Tag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: ''
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
