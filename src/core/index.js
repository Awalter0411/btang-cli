#!/usr/bin/env node

import fs from "fs";
import { Command } from "commander";
import { registerCmd } from "./command.js";

function init() {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  const { name, description, version } = pkg;
  const program = new Command();
  program.name(name).description(description).version(version);
  return program;
}

const program = init();
registerCmd(program);

program.parse();
