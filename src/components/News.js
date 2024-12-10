import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
export default function News(props) {
    const [page, setpage] = useState(1);
    const [loading, setloading] = useState(true);
    const [totalresult, settotalresult] = useState(0);
    const [article, setarticle] = useState([]);
    const [fetchError, setFetchError] = useState(false);

    const capital = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // destructure props
    const { mode, country, pageSize, category, apiKey, setprogress } = props;

    //all in one function
    async function newsFun() {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${1}&pageSize=${pageSize}&apiKey=${apiKey}`;
            let response = await fetch(url);
            let data = await response.json();
            setprogress(0);
            if (data.status === "error") {
                setFetchError(true);
                return;
            }
            setprogress(50);
            setarticle(data.articles);
            settotalresult(data.totalResults);
            setloading(false);
            setprogress(100);
            document.title = `SNews-${capital(category)}`;

            console.log("fetcherror", fetchError)
        } catch (error) {
            console.log(error);
            setFetchError(true);
        }

    }

    //called when comoonent load
    useEffect(() => {
        newsFun();
        // eslint-disable-next-line
    }, [category]);


    const fetchData = async () => {
        try {
            const nextpage = page + 1;
            setpage(nextpage);
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${nextpage}&pageSize=${pageSize}&apiKey=${apiKey}`;
            let response = await fetch(url);
            let data = await response.json();

            if (data.status === "error") {
                setFetchError(true);
                return;
            }
            setarticle(article.concat(data.articles));
            settotalresult(data.totalResults);
        } catch (error) {
            console.log(error);
            setFetchError(true);
        }
    }

    //if error
    if (fetchError) {
        return (
            <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <h3> There is issue with Server... <br /> please try after some time!</h3>
                <div className='text-center'><Loader /></div>
            </div>
        );
    }
    //if not error
    else {
        return (
            <>
                <div className="container">
                    {/* top */}
                    <div className="text-center" style={{ marginTop: '55px' }}>
                        <h1>S-News - Top {category} News</h1>
                    </div>
                    {/* loading */}
                    {loading ?? <div className='text-center'><Loader /></div>}
                    {/* scroll effect */}
                    <InfiniteScroll
                        dataLength={article?.length || 0}
                        next={fetchData}
                        hasMore={article?.length < totalresult}
                        loader={loading && <div className='text-center'><Loader /></div>}
                        endMessage={
                            <p className='text-center'>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        <div className="container">
                            <div className="row my-3">
                                {
                                    // map through article=[]
                                    article?.length > 0 && article.map((e) => {
                                        return <div className="col-md-4" key={`${e.url}-${e.publishedAt}-${e.title}`}>
                                            <NewsItem title={e.title} description={e.description} name={e.source.name} author={e.author} time={e.publishedAt} url={e.url} imgurl={e.urlToImage} mode={mode} />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
    }
}
