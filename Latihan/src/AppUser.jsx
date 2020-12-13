import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AppUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
        };
    }
    componentDidMount() {
        axios.get('https://btm-rn.herokuapp.com/api/v1/users/')
            .then(res => {
                this.setState({
                    persons: res.data.results,
                });

            });
    }

    render() {
        let userData = this.state.persons.map((person, index) => {
            return (
                <tr key={index} className="tr">
                    <th scope="row">{person._id}</th>
                    <td>{person.name}</td>
                    <td>{person.age ? person.age : "-"}</td>
                </tr>
            );
        });

        return (
            <div>
                <h1 className="latihan">MEMASUKAN AXIOS</h1>
                <Table className="table">
                    <thead>
                        <tr className="latihan">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData}
                    </tbody>
                </Table>
            </div>
        )
    }
}