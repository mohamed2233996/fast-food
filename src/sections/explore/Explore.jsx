import React from 'react';
import './Explore.css'
import prodectimg1 from '../../assets/prodect1.jpg'
import prodectimg2 from '../../assets/prodect2.jpg'
import prodectimg3 from '../../assets/prodect3.png'
import PopupProdect from '../../components/popupProdect';

const Explore = () => {
    return (
        <div className='Explore section-m' id='foods'>
            <div className='container'>
                <h1 className='explore-heading'>Explore Our Foods</h1>
                <p className='explore-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                <div className="row products">
                    <div className="col-md-4 product">
                        <img src={prodectimg1} alt="" />
                        <h3 className='products-title'>Rainbow Vegetable Sandwich</h3>
                        <p className='products-text'>Time: <span className='time'>15 - 20 </span> Minutes | Serves: <span className='serves'>1</span></p>
                        <div className='pries'>
                            <span className='price-new'>$9.20</span>
                            <del className='price-old'>$12.20</del>
                        </div>
                        <PopupProdect />
                    </div>
                    <div className="col-md-4 product">
                        <img src={prodectimg2} alt="" />
                        <h3 className='products-title'>Vegetarian Burger</h3>
                        <p className='products-text'>Time: <span className='time'>30 - 45 </span> Minutes | Serves: <span className='serves'>1</span></p>
                        <div className='pries'>
                            <span className='price-new'>$12.20</span>
                            <del className='price-old'>$18.20</del>
                        </div>
                        <PopupProdect />
                    </div>
                    <div className="col-md-4 product">
                        <img src={prodectimg3} alt="" />
                        <h3 className='products-title'>Raspberry Stuffed French Toast</h3>
                        <p className='products-text'>Time: <span className='time'>20 - 25 </span> Minutes | Serves: <span className='serves'>1</span></p>
                        <div className='pries'>
                            <span className='price-new'>$15.60</span>
                            <del className='price-old'>$20.20</del>
                        </div>
                        <PopupProdect />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
