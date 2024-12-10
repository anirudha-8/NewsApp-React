import React from 'react'

export default function NewsItem(props) {
    return (
        <>
            <div className="card mb-3 my-3">
                {/* image */}
                <img src={props.imgurl ?? "https://tse1.mm.bing.net/th?id=OIP.EV4CueKMVtIGwKE1h18H6QHaHa&pid=Api&P=0&h=180"} className="card-img-top" alt="..." />

                {/* badge */}
                <span style={{ display: 'flex', position: 'absolute', right: '0', top: '0' }} className="badge rounded-pill text-bg-warning">{props.name}</span>

                {/* full card */}
                <div className="card-body" style={{ backgroundColor: `${props.mode === 'light' ? 'rgb(220,220,220)' : 'rgba(48,48,53,1)'}`, color: `${props.mode === 'light' ? 'black' : 'white'}` }}>

                    {/* title */}
                    <h5 className="card-title">{props.title}</h5>

                    {/* descrition */}
                    <p className="card-text">{props.description ?? "Not Available"}</p>

                    {/* author-time */}
                    <p className="card-text"><small className={`text-body-${props.mode}`}>by {props.author} at {new Date(props.time).toUTCString()}</small></p>
                    <a target={'blank'} className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} btn-sm`} href={props.url} role="button">Read More...</a>
                </div>
            </div>
        </>
    )
}
