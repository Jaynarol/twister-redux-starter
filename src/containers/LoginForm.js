import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {login} from "../actions/auth";
import {connect} from "react-redux/";

const LoginInput = (props) => (
    <div className="form-group">
        <input {...props} />
    </div>
)

const LoginForm = (props) => {

    const submitLogin = (values) => {
        props.login(values.username, values.password)
    }

    return (
        <div className="login-form">
            <form onSubmit={props.handleSubmit(submitLogin)}>
                <div className="login-label">
                    Log in with your username
                </div>
                <Field name="username" component={LoginInput} type="text" className="form-control"
                       placeholder="Username"/>
                <Field name="password" component={LoginInput} type="password" className="form-control"
                       placeholder="Password"/>
                <div className="form-group text-right">
                    <button className="btn btn-default">Log in</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const mapDispatchToProps = (dispatch) =>({
    login: (username, password) => dispatch(login(username, password))
})

export default connect(null, mapDispatchToProps)(LoginReduxForm)