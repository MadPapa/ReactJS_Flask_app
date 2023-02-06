import React from "react";
import { useState } from "react";
import APIService from "./APIService";

function Form(props) {

    const [title, setTitle] = useState(props.article.title)
    const [body, setBody] = useState(props.article.body)
    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, { title, body })
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }


    return (
        <div>
            {props.article ? (
                <div className="mb-3">

                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please Enter Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="body" className="form-label">Description</label>
                    <textarea
                        row="5"
                        type="text"
                        className="form-control"
                        placeholder="Please Enter Description"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <button
                        className="btn btn-success mt-3"
                        onClick={updateArticle}
                    >Update</button>
                </div>
            ) : null}
        </div>
    )
}

export default Form