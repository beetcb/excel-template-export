const fs = require('fs')
const { execSync } = require('child_process')
const shoelacePackDir = 'dist/shoelace/'
const shoelaceAssetsDir = 'node_modules/@shoelace-style/shoelace/dist/assets'
if (!fs.existsSync(shoelacePackDir)) {
  fs.mkdirSync(shoelacePackDir, { recursive: true })
}

execSync(`cp -r ${shoelaceAssetsDir} ${shoelacePackDir}`)

require('esbuild').buildSync({
  entryPoints: ['src/index.ts', 'src/sl.ts'],
  bundle: true,
  outdir: 'dist',
})
