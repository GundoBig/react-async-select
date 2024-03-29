// @flow

import React from 'react';
import AsyncSelect from './packages/core/select/src/AsyncSelect';

import { cities } from './packages/core/select/examples/common/data';

// you control how the options are filtered
const filter = (inputValue: string) =>
  cities.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));

// async load function using callback (promises also supported)
const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filter(inputValue));
  }, 1000);
};

const AsyncExample = () => (
  <AsyncSelect
    defaultValue={{value: 'n', label: 'n'}}
    className="react-select"
    classNamePrefix="select"
    loadOptions={loadOptions}
    options={cities}
    placeholder="Choose a City"
  />
);

export default AsyncExample;
