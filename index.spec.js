const axiosInstance = require('./axiosInstance');
const getProducts = require('./getProducts');
let mockGet;

beforeEach(() => {
    mockGet = jest.spyOn(axiosInstance, 'get');
});

afterEach(() => {
    jest.clearAllMocks();
});

it('returns list of products', async () => {
    const fakeData = {
        status: 200,
        data: [
            {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            }
        ]
    };
    mockGet.mockImplementation(() => Promise.resolve(fakeData));
    await getProducts();
    expect(mockGet).toHaveBeenCalled();
    expect(mockGet.mock.calls.length).toEqual(1);
    const mockResult = await mockGet.mock.results[0].value;
    expect(mockResult).toStrictEqual(fakeData);
});
