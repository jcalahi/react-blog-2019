import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.id);
  }
  render() {
    const user = this.props.users.find(user => user.id === this.props.id);

    if (!user) return null;

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.id)
  };
};
export default connect(mapStateToProps, { fetchUser })(UserHeader);
