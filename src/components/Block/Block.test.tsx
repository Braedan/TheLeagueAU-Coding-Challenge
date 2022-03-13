import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Block from './';

/**
 * Block Testing
 * Please Complete these tests
 */

/**
 * Hash is set on load
 * We need to check that when component is rendered,
 * onHash is called and the hash change is reflected in the component
 */
it('Hash is set on load', () => {
  //Expecting onHash to run on load
  //mock function to set hash var for testing
  let hashProp = '';
  const testFn = jest.fn((_block, hash) => (hashProp = hash));

  const {} = render(
    <Block block={1} hash={''} onDelete={() => {}} onHash={testFn} />
  );

  //Check fn is called and is not equal initialization value ('')
  expect(testFn).toHaveBeenCalled();
  expect(hashProp.length === 64); //Should be 64 hexadecimal digits
});

/**
 * Shows not valid text
 * On render, the text 'Not Valid' should be in the document as the hash is not valid
 */
it('Shows not valid text', () => {
  const { getByText } = render(
    <Block block={1} hash={''} onDelete={() => {}} onHash={() => {}} />
  );
  expect(getByText('Not Valid')).toBeInTheDocument();
});

/**
 * Delete is called correctly
 * We need to make sure that when clicking on delete, the delete function is called
 */
it('Delete is called correctly', () => {
  //mock function to test if called
  const testFn = jest.fn();
  const { getByText } = render(
    <Block block={1} hash={''} onDelete={testFn} onHash={() => {}} />
  );
  //Click delete btn
  userEvent.click(getByText('Delete'));
  expect(testFn).toHaveBeenCalled();
});

/**
 * Mining works correctly
 * We need to be able to click on mine and expect the block hash to now be valid
 * The text 'Valid' should also be in the document
 */
it('Mining works correctly', () => {
  //mock function to set hash var for testing
  let hashProp = '';
  const testFn = jest.fn((_block, hash) => (hashProp = hash));

  const { getByText, rerender } = render(
    <Block block={1} hash={hashProp} onDelete={() => {}} onHash={testFn} />
  );

  //Mine block
  userEvent.click(getByText('Mine'));
  //Check hash
  expect(hashProp.substring(0, 3)).toBe('000');

  //Rerender with new hash value
  rerender(
    <Block block={1} hash={hashProp} onDelete={() => {}} onHash={testFn} />
  );

  //Block should now be valid
  expect(getByText('Valid'));
});

/**
 * Changing data effects hash
 * The data textarea can be change,
 * we need to make sure the changes effect the hash and that onHash is called
 */
it('Changing data effects hash', () => {
  //mock function to set hash var for testing
  let hashProp = '';
  const testFn = jest.fn((_block, hash) => (hashProp = hash));

  const { getByText, getByRole } = render(
    <Block block={1} hash={hashProp} onDelete={() => {}} onHash={testFn} />
  );

  const prevHashVal = hashProp;
  //Type in data text box (selection should probably be more refined)
  userEvent.type(getByRole('textbox'), 'Hello Test!');
  //Compare old hash to hash post-data input
  expect(getByText('Hash').children[0].textContent || '').not.toEqual(
    prevHashVal
  );
});
