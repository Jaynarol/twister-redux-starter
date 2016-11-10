import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {register} from '../actions/auth'
import {push as redirect} from 'redux-router'

class RegisterForm extends Component {

    constructor(props){
        super(props)
        this.submitRegister = this.submitRegister.bind(this)
    }

    componentWillMount() {
        if (this.props.token) {
            this.props.redirect('/')
        }
    }

    componentWillUpdate(nextProps) {
        if (nextProps.token) {
            this.props.redirect('/')
        }
    }

    submitRegister(values) {
        this.props.register(values.username, values.name, values.email, values.password)
    }

    render(){

        return (
            <div className="signup-form">
                <div className="logo text-center">Sign up</div>
                <form onSubmit={this.props.handleSubmit(this.submitRegister)} >
                    <div className="form-group">
                        <Field name="username" component="input" type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <Field name="name" component="input" type="text" className="form-control" placeholder="Firstname" />
                    </div>
                    <div className="form-group">
                        <Field name="email" component="input" type="email" className="form-control" placeholder="youremail@email.com" />
                    </div>
                    <div className="form-group">
                        <Field name="password" component="input" type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group text-right">
                        <button className="btn btn-primary" type="submit" >Sign up</button>
                    </div>
                </form>
            </div>
        )

    }
}

const RegisterReduxForm = reduxForm({
    form: 'register'
})(RegisterForm)

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, {register, redirect})(RegisterReduxForm)