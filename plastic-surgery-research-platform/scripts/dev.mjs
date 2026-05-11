import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const port = process.env.PORT ?? "3520";
/** Bind all IPv4 interfaces so LAN devices can open the app; use HOST=127.0.0.1 to lock to localhost only. */
const host = process.env.HOST ?? "0.0.0.0";

function firstLanIpv4() {
  for (const nets of Object.values(os.networkInterfaces())) {
    for (const n of nets ?? []) {
      const v4 = n.family === "IPv4" || n.family === 4;
      if (v4 && !n.internal) return n.address;
    }
  }
  return null;
}

const lan = firstLanIpv4();
const localUrl = `http://127.0.0.1:${port}`;
const networkUrl = lan ? `http://${lan}:${port}` : null;

console.log(`
   MedPlatform · Next.js dev
   ─────────────────────────
   » Wait until you see:  ✓ Ready
   » First compile can take 1–3+ minutes if Windows blocks native SWC
     (you will see warnings about next-swc… — the app still may run via fallback).

   Local (this machine):
     ${localUrl}
     http://localhost:${port}

   ${
     host === "127.0.0.1" || host === "localhost"
       ? "Network:  not exposed (HOST is localhost-only)."
       : networkUrl
         ? `Network (phone / other device on same Wi‑Fi):
     ${networkUrl}
     (Allow Node.js through Windows Firewall if this URL does not load.)`
         : "Network:  no non-internal IPv4 found; try Local URL."
   }

   Override:  set HOST=127.0.0.1  to disable LAN access.
`);

const proc = spawn("npx", ["next", "dev", "-H", host, "-p", port], {
  cwd: root,
  stdio: "inherit",
  shell: true,
});

proc.on("exit", (code) => process.exit(code ?? 0));
