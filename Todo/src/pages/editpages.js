import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

export function EditPages() {
    let loc = useLocation()
    const [todo, setTodo] = useState(loc.state.passedTodo)

    const titleChangeListener = (e) => {
        setTodo({ ...todo, title: e.target.value })
    }

    const updateTodo = async (shouldMarkAsCompleted) => {
        const obj = { ...todo }
        if (shouldMarkAsCompleted != null) {
            obj.isComplete = shouldMarkAsCompleted
        }

        const response = await fetch(`https://btm-rn.herokuapp.com/api/v1/todo/${todo._id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .catch(err => console.log(err))

        console.log(response)

        if (response.success === true) {
            window.location.href = "/"
        } else {
            console.log("failed update")
        }
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-primary">
                <Link className="navbar-brand" to="/">
                    <i className="fa fa-arrow-left content_white"></i>
                </Link>
            </nav>
            <div className="row p-5">
                <div className="col-md-12" >
                    <input value={todo.title} required onChange={e => titleChangeListener(e)} type="text" className="form-control" id="title" placeholder="Enter title" />
                </div>

                <div className="col-md-12 mt-4">
                    <button className="mt-4" onClick={() => updateTodo(true)} type="submit" className="btn btn-success btn-block">Mark as completed</button>
                </div>
                <div className="col-md-12 mt-4">
                    <button className="mt-4" onClick={() => updateTodo(null)} type="submit" className="btn btn-primary btn-block">Update</button>
                </div>
            </div>

        </div>
    )
}