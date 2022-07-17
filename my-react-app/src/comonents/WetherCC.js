import React, { Component } from "react";

class WetherCC extends Component {
  // rcc
  render() {
    return (
      <div>
        bugün hava <span style={this.props.style}>{this.props.status}</span>
      </div>
    );
  }
}
WetherCC.defaultProps = {
  status: " parçalı bulutlu",
  style: { backgroundColor: "red", color: "white" },
};
export default WetherCC;
