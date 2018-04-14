import React, {Component} from 'react';

const KEY = {
  UP: 38,
  DOWN: 40,
  ENTER: 13,
  ESC: 27,
  SPACE: 32
};

export function keyNavList(WrappedComponent) {
  class KeyNavList extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
        focusIndex: -1
      };

      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.toggleList = this.toggleList.bind(this);
      this.closeList = this.closeList.bind(this);
    }

    handleKeyDown(e) {
      switch (e.keyCode) {
        case KEY.ENTER:
        case KEY.SPACE:
          if (this.state.isOpen && this.state.focusIndex >= 0) {
            this.props.onChooseOption(
              this.getOptionNameByIndex(this.state.focusIndex)
            );
            this.closeList();
          } else {
            this.toggleList();
          }
        break;
        case KEY.ESC:
          this.closeList();
        break;
        case KEY.UP:
          this.setState(prevState => ({
            focusIndex: this.getPrevIndex(prevState.focusIndex)
          }));
        break;
        case KEY.DOWN:
          if (!this.state.isOpen) return this.toggleList();

          this.setState(prevState => ({
            focusIndex: this.getNextIndex(prevState.focusIndex)
          }));
        break;
      }
    }

    getOptionIdByIndex(index) {
      if (index === -1) return null;
      return `select-option-${index}`;
    }

    getPrevIndex(focusIndex) {
      return Math.max(focusIndex - 1, 0);
    }

    getNextIndex(focusIndex) {
      return Math.min(focusIndex + 1, this.props.options.length - 1);
    }

    getOptionNameByIndex(index) {
      return this.props.options[index].name;
    }

    toggleList() {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
        focusIndex: -1
      }));
    }

    closeList() {
      this.setState({
        isOpen: false,
        focusIndex: -1
      });
    }

    oncChooseOption(name) {
      this.prop.onChooseOption(name);
      this.closeList();
    }


    render() {
      const props = this.props;

      return (
        <WrappedComponent
          isOpen={this.state.isOpen}
          closeList={this.closeList}
          toggleList={this.toggleList}
          onKeyDown={this.handleKeyDown}
          focusIndex={this.state.focusIndex}
          {...props} />
      );
    }
  }

  return KeyNavList;
}