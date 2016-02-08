'use strict'

var yargs = require('yargs').argv
var ncp = require('ncp').ncp
ncp.limit = 16

function exportBuild(srcFilepath, destFilepath) {
  ncp(srcFilepath, destFilepath, function(err) {
    if (err) {
      return console.error(err)
    }
    console.log(`Folder ${srcFilepath} exported to ${destFilepath}\n`)
  })
}

if (!yargs.dest) {
  throw new Error('Required argument: --dest')
} else {
  var source = './dist'
  var dest = yargs.dest
  exportBuild(source, dest)
}