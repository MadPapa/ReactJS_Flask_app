import React from "react";
import { useState } from "react";

function Form(props) {

    const [title, setTitle] = useState(props.article.title)
    const [body, setBody] = useState(props.article.body)

    return (
        <div>
            {props.article ? (
                <div className="mb-3">

                    <label htmlForm="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Please Enter Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlForm="body" className="form-label">Description</label>
                    <textarea
                        row="5"
                        type="text"
                        className="form-control"
                        placeholder="Please Enter Description"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
            ) : null}
        </div>
    )
}

export default Form