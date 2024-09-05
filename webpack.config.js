module.exports = {
    entry: './src/chesslib.js',
    output: {
      library: 'Chesslib',
      libraryTarget: 'umd',
      libraryExport: 'default',
      filename: 'chesslib.min.js',
      globalObject: `(typeof self !== 'undefined' ? self : this)`
    }
  };