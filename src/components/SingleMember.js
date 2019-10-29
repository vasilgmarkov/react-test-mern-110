import React from "react";

// function SingleMember(props) {
//   console.log(props);

//   return <p className="name">{props.member.name}</p>;
// }

class SingleMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  addMember = () => {
    this.props.addMember({ name: "Lluisito" });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <p className="name">{this.props.member.name}</p>
        <button onClick={this.addMember}>Add new Member</button>
      </div>
    );
  }
}

export default SingleMember;
