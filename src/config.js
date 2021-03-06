/**
 * Created by axetroy on 2017/7/2.
 */

const path = require("path");

const cwd = process.cwd();
const root = path.join(__dirname, "..");

const DEFAULT_CONFIG = {
  isProduction: process.env.NODE_ENV === "production",
  type: "wechat", // 默认的编译类型为微信小程序
  paths: {
    cwd: root,
    root: cwd,
    node_modules: path.join(root, "node_modules"),
    src: path.join(cwd, "src"),
    dist: path.join(cwd, "build"),
    temp: path.join(cwd, ".temp")
  }
};

const CONFIG = Object.assign({}, DEFAULT_CONFIG);

module.exports = function() {
  return CONFIG;
};
