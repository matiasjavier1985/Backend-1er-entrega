class ProductManager {
    constructor() {
      this.products = [];
      this.lastProductId = 0;
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (this.getProductByCode(code)) {
        throw new Error('El código del producto ya existe.');
      }
      const newProduct = {
        id: ++this.lastProductId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProductById(productId) {
      const product = this.products.find(p => p.id === productId);
      if (!product) {
        throw new Error('El producto no existe.');
      }
      return product;
    }
  
    getProductByCode(productCode) {
      return this.products.find(p => p.code === productCode);
    }
  }
  // Crear una instancia de ProductManager
  const productManager = new ProductManager();
  
  // Obtener productos (debe estar vacío)
  console.log(productManager.getProducts()); // []
  
  // Agregar un nuevo producto
  productManager.addProduct(
    'producto prueba',
    'Este es un producto prueba',
    200,
    'Sin imagen',
    'abc123',
    25
  );
  console.log(productManager.getProducts()); // [{ id: 1, title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25 }]
  
  // Agregar un producto con código repetido (debe arrojar un error)
  try {
    productManager.addProduct(
      'producto prueba 2',
      'Este es otro producto prueba',
      150,
      'Sin imagen',
      'abc123',
      10
    );
  } catch (error) {
    console.error(error.message); // "El código del producto ya existe."
  }
  
  // Obtener un producto por id
  console.log(productManager.getProductById(1)); // { id: 1, title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25 }
  
  // Obtener un producto por id que no existe (debe arrojar un error)
  try {
    productManager.getProductById(2);
  } catch (error) {
    console.error(error.message); // "El producto no existe."
  }