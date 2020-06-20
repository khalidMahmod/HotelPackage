import React, {Component} from 'react';
import axios from 'axios-on-rails'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NewPackage extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        var hotel_name = this.refs.hotel_name.value;
        var description = this.refs.description.value;
        var days = this.refs.days.value;
        var nights = this.refs.nights.value;
        var price = this.refs.price.value;
        var expiry_date = this.refs.expiry_date.value;

        var data = {
            hotel_name: hotel_name,
            description: description,
            duration: { 'days': days, 'nights': nights },
            price: price,
            expiry_date: expiry_date
        }
        var that = this;

        axios.post('/api/v1/packages.json', {
            package: data
        }).then(function (response) {
            console.log('Data: ' + JSON.stringify(response.data));
            that.props.handleSubmit(response.data);
        })
    }
    handleCancel() {
        this.props.handleCancel();
    }
    render() {
        return (
            <div className="new-package">
                <form onSubmit={this.handleClick}>
                    <div className="form-row">
                        <label htmlFor="hotel-name" className="col-3">Hotel Name:</label>
                        <input type="text" ref="hotel_name" className="form-control col-9"
                               placeholder="Enter Hotel Name" id="hotel-name" required/>
                    </div>
                    <div className="form-row mt-3">
                        <label htmlFor="description" className="col-3">Package Description:</label>
                        <textarea ref="description" className="form-control col-9"
                                  rows="5" id="description" placeholder="Enter a description" required></textarea>
                    </div>
                    <div className="form-row mt-3">
                        <label htmlFor="days" className="col-3">Duration:</label>
                        <div className="col-9">
                            <select className="form-control col-2 d-inline-block" id="days" ref="days" required>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                            <span className="col-2">Days</span>
                            <select className="form-control col-2 d-inline-block" id="nights" ref="nights" required>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                            <span className="col-2">Nights</span>
                        </div>
                    </div>
                    <div className="form-row mt-3">
                        <label htmlFor="price" className="col-3">Price:</label>
                        <input type="number" ref="price" className="form-control col-9"
                               placeholder="Enter Price of Package" id="price" required />
                    </div>

                    <div className="form-row mt-3">
                        <label htmlFor="expiry_date" className="col-3">Expiry Date:</label>
                        <input type="date" className="form-control col-9" ref="expiry_date"
                               id="expiry_date" required />
                            <div className="input-group-addon">
                                <span className="glyphicon glyphicon-th"></span>
                            </div>
                    </div>

                    <button onClick={this.handleCancel} className="btn btn-danger m-2">Cancel</button>
                    <button className="btn btn-info m-2">Submit</button>
                </form>
            </div>
        );
    }
}
export default NewPackage