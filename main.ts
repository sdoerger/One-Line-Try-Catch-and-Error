export async function tryCatch<T>(
  func: () => Promise<T>,
  finalAction?: () => void
): Promise<[T | null, Error | null]> {
  try {
    return [await func(), null];
  } catch (error) {
    if (error instanceof Error) {
      return [null, error];
    }
    // Handle non-Error types (not usually recommended, but just in case)
    return [null, new Error(String(error))];
  } finally {
    if (finalAction) {
      finalAction();
    }
  }
}

export function assertError(error: Error | null, message: string) {
  if (error !== null) {
    console.log(`${message}:`, error);
  }
}

async function someFunctionThatMightThrow() {
  return 1 + 1
}

const [result, error] = await tryCatch(() => someFunctionThatMightThrow());
assertError(error, 'Fuck');

console.log(result);