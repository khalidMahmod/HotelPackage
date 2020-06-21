import React, {Component} from 'react';
import axios from 'axios-on-rails'
import AllPackages from '../components/AllPackages';
import NewPackage from '../components/NewPackage';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { packages: [], createPackage: false };
        this.createNewPackage = this.createNewPackage.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    // GET packages
    componentDidMount() {
        fetch('/api/v1/packages.json')
            .then(response => response.json())
            .then(data => this.setState({ packages: data }));
    }
    // Append to existing packages after creating a new package
    handleSubmit = (data) => {
        this.setState({ packages: [data, ...this.state.packages], createPackage: !this.state.createPackage })
    }
    // DELETE package
    handleDelete(id) {
        var that = this;
        axios.delete(`/api/v1/packages/${id}.json`).then(function(){
            that.removePackage(id); // This removes the package from the list
        })
    }
    // UPDATE package
    handleUpdate(data) {
        var that = this;
        axios.put(`/api/v1/packages/${data.id}.json`, {
            package: data
        }).then(function () {
            that.updateItems(data);
        })
    }
    // Update the package in the packages list
    updateItems(pack) {
        var packages = this.state.packages;
        var index = packages.findIndex(function(c){
            return c.id == pack.id;
        });
        packages[index] = pack;
        this.setState({packages: packages });
    }
    // Removes the package from the packages list
    removePackage(id) {
        var newPackages = this.state.packages.filter((pack) => {
            return pack.id != id;
        });

        this.setState({ packages: newPackages });
    }
    // When NEW PACKAGE button is clicked
    createNewPackage() {
        this.setState({ createPackage: !this.state.createPackage })
    }
    // When CANCEL button is clicked
    handleCancel() {
        this.setState({ createPackage: !this.state.createPackage })
    }
    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <div>
                        <h3 className="float-left lead">
                            { this.state.createPackage ? 'Create New Package' : 'Packages List' }
                        </h3>
                        <div className="float-right">
                            { this.state.createPackage ? null
                                : <button className="btn btn-primary" onClick={this.createNewPackage} >New Package</button> }
                        </div>
                    </div>
                </div>
                { this.state.createPackage ? <NewPackage handleSubmit={this.handleSubmit} handleCancel={this.handleCancel}/>
                : <AllPackages packages={this.state.packages} handleDelete={this.handleDelete}
                             onUpdate={this.handleUpdate} /> }
            </div>
        );
    }
}
export default Body