import React, {Component} from 'react';

class NewPackage extends Component {
    handleClick() {
        var hotel_name = this.refs.hotel_name.value;
        var description = this.refs.description.value;
        $.ajax({
            url: "/api/v1/packages",
            type: "POST",
            data: { pack: { hotel_name: hotel_name, description: description } },
            success: pack => {
                this.props.handleSubmit(pack);
            }
        });
    }
    render() {
        return (
            <div>
                <input ref="hotel_name" placeholder="Enter the name of the item" />
                <input ref="description" placeholder="Enter a description" />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}
export default NewPackage