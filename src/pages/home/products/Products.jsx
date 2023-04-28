import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("Data/allProducts.json")
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    return (
        <div className="mt-20">
            <div className="mx-7 ml-3 px-5 mt-7 lg:mt-0 text-center">
                <p className="text-orange-700 font-bold">Popular Products</p>
                <h2 className="md:text-3xl md:font-bold mt-3">Browse Our Products</h2><br />
                <p className="w-3/4 mx-auto mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sunt cupiditate repellat natus vero nemo quos, voluptate, dolorem molestias voluptas consequuntur fuga.</p><br />
            </div>
            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products?.map(product => <SingleProduct
                        key={product.product_id}
                        product={product}
                    ></SingleProduct>)
                }
            </div>
            <div className="text-center">
                <button className="mt-7 text-orange-600 btn border-solid border-2 border-orange-600" >More Products</button>
            </div>
        </div>
    );
};

export default Products;