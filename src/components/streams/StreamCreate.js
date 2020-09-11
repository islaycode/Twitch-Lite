import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
export class StreamCreate extends Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }
    render() {
        return (
            <>
            <h1 className="ui header">Create Stream</h1>
            <StreamForm onSubmit={this.onSubmit}/>
            </>
        )
    }
}

export default connect(null,{createStream})(StreamCreate);