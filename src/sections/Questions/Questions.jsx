import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions section-m'>
            <div className='container'>
                <h2 className='questions-heading'>Frequently Asked Questions</h2>
                <div className="row">
                    <div className='questions-item col-md-6'>
                        <h4 className='questions-item-haeding'>
                            <span className='point'>~</span> Is Foodera Bread really baked fresh each day?
                        </h4>
                        <p className='questions-item-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                    </div>
                    <div className='questions-item col-md-6'>
                        <h4 className='questions-item-haeding'>
                            <span className='point'>~</span> Do you bake breads containing animal fats or products?
                        </h4>
                        <p className='questions-item-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className='questions-item col-md-6'>
                        <h4 className='questions-item-haeding'>
                            <span className='point'>~</span> Can I order your products online?
                        </h4>
                        <p className='questions-item-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                    </div>
                    <div className='questions-item col-md-6'>
                        <h4 className='questions-item-haeding'>
                            <span className='point'>~</span>When are you opening a shop near me?
                        </h4>
                        <p className='questions-item-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;
