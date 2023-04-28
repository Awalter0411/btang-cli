import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import inquirer from "inquirer";
import { copyDir } from "../util/index.js";

const __dirname = fileURLToPath(import.meta.url);
const CMDS = [
  {
    cmd: "init",
    desc: "initialize a new project",
    action: initAction,
  },
];

function initAction() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter project name:",
      },
      {
        type: "list",
        name: "templateName",
        message: "Choose project template:",
        choices: [
          {
            key: "react-ts",
            name: "react-ts",
            value: "react",
          },
          {
            key: "vue-ts",
            name: "vue-ts",
            value: "vue-ts",
          },
          {
            key: "koa-ts",
            name: "koa-ts",
            value: "koa-ts",
          },
          {
            key: "express-ts",
            name: "express-ts",
            value: "express-ts",
          },
        ],
      },
    ])
    .then(({ name, templateName }) => {
      console.log(templateName);
      if (fs.existsSync(name)) {
        console.log(`Folder ${name} exists.`);
      }
      fs.mkdir(name, (err) => {
        if (err) throw err;
        copyDir(
          path.join(__dirname, `../../template/${templateName}`),
          path.join("./", name)
        );
      });
    });
}

export function registerCmd(program) {
  CMDS.map((cmdItem) => {
    const { cmd, desc, action } = cmdItem;
    program.command(cmd).description(desc).action(action);
  });
}
