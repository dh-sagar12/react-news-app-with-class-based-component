import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { useEffect } from 'react';

// import RecipeReviewCard from './NewsItem'

const News = (props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    useEffect(() => {
            updateNews()
    }, [])


    let updateNews = async () => {
        const url = (`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${ page}`)
        props.setProgress(10)
        setLoading(true)
        props.setProgress(30)
        let data = await fetch(url)
        props.setProgress(50)
        let parsedData = await data.json()
        console.log(parsedData);
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
        props.setProgress(0)

    }


    let fetchMoreData = async () => {
        console.log(page);
        console.log(articles.length);
        const url = (`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page+1}`)
        console.log(url);
        let data = await fetch(url)
        setPage(page+1)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

    let scrollTop = ()=>{
        document.documentElement.scrollTop = 0
    }
        return (
            <>
                <div className=' my-4 ' >
                    <h2 className=' border-bottom border-2 mb-4 text-center' style={{marginTop: '10rem'}}>NEWS MONKEE- TOP {props.category.toUpperCase()} HEADLINES</h2>
                    {loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner />}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>YOU'RE DONE <span onClick={scrollTop} style= {{color: 'blue', cursor: 'pointer'}} >BACK TO TOP</span></b>
                            </p>
                        }
                    >
                        <div className="container-fluid">
                            <div className="row justify-content-center" >
                                {articles.map((elem, index) => {
                                    return <div className="col-sm-6 col-md-4 col-xl-3  mb-3 mx-3" key={index} >
                                        <NewsItem title={elem.title} description={elem.description} imgUrl={!elem.urlToImage ? 'https://i.imgur.com/pnWiGV5.jpg' : elem.urlToImage} newsLink={elem.url} publishedDate={elem.publishedAt} source={elem.source.name} />
                                    </div>
                                })}

                            </div>
                        </div>


                    </InfiniteScroll>
                </div>
            </>

        )
}

News.defaultProps = {
    country: 'in',
    pageSize: 21,
    category: 'general'

}

News.protoTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
