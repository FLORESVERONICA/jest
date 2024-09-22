const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('addProduct', () => {
    it('should add a product', () => {
        addProduct('Product 1', 100);
    const products = getProducts();
 expect(products). toHaveLength(1);
expect(products[0]).toMatchObject({
    name: 'Product 1', price:100});
});
it('should increment the id by 1 each time a product is added', () => {
    addProduct('Product 1', 100);
    addProduct('Product 2', 200);
    const products = getProducts();

 expect(products[0].id).toBe(1);
 expect(products[1].id).toBe(2);
});

      it('should throw an error if name on price is not defined', () => {
        expect(() => 
            addProduct(undefined, 100)).toThrow();
        expect (() => 
            addProduct('Product 1', undefined)).toThrow();
        
        });
        
      it('should throw an error if the product already exist', () => {
        addProduct('product 1', 100);
         expect(() => addProduct('product 1', 100)).toThrow();
      });
    });

    describe('removeProduct', () => {
        it('should remove a product', () => {
      addProduct('product 1', 100);
      removeProduct(1);
      const products = getProducts();

      expect(products).toHaveLength(0);
      });
     it('should throw are an error if the product does not exist', () => {
        expect(() => removeProduct(1)).toThrow();
     });

    });

    describe('getProduct', () => {
        it('should return a product by its id', () => {
            addProduct('Product 1', 100);
            const product = getProduct(1);
            expect(product).toMatchObject({
             name: 'Product 1', price: 100});
            });
        it('should throw an error if the product does not exist', () => {
            expect(() => getProduct(1)).toThrow();
        });
        });
        describe('updateProduct', () => {
            test('should update a product by its id', () => {
                addProduct('Product 1', 100);
                updateProduct(1, 'Updated Product', 150);
                const product = getProduct(1);
                expect(product).toMatchObject({ name: 'Updated Product', price: 150 });
            });
        
            test('should throw an error if the product does not exist', () => {
                expect(() => updateProduct(1, 'Updated Product', 150)).toThrow();
            });
        
            test('should only update the price', () => {
                addProduct('Product 1', 100);
                updateProduct(1, undefined, 150);
                const product = getProduct(1);
                expect(product).toMatchObject({ name: 'Product 1', price: 150 });
            });
        
            test('should only update the name', () => {
                addProduct('Product 1', 100);
                updateProduct(1, 'Updated Product', undefined);
                const product = getProduct(1);
                expect(product).toMatchObject({ name: 'Updated Product', price: 100 });
            });
        });
    