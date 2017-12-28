import React from 'react';
import renderer from 'react-test-renderer';
import FormIconInput from '../FormIconInput.component';

describe('FormComponent: FormIconInput component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FormIconInput iconName='success'/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
