import React, {Component} from 'react'

class Package extends Component {
    constructor(props) {
        super(props);
        this.state = { editable: false };
        this.handleEdit = this.handleEdit.bind(this,this.props.pack);
    }
    handleEdit() {
        if(this.state.editable) {
            var id = this.props.pack.id;
            var hotel_name = this.refs.hotel_name.value;
            var description = this.refs.description.value;
            var price = this.refs.price.value;
            var duration = this.refs.duration.value;
            var expiry_date = this.refs.expiry_date.value;
            var data = {
                id: id,
                hotel_name: hotel_name,
                description: description,
                price: price,
                duration: duration,
                expiry_date: expiry_date
            }
            this.props.handleUpdate(data);
        }
        this.setState({ editable: !this.state.editable })
    }
    render() {
        var hotel_name = this.state.editable ? <input type='text' ref='hotel_name' defaultValue={this.props.pack.hotel_name} /> : <span>{this.props.pack.hotel_name}</span>;
        var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.pack.description} />: <span>{this.props.pack.description}</span>;
        var price = this.state.editable ? <input type='text' ref='price' defaultValue={this.props.pack.price} />: <span>{this.props.pack.price}</span>;
        var duration = this.state.editable ? <input type='text' ref='duration' defaultValue={JSON.stringify(this.props.pack.duration)} />: <span>{JSON.stringify(this.props.pack.duration)}</span>;
        var expiry_date = this.state.editable ? <input type='text' ref='expiry_date' defaultValue={this.props.pack.expiry_date} />: <span>{this.props.pack.expiry_date}</span>;
        return (
            <div key={this.props.pack.id}>
                <p className="lead text-muted">
                {hotel_name}
                {description}
                {price}
                {duration}
                {expiry_date}
                </p>>
                <button onClick={this.props.handleDelete} >Delete</button>
                <button onClick={this.handleEdit}>
                    {" "}
                    { this.state.editable ? "Submit" : "Edit" }{" "}
                </button>
            </div>
        );
    }
}
export default Package