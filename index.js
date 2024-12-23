const fs = require("fs");
const path = require("path");
const process = require("process");

function dump(version) {
    const content = fs.readFileSync(path.join(__dirname, version + ".log"), { encoding: "utf-8" });
    const lines = content
        .toString()
        .split("\n")
        .filter((v) => /^\d+/g.test(v) && v.includes("【"))
        .map((v) => v.split(".")[0]);
    const ids = Array.from(new Set(lines)).sort().map(v => "  " + v).join("\n");
    console.log(version + ":\n" + ids);
    fs.writeFileSync(version + "_files.txt", ids, { encoding: "utf-8" });
}

const version = process.argv[2];
if (version) {
    dump(version);
}
