import React, {Component} from 'react';
import axios from 'axios-on-rails'
import AllPackages from '../components/AllPackages';
import NewPackage from '../components/NewPackage';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { packages: [], createPackage: false };
        this.createNewPackage = this.createNewPackage.bind(this);
    }
    componentDidMount() {
        fetch('/api/v1/packages.json')
            .then(response => response.json())
            .then(data => this.setState({ packages: data }));
    }
    handleSubmit(data) {
        var newState = this.state.packages.concat(data);
        this.setState({ packages: newState })
    }
    handleDelete(id) {
        axios.delete(`/api/v1/packages/${id}`).then(function(){
            this.removePackage(id);
        })
    }
    handleUpdate(data) {
        axios.put(`/api/v1/packages/${data.id}`, {
            data: { pack: data }
        }).then(function () {
            this.updateItems(data);
        })
    }
    updateItems(pack) {
        var packages = this.state.packages.filter((i) => { return i.id != pack.id });
        packages.push(pack);

        this.setState({packages: packages });
    }
    removePackage(id) {
        var newPackages = this.state.packages.filter((pack) => {
            return pack.id != id;
        });

        this.setState({ packages: newPackages });
    }
    createNewPackage() {
        this.setState({ createPackage: !this.state.createPackage })
    }
    render() {
        return (
            <div className="container">
                { this.state.createPackage ? <NewPackage handleSubmit={this.handleSubmit} />
                    : <button className="btn btn-primary" onClick={this.createNewPackage}>New Package</button> }
                <AllPackages packages={this.state.packages} handleDelete={this.handleDelete}
                             onUpdate={this.handleUpdate} />
            </div>
        );
    }
}
export default Body