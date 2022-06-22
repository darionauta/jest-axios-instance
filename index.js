const getProducts = require('./getProducts');

(async function(){
    const products = await getProducts();
    console.log(products);
})();
