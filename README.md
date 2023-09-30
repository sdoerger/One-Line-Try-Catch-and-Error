Certainly! Here's a sample README for your project, which includes the helper functions `tryCatch` and `logErrorIfExists`:

---

# Async Helper Functions for Deno

This repository contains utility functions designed to make error-handling in asynchronous Deno applications easier and more convenient.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [tryCatch](#tryCatch)
  - [logErrorIfExists](#logerrorifexists)
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