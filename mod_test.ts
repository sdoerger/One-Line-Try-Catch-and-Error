import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { tryCatch } from "./mod.ts";

Deno.test("tryCatch - successfully returns result", async () => {
  const [result, error] = await tryCatch(async () => "success");
  assertEquals(result, "success");
  assertEquals(error, null);
});

Deno.test("tryCatch - catches error", async () => {
  const [result, error] = await tryCatch(async () => {
    throw new Error("failure");
  });
  assertEquals(result, null);
  assertEquals(error instanceof Error, true);
  assertEquals(error?.message, "failure");
});


