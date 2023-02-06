import React from "react";

function Form(props) {
    return (
        <div>
            {props.article ? (
                <div className="mb-3">

                    <label htmlForm="title" className="form-label">Title</label>
                    <input type="text" className="form-control" placeholder="Please Enter Title" />
                    
                    <label htmlForm="body" className="form-label">Description</label>
                    <textarea type="text" className="form-control" placeholder="Please Enter Description" />
                </div>
            ) : null}
        </div>
    )
}

export default Form