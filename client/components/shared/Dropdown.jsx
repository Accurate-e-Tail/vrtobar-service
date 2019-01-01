import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick, false);
  }

  handleOutsideClick(e) {
    if (this.container.contains(e.target)) {
      return;
    }
    // this.props.closeDropdown();
  }

  render() {
    return (
      <div className="v_dropdown" ref={node => this.container = node}>
      </div>
    );
  }
}

export default Dropdown;
