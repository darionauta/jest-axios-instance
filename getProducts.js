const axiosInstance = require('./axiosInstance');

const getProducts = async function(){
    try {
        let response = await axiosInstance.get('/products');
        return response.data;
    } catch (error){
        console.error(error);
    }
}

module.exports = getProducts;
