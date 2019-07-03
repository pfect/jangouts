/**
 * Copyright (c) [2015-2019] SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar />, div);
  ReactDOM.unmountComponentAtNode(div);
});