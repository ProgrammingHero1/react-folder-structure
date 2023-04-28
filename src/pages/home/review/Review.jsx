import React from 'react';
import SingleReview from './SingleReview/SingleReview';

const Review = () => {
    return (
        <div className="my-20">
            <div className="mx-7 ml-3 px-5 mt-7 lg:mt-0 text-center">
                <p className="text-orange-700 font-bold">Testimonial</p>
                <h2 className="md:text-3xl md:font-bold mt-3">What Customer Says</h2><br />
                <p className="w-3/4 mx-auto mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sunt cupiditate repellat natus vero nemo quos, voluptate, dolorem molestias voluptas consequuntur fuga.</p><br />
            </div>
            <SingleReview></SingleReview>
        </div>
    );
};

export default Review;