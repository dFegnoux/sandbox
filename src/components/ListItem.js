import React, { Component } from 'react'
import PropTypes from 'prop-types'


const propTypes = {
  removeItem: PropTypes.func,
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired
}

const defaultProps = {
  removeItem: () => {},
}

class ListItem extends Component {
  render() {
    const { removeItem, index, item } = this.props
    return (
      <div className="item-list"><span className="btn-remove" onClick={() => {removeItem(index)}}>X</span>{item}</div>
    )
  }
}

ListItem.proptypes = propTypes
ListItem.defaultProps = defaultProps

export default ListItem
