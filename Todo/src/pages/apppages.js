import React, { useState } from "react";
import { Link } from "react-router-dom";


export function AppPages() {
    const [title, setTitle] = useState("")

    const titleChangeListener = (e) => {
        setTitle(e.target.value);
    }

    const createTodo = async () => {
        const obj = {
            title: title
        }
        const Respons = await fetch("https://btm-rn.herokuapp.com/api/v1/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .catch(err => console.log(err))

        console.log(Respons)
        if (Respons.results) {
            window.location.href = "/"
        } else {
            console.log("Failed when create")
        }
    }


    return (
        <div>
            <nav className="navbar navbar-light bg-info">
                <Link className="navbar-brand" to="/">
                    <i className="fa fa-arrow-left content_white"></i>
                </Link>
            </nav>
            <div className="row p-5">
                <div className="col-md-12" >
                    <input required onChange={e => titleChangeListener(e)} type="text" className="form-control" id="title" placeholder="Enter title" />
                    <button className="mt-4" onClick={() => createTodo()} type="submit" className="btn btn-success btn-block">Save</button>
                </div>
            </div>

        </div>
    );
}