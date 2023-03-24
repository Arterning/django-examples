// deno run first_steps.ts

// deno run --allow-net=deno.land first_steps.ts

console.log("Welcome to Deno!");

const res = await fetch("https://deno.land");
const body = await res.text();
console.log(body);