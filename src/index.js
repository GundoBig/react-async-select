/**
  This CodeSandbox has been automatically generated from the contents of https://bitbucket.org/atlassian/atlaskit-mk-2/raw/HEAD/packages/core/select/examples/06-async-select-with-callback.js.

  This generator does not follow relative imports beyond those that reference the
  module root, and as such, other relative imports may fail to load.

  You can look up the relative imports from https://bitbucket.org/atlassian/atlaskit-mk-2

  If this fails in any other way, contact Ben Conolly (https://bitbucket.org/bconolly)
*/
import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import Example from './example';
import Modal from '@atlaskit/modal-dialog';
import Button from '@atlaskit/button';

ReactDOM.render(
  <Modal heading={'My Header'} actions={[<Button>Hi</Button>]}>
    <Example />
  </Modal>,
  document.getElementById('root')
);