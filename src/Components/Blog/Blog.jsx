import React from 'react'
import './Blog.css'
const Blog = () => {
    return (
        <>
            <div className="blog-section">
                <div className="blog-heading">
                    <h2>BLOG</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>Eligendi maxime sunt voluptatum id magnam.</p>
                </div>
                <div className="blog-content">
                    <div className="blog-box">
                    <img src="indian food.jpg"  style={{height:'100%' , width:'100%' , }} />
                    </div>
                    <div className="blog-box btns">
                        <h5>Lorem ipsum dolor sit, <br /> amet consectetur adipisicing.</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur cumque iste iure est dignissimos dolorum.</p>
                        <button id="readMore">Read More</button>
                    </div>
                    <div className="blog-box">
                    <img src="japanese.jpg"  style={{height:'100%' , width:'100%' , }} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Blog