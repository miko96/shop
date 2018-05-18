import React from 'react';
import Filter from './Filter';
import Checkbox from './elements/Checkbox';

export default function CheckboxFilter({ filter, filterActions }) {
  const { Options } = filter;

  return (
    <Filter>
      <Checkbox options={Options} />
    </Filter>
  );
}
