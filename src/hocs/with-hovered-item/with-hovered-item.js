import React, {PureComponent} from 'react';


const withHoveredItem = (Component) => {
  class WithHoveredItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        hoveredItem: null,
      };

      this._handleItemMouseEnter = this._handleItemMouseEnter.bind(this);
    }

    _handleItemMouseEnter(item) {
      this.setState({
        hoveredItem: item,
      });
    }

    render() {
      const {hoveredItem} = this.state;

      return (
        <Component
          {...this.props}
          hoveredItem={hoveredItem}
          onItemMouseEnter={this._handleItemMouseEnter}
        />
      );
    }
  }


  return WithHoveredItem;
};


export default withHoveredItem;
