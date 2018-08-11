import React, {Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Redirect} from 'react-router-dom';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                localStorage.setItem('token', '1ds');
                this.setState({isLoggedIn: true})
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        if(this.state.isLoggedIn) {
            return <Redirect to='/'/>
        }
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


export class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row">
                <div id="loginForm" className="container">
                    <div className="card text-center">
                        <div className="card-title">
                            <h1><i className="fas fa-user-lock"></i> Login</h1>
                        <hr/>
                        </div>
                        <div className="card-body">
                            <WrappedNormalLoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}