<image src="https://cdn.midjourney.com/ba8ffbc1-2ea1-4ead-9d2f-337d23c2c037/0_0.png" width="400" height="400"

# Try and Catch me if you can

This repository contains utility functions designed to make try catch and error-handling in Deno applications a tiny notch more easier and more convenient.
Inspired my Go.

## Table of Contents

- [One Line Try Catch and Error](#one-line-try-catch-and-error)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [tryCatch](#trycatch)
      - [Example:](#example)
    - [assertError](#asserterror)
      - [Example:](#example-1)
  - [Running Tests](#running-tests)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

## Usage

### tryCatch

The `tryCatch` function provides a way to execute asynchronous operations and neatly handle success and failure cases.

#### Example:

Basic

```typescript
import * as tcUtils from 'https://raw.githubusercontent.com/sdoerger/One-Line-Try-Catch-and-Error/main/mod.ts';

const [result, error] = await tcUtils.tryCatch(() => 5 + 5);
tcUtils.assertError(error, 'An issue occurred');

console.log(result);
```

Async

```typescript
import * as tcUtils from 'https://raw.githubusercontent.com/sdoerger/One-Line-Try-Catch-and-Error/main/mod.ts';


async function fetchAnimals() {
    const response = await fetch(
        "https://api.publicapis.org/entries?category=Animals",
        {
            method: "GET",
        }
    );

    return await response.json();
};

const [result, error] = await tcUtils.tryCatch(fetchAnimals);
tcUtils.assertError(error, 'An issue occurred');

console.log(result);
```

### assertError

The `assertError` function logs an error message along with the error if it exists.

#### Example:

```typescript
import { assertError } from './helpers.ts';

assertError(new Error("Some error"), "An error occurred");
```

## Running Tests

To run the tests, execute the following command:

```bash
deno test helpers_test.ts
```

## Contributing

Feel free to contribute by submitting pull requests.

## License

MIT License. See `LICENSE` for more information.
