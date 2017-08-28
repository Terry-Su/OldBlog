const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const rename = require("gulp-rename")

const customMarkdown = require('../../util/gulp-plugin/customMarkdown')


const inputPath = path.resolve(__dirname, './src/test.md')
const destPath = path.resolve(__dirname, './dest')
const testFilePath = path.resolve(__dirname, './dest/test.html')

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000

let fileInfo = null
let fileInfoAfterModified = null

fileInfo = fs.statSync(testFilePath)


const modifyFile = function ({
  inputPath,
  customMarkdown,
  destPath
}) {
  gulp.src(inputPath)
    .pipe(customMarkdown())
    .pipe(rename(path => { path.extname = '.html' }))
    .pipe(gulp.dest(destPath, {
      // overwrite: true
    }))

  fileInfoAfterModified = fs.statSync(testFilePath)
}


const asyncModifyFile = function ({
  inputPath,
  customMarkdown,
  destPath,
  modifyFile
}) {
  setTimeout(() => {
    modifyFile({
      inputPath,
      customMarkdown,
      destPath
    })
  }, 100)

  const p = new Promise((resolve) => {
    setTimeout(() => {
      fileInfoAfterModified = fs.statSync(testFilePath)

      resolve(true)
    }, 1000)
  })

  return Promise.resolve(p)
}




describe(``, () => {
  it(``, done => {
    asyncModifyFile({
      inputPath,
      customMarkdown,
      destPath,
      modifyFile
    })
      .then(() => {
        console.log(`
          ${new Date(fileInfo.birthtime).toLocaleString()} 
          ${new Date(fileInfoAfterModified.birthtime).toLocaleString()}
        `)
        return fileInfoAfterModified = fs.statSync(testFilePath)
      })
      .then(result => {
        expect(true).toBe(true)
        done()
      })
  })
})




