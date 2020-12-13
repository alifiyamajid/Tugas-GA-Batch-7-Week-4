import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import '../index.css';


export function HomePages() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const respons = await fetch(`http://btm-rn.herokuapp.com/api/v1/todo`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .catch((err) => console.log(err));
        //console.log(respons)

        if (respons.results) {
            setTodos(respons.results)
        } else {
            console.log("Gagal Ambil Data")
        }
    };
    useEffect(() => {
        fetchTodos()
    }, []);

    const deleteTodo = async (id) => {
        const respons = await fetch(`http://btm-rn.herokuapp.com/api/v1/todo/${id}`, {
            headers: {
                "content-Type": "application/json"
            },
            method: "DELETE"
        })
            .then(res => res.json())
            .catch(err => console.log(err))

        console.log(respons)
        if (respons.success === true) {
            fetchTodos();
        } else {
            console.log("Gagal Menghapus")
        }
    };
    const ask = (t) => {
        confirmAlert({
            title: 'Hapus',
            massage: 'Are You Sure?' + t.title,
            buttons: [
                {
                    label: 'Hapus',
                    onClick: () => deleteTodo(t._id)
                },
                {
                    label: 'Batal',
                    onClick: () => { }
                }
            ]
        });
    };

    return (
        <div>
            <h1>YOUR SCHEDULE</h1>
            <br></br>

            <Link to="/add" className="float">
                <i className="fa fa-plus my-float"></i>
            </Link>
            <br></br>
            <div className="tab-content" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-all"
                    role="tabpanel"
                    aria-labelledby="pills-all-tab">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <table class="table table-striped">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Name of task</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.map((todo, index) => {
                                    return (
                                        <tr key={index}>
                                            {
                                                todo.isComplete ? <th scope="row"><s>{todo.title}</s></th> : <th scope="row">{todo.title}</th>
                                            }

                                            <td>
                                                <Link to={{
                                                    pathname: "/edit",
                                                    state: {
                                                        passedTodo: todo
                                                    }
                                                }}
                                                    type="button" className="btn btn-success m-2">
                                                    <i className="fa fa-edit"></i>
                                                </Link>
                                                <button onClick={() => ask(todo)} type="button" className="btn btn-danger m-2">
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
}