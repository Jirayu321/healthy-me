import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { authSignup } from "../store/actions/auth";

class RegistrationForm extends React.Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: "",
    address: "",
    tel: "",
    sex: "",
    weight: "",
    age: "",
    height: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password1, password2,address,tel,sex,weight,age,height } = this.state;
    this.props.signup(username, email, password1, password2,address,tel,sex,weight,age,height );
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, email, password1, password2,address,tel,sex,weight,age,height  } = this.state;
    const { error, loading, token } = this.props;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            ลงทะเบียน
          </Header>
          {error && <p>{this.props.error.message}</p>}

          <React.Fragment>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  onChange={this.handleChange}
                  value={username}
                  name="username"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="ชื่อ"
                />
                <Form.Input
                  onChange={this.handleChange}
                  value={email}
                  name="email"
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="อีเมล์"
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={password1}
                  name="password1"
                  icon="lock"
                  iconPosition="left"
                  placeholder="รหัสผ่าน"
                  type="password"
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={password2}
                  name="password2"
                  icon="lock"
                  iconPosition="left"
                  placeholder="ยืนยันรหัสผ่าน"
                  type="password"
                />
                 <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={address}
                  name="address"
                  icon="user"
                  iconPosition="left"
                  placeholder="ที่อยู่"
                  
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={tel}
                  name="tel"
                  icon="user"
                  iconPosition="left"
                  placeholder="เบอร์โทร"
                  
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={sex}
                  name="sex"
                  icon="user"
                  iconPosition="left"
                  placeholder="เพศ"
                  
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={weight}
                  name="weight"
                  icon="user"
                  iconPosition="left"
                  placeholder="น้ำหนัก"
                  
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={age}
                  name="age"
                  icon="user"
                  iconPosition="left"
                  placeholder="อายุ"
                  
                />
                <Form.Input
                  onChange={this.handleChange}
                  fluid
                  value={height}
                  name="height"
                  icon="user"
                  iconPosition="left"
                  placeholder="ส่วนสูง"
                  
                />
                <Button
                  color="teal"
                  fluid
                  size="large"
                  loading={loading}
                  disabled={loading}
                >
                  ลงทะเบียน
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have an account? <NavLink to="/login">Login</NavLink>
            </Message>
          </React.Fragment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, email, password1, password2,address,tel,sex,weight,age,height) =>
      dispatch(authSignup(username, email, password1, password2,address,tel,sex,weight,age,height))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
