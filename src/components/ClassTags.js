import React from 'react';
import { classesArray, splitClassList } from './helpers.js';

const styles = (props) => {
  return ({
    span: {
      background: props.color,
      borderRadius: '2px',
      color: '#fbfbfb',
      padding: '.125rem'
    }
  })
}
const faker = {
  color: 'red'
}

const ClassTags = ({ dndClasses }) => {
  const classes = splitClassList(dndClasses)
  // const classTag = dndClass => {
  //
  // }
  const listOfClasses = classes.map()
  return (
    <ul>
      <li>check</li>
    </ul>
  )
}

export default ClassTags
