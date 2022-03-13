# Coding Challenge Information

Challenge provided by TheLeagueAU, original code can be found here: https://github.com/TheLeagueAU/coding-challenge

# The League Coding Challenge - Blockchain React Demo

For this challenge we are making a block chain demo in react. If you don't know any react or typescript, there is no need to worry, some code has already been done for you which can serve as a good reference point, especially when writing tests in step 3. Part of this challenge is to test how well you pick up new technology and concepts.

What is a block chain? _Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system._

A good demo of this, can be found here: https://andersbrownworth.com/blockchain/blockchain

However we also want to change it up a bit. We want a similar product using typescript and react, as well as some stylistic changes. A skeleton of the code has been provided aswell as a set of step by step instructions on how to get started.

Please create your own git repository to keep track of your work.
For submission, just email the repository link back to us.

If you have any issues, please email me at dylan@theleagueagency.com.au

Goodluck!

## Setup

Install all packages using npm

```bash
npm install
```

## Start

```bash
npm run dev
```

Open http://localhost:9000/

## Tests

```bash
npm run test
```

## Instructions

To keep track of your work, please setup a git and commit after each step.

---

### Step 1 - Create Block Chain

Please complete the functions in the `src/components/BlockChain/index.tsx`

- onAdd
- onDelete
- onHash

The render method of this component currently only renders one block. This needs to be updatted to allow for dynamic rendering of a list of blocks. Note that the hashes are linked (hence _block chain_), so the hash of block 2 includes the previous hash of block 1, the hash of block 3 includes the hash of block 2 and so on. You'll most likely need to add more functions to fix the render method. Figure out a way you can go about this.

Tests for the Block Chain are provided, and given that you've done everything correctly, they should pass. To run the tests only for this component, run `npm run tests BlockChain`.

---

### Step 2 - Block and Block Chain Style Fixes

- The block should be red if not a valid block with colour #ff9c9c
- The block should have border radius of 24px
- The blocks in the block chain should be aligned with the center
- The blocks should be 24px apart from each other
- The block should have a shadow (any will do)
- The block should 2px solid black border

---

### Step 3 - Block Testing

An essential part of coding is also testing your own code, please complete the testing for the block code that was initially provided in `src/components/Block/Block.test.tsx`. You'll need to complete 5 tests:

- Hash is set on load
- Shows not valid text
- Delete is called correctly
- Mining works correctly
- Changing data effects hash

---

### Resources

Here are some resources that might come in handy when trying to use the technologies required for this challange:

- [React](https://reactjs.org/docs/getting-started.html 'React Docs')
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html 'TS Docs')
- [React Testing Library](https://testing-library.com/docs/ 'RTL Docs')
