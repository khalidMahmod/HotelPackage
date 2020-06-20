import React, {Component} from 'react'
import Package from '../components/Package'

class AllPackages extends Component {
    handleDelete(id) {
        this.props.handleDelete(id);
    }
    onUpdate(pack) {
        this.props.onUpdate(pack);
    }
    render() {
        let packages = this.props.packages.map(pack => {
            return (
                <div key={pack.id}>
                    <Package pack={pack}
                          handleDelete={this.handleDelete.bind(this, pack.id)}
                          handleUpdate={this.onUpdate} />
                </div>
            );
        });
        return (
            <div>
                {packages}
            </div>
        );
    }
}
export default AllPackages