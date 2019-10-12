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

    handleReset(e) {
        e.preventDefault();
        this.setState({
            title:'',
            author:'',
            year:''
        })
    }

    componentWillMount() {
        const props = this.props;

        if (props.location && props.location.state){
            const book =  props.location.state.book;

            this.setState({
                id: book.id,
                title: book.title,
                author: book.author,
                year: book.year
            })
        }
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
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                                type="text"
                                className="form-control"
                                name="author"
                                placeholder="Enter Author"
                                onChange={this.handleValueChange.bind(this)}
                                value={this.state.author}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                                type="text"
                                className="form-control"
                                name="year"
                                placeholder="Enter Year Published"
                                onChange={this.handleValueChange.bind(this)}
                                value={this.state.year}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                        <button type="button" className="btn btn-default" onClick={this.handleReset.bind(this)}>
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



export default connect(null, mapDispatchToProps)(CreateBook);