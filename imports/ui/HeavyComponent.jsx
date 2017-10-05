import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Alert from 'react-bootstrap/lib/Alert'
import Editor from 'ory-editor-core';
import slate from 'ory-editor-plugins-slate';
import spacer from 'ory-editor-plugins-spacer';

console.log("HeavyComponent called");

export default class HeavyComponent extends Component {
  render() {
    return <div>
      <Button />
    </div>
  }
}
