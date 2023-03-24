/**
 * deno run --allow-read 02-deno-readfile.ts /etc/hosts
 */

const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  await file.readable.pipeTo(Deno.stdout.writable, { preventClose: true });
}