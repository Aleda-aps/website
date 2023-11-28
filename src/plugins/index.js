/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import VueObserveVisibility from 'vue-observe-visibility'
import VueKinesis from "vue-kinesis";

export function registerPlugins (app) {
  loadFonts()
  app.use(vuetify)
  app.use(VueObserveVisibility)
  app.use(VueKinesis)
}