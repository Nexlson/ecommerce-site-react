import React from 'react'
import MenuItem from '../menu-items/menu-items.components';
import './directory.styles.scss'
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../reduxCodes/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => ({
  render(){
      return(
          <div className='directory-menu'>
              {sections.map(({id, ...others}) => (<MenuItem key={id} {...others}/>))}
          </div>
      )
  }
})

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps) (Directory)