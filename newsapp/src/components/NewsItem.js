import React from 'react'

export default function NewsItem(props) {
    return (
        <>
            <div className="card mb-3 my-3">
                <img src={props.imgurl} className="card-img-top" alt="..." />
                <span style={{ display: 'flex', position: 'absolute', right: '0', top: '0' }} className="badge rounded-pill text-bg-warning">{props.name}</span>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description ?? "Not Availabel"}</p>
                    <p className="card-text"><small className="text-body-secondary">by {props.author} at {new Date(props.time).toUTCString()}</small></p>
                    <a target={'blank'} className="btn btn-primary btn-sm" href={props.url} role="button">Read More...</a>
                </div>
            </div>
        </>
    )
}
