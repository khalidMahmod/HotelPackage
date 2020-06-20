import React, {Component} from 'react'
import Package from '../components/Package'

class AllPackages extends Component {
    constructor(props) {
        super(props);
        this.state = { editable: false };
        this.onUpdate = this.onUpdate.bind(this);
    }
    handleDelete(id) {
        this.props.handleDelete(id);
    }
    onUpdate(pack) {
        this.props.onUpdate(pack);
    }
    render = () => {
        var packages = this.props.packages.map((pack, index) => {
            return (
                <tr key={index}>
                    <Package pack={pack}
                          handleDelete={this.handleDelete.bind(this, pack.id)}
                          handleUpdate={this.onUpdate} />
                </tr>
            );
        });
        return (
            <div>
                <table className="table-light table-striped table-bordered table-responsive">
                    <thead className="bg-dark">
                        <tr className="text-light">
                            <th width="15%" className="p-2 lead">Hotel Name</th>
                            <th width="20%" className="p-2 lead">Package Description</th>
                            <th width="10%" className="p-2 lead">Price</th>
                            <th width="20%" className="p-2 lead">Duration</th>
                            <th width="20%" className="p-2 lead">Expiry Date</th>
                            <th width="15%" className="p-2 lead">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {packages}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default AllPackages