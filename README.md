Certainly! Here's a sample README for your project, which includes the helper functions `tryCatch` and `logErrorIfExists`:

---

# Try Catch Helper Util

This repository contains utility functions designed to make try catch and error-handling in Deno applications a tiny notch more easier and more convenient.
Inspired my Go.

## Table of Contents

- [Try Catch Helper Util](#try-catch-helper-util)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [tryCatch](#trycatch)
      - [Example:](#example)
    - [logErrorIfExists](#logerrorifexists)
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

```typescript
import { tryCatch } from './helpers.ts';

const [result, error] = await tryCatch(async () => "Some Value");

if (error) {
  console.error("An error occurred:", error);
} else {
  console.log("Success:", result);
}
```

### logErrorIfExists

The `logErrorIfExists` function logs an error message along with the error if it exists.

#### Example:

```typescript
import { logErrorIfExists } from './helpers.ts';

logErrorIfExists(new Error("Some error"), "An error occurred");
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

---

This is just a sample README, so you might want to add more sections based on the actual content and structure of your project. Feel free to modify it as needed.