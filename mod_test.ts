import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { tryCatchFin } from "./mod.ts";

Deno.test("tryCatchFin - successfully returns result", async () => {
  const [result, error] = await tryCatchFin(async () => "success");
  assertEquals(result, "success");
  assertEquals(error, null);
});

Deno.test("tryCatchFin - catches error", async () => {
  const [result, error] = await tryCatchFin(async () => {
    throw new Error("failure");
  });
  assertEquals(result, null);
  assertEquals(error instanceof Error, true);
  assertEquals(error?.message, "failure");
});


