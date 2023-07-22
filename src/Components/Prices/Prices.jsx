import React from 'react'
import './Prices.css'
const Prices = () => {
    return (
        <>
            <div className="price-section">
                <div className='prices'>
                    <div className="head">
                        <h2>Basic</h2> 
                        <h2>$35</h2>
                    </div>
                    <div className="body">
                        <ul className='item-list'>
                            <li>2 Veg Burger</li>
                            <li>3 Veg Sandwitch</li>
                            <li>1 Veg Pizza</li>
                        </ul>
                        <button id="buyNow">Buy Now</button>
                    </div>
                </div>
                <div className='prices'>
                <div className="head">
                        <h2>Standard </h2>
                        <h2> $50</h2>
                    </div>
                    <div className="body">
                        <ul className='item-list'>
                            <li>2 Veg Burger</li>
                            <li>3 Veg Sandwitch</li>
                            <li>1 Veg Pizza</li>
                        </ul>
                        <button id="buyNow">Buy Now</button>
                    </div>
                    
                </div>
                <div className='prices'>
                <div className="head">
                        <h2>Premium </h2>
                        <h2> $45</h2>
                    </div>
                    <div className="body">
                        <ul>
                            <li>2 Veg Burger</li>
                            <li>3 Veg Sandwitch</li>
                            <li>1 Veg Pizza</li>
                        </ul>
                        <button id="buyNow">Buy Now</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Prices