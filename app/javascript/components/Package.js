import React, {Component} from 'react'
import { faEdit, faTrash, faUpdate, faArrowCircleRight, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Package extends Component {
    constructor(props) {
        super(props);
        this.state = { editable: false };
        this.handleEdit = this.handleEdit.bind(this,this.props.pack);
        this.closeEdit = this.closeEdit.bind(this);
    }
    closeEdit() {
        this.setState({ editable: !this.state.editable })
    }
    handleEdit() {
        if(this.state.editable) {
            var id = this.props.pack.id;
            var hotel_name = this.refs.hotel_name.value;
            var description = this.refs.description.value;
            var price = this.refs.price.value;
            var days = this.refs.days.value;
            var nights = this.refs.nights.value;
            var expiry_date = this.refs.expiry_date.value;
            var data = {
                id: id,
                hotel_name: hotel_name,
                description: description,
                price: price,
                duration: { 'days': days, 'nights': nights },
                expiry_date: expiry_date
            }
            this.props.handleUpdate(data);
        }
        this.setState({ editable: !this.state.editable })
    }
    render() {
        var hotel_name, description, price, days, nights, expiry_date;

        if (this.state.editable) {
            hotel_name = <input type='text' ref='hotel_name' defaultValue={this.props.pack.hotel_name} className="form-control" />
            description = <textarea type='text' ref='description' defaultValue={this.props.pack.description} className="form-control" />
            price = <input type='number' ref='price' defaultValue={this.props.pack.price} className="form-control" />
            days = <input type="number" ref="days" defaultValue={this.props.pack.duration['days']} className="form-control" />
            nights = <input type="number" ref="nights" defaultValue={this.props.pack.duration['nights']} className="form-control" />
            expiry_date = <input type='date' ref='expiry_date' defaultValue={new Date(this.props.pack.expiry_date).toISOString().substr(0,10)} className="form-control" />
        } else {
            hotel_name = this.props.pack.hotel_name
            description = this.props.pack.description
            price = this.props.pack.price
            days = this.props.pack.duration['days']
            nights = this.props.pack.duration['nights']
            expiry_date = new Date(this.props.pack.expiry_date).toISOString().substr(0,10)
        }

        return (
            <React.Fragment key={this.props.pack.id}>
                <td className="p-2 lead">{hotel_name}</td>
                <td className="p-2 lead">{description}</td>
                <td className="p-2 lead">{price}</td>
                <td className="p-2 lead d-inline-flex">{days} days {nights} nights</td>
                <td className="p-2 lead">{expiry_date}</td>
                <td className="p-2 lead">
                    { this.state.editable ? <button className="btn btn-sm btn-warning mr-2" onClick={this.closeEdit}>
                        <FontAwesomeIcon icon={faWindowClose} title="Cancel"/></button>  : null }

                    <button onClick={this.props.handleDelete} className="btn btn-danger btn-sm mr-2">
                        <FontAwesomeIcon icon={faTrash} title="Delete" /></button>

                    <button onClick={this.handleEdit} className="btn btn-info btn-sm">
                        {" "}
                        { this.state.editable ? <FontAwesomeIcon icon={faArrowCircleRight} title="Update" />  : <FontAwesomeIcon icon={faEdit} title="Edit" /> }{" "}
                    </button>
                </td>
            </React.Fragment>
        );
    }
}
export default Package