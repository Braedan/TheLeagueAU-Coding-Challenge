import React, { useState } from 'react';

import Block from '../Block';

import styles from './styles.module.css';

/**
 * Block Chain Component
 * This component adds, delete and contains the hashes for the block chain
 * A single block is already done
 */
const BlockChain = () => {
  // Contains all hashes
  const [hashes, setHashes] = useState<string[]>([]);

  /**
   * Complete this function
   * onAdd should create a new block
   */
  const onAdd = () => {
    //If first block being generated, has no link (previous hash)
    //Adding empty string elem to array, Block component generates hash on render
    setHashes([...hashes, '']);
  };

  /**
   * Complete this function
   * onDelete should delete the last block
   * Should only need to pass to the last block
   */
  const onDelete = () => {
    const tempArr = [...hashes];
    tempArr.pop();
    setHashes([...tempArr]);
  };

  /**
   * Complete this function
   * onHash should update the corresponding index in the state 'hashes'
   * E.g., block 1 should update its corresponding index in the state 'hashes'
   */
  const onHash = (_block: number, hash: string) => {
    //Get index of corresponding hash (-1 array length)
    const index: number = _block - 1;
    //Check if hash is equal (stop unnecessary re-rendering)
    if (hashes[index] !== hash) {
      //Change hash in array to match new hash
      setHashes(Object.assign([], hashes, { [index]: hash }));
    }
  };

  /**
   * Fix the return statement
   * Currently we only show one block, this is incorrect.
   * We need to be able to show multiple blocks as a block chain should.
   * You'll most likely need to add more functions or states to fix the render. Figure out a way you can go about this.
   * Total Blocks is also incorrect.
   */
  return (
    <div className={styles.blockChain}>
      <h1>Block Chain Demo</h1>
      <div>Total Blocks: {hashes.length}</div>

      {/* Loop block array and render, add key */}
      {hashes.map((hash, index) => (
        <Block
          block={index + 1}
          key={index + 1}
          hash={hash}
          previousHash={index > 0 ? hashes[index - 1] : undefined}
          onHash={onHash}
          onDelete={index === hashes.length - 1 ? onDelete : undefined}
        />
      ))}

      <button type='button' onClick={() => onAdd()}>
        Add Block
      </button>
    </div>
  );
};

export default BlockChain;
