import React, {Component} from 'react'
import { createBook } from '../actions/book.actions'
import { connect } from 'react-redux'
import './CreateBook.css'

class CreateBook extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            id: 0,
            title: '',
            author: '',
            year: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state)
    }

    handleValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className="create-book">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="Enter Title"
                            onChange={this.handleValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                                type="text"
                                className="form-control"
                                name="author"
                                placeholder="Enter Author"
                                onChange={this.handleValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                                type="text"
                                className="form-control"
                                name="year"
                                placeholder="Enter Year Published"
                                onChange={this.handleValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                        <button type="button" className="btn btn-default">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (book) => {
            dispatch(createBook(book));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);