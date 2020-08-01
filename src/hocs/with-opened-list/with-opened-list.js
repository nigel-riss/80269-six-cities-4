import React, {PureComponent} from 'react';


const withOpenedList = (Component) => {
  class WithOpenedList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpened: false,
      };

      this._handleSortClick = this._handleSortClick.bind(this);
    }

    _handleSortClick() {
      this.setState((state) => ({
        isOpened: !state.isOpened,
      }));
    }

    render() {
      const {isOpened} = this.state;

      return (
        <Component
          {...this.props}
          isOpened={isOpened}
          onListClick={this._handleSortClick}
        />
      );
    }
  }

  return WithOpenedList;
};


export default withOpenedList;
