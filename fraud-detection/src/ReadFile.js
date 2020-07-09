const fs = require("fs");

class ReadFile {
  constructor(path) {
    this.path = path;
  }

  read() {
    return fs.readFileSync(this.path, "utf8");
  }
}

module.exports = ReadFile;
