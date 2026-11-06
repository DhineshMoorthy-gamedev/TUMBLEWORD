#!/usr/bin/env node

/**
 * Tauri CLI Wrapper with environment sanitization
 * Ensures cargo / rustc in ~/.cargo/bin is discoverable and removes any malformed
 * quotes in PATH inherited from Windows system environment variables.
 */

const os = require('os');
const path = require('path');

// 1. Sanitize PATH to remove any stray quotation marks from Windows registry entries
if (process.env.PATH) {
  process.env.PATH = process.env.PATH.replace(/"/g, '');
}

// 2. Ensure ~/.cargo/bin is explicitly prepended so Rust/Cargo toolchains are found
const cargoBin = path.join(os.homedir(), '.cargo', 'bin');
if (process.env.PATH && !process.env.PATH.includes(cargoBin)) {
  process.env.PATH = cargoBin + path.delimiter + process.env.PATH;
} else if (!process.env.PATH) {
  process.env.PATH = cargoBin;
}

// 3. Delegate to official Tauri CLI
const cli = require('@tauri-apps/cli/main');

const [bin, script, ...args] = process.argv;
const binStem = path.parse(bin).name.toLowerCase();

let binName = 'tauri';
if (process.env.npm_lifecycle_event) {
  binName = `npm run ${process.env.npm_lifecycle_event}`;
}

cli.run(args, binName).catch((err) => {
  cli.logError(err.message || String(err));
  process.exit(1);
});
