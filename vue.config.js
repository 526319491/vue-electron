const { defineConfig } = require('@vue/cli-service')
module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js"
    }
  }
};