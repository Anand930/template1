import React from "react";
import './articles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const Articles = () => {
    return (
        <div className="Articles">
            <div className="Articles-components">
                <Navbar />
                <div className="articles-main">
                    <p className="articles-main-p main-p">
                        Writing on software design, company building, and the aerospace industry.
                    </p>
                    <p className="articles-child-p">
                        All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
                    </p>
                </div>
                <div className="article-discription">
                    <div className="aricle-discription-container">
                        <div className="article-discription-left">
                            <div className="date">
                                September 5, 2022</div>
                        </div>
                        <div className="article-discription-right">

                            <div className="article-discription-heading">Crafting a design system for a multiplanetary future</div>
                            <div className="article-discription-paragraph">Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.</div>
                        </div>

                    </div>
                    <div className="aricle-discription-container">
                        <div className="article-discription-left">
                            <div className="date">September 2, 2022</div>
                        </div>
                        <div className="article-discription-right">

                            <div className="article-discription-heading">Introducing Animaginary: High performance web animations
                            </div>
                            <div className="article-discription-paragraph">When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.</div>
                        </div>

                    </div>
                    <div className="aricle-discription-container">
                        <div className="article-discription-left">
                            <div className="date">July 14, 2022</div>
                        </div>
                        <div className="article-discription-right">

                            <div className="article-discription-heading">Rewriting the cosmOS kernel in Rust
                                <div className="article-discription-paragraph">When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.</div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Articles;