import { createRenderer } from 'fela'
import webPreset from 'fela-preset-web'


// ------------------------------------------------------------------------------
// Define fela renderer
// ------------------------------------------------------------------------------
const felaRenderer = createRenderer({
  plugins: [...webPreset]
})


// ------------------------------------------------------------------------------
// Export class
// ------------------------------------------------------------------------------
export default felaRenderer