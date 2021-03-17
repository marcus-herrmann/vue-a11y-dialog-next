import A11yDialog from './A11yDialog.vue';

export { A11yDialog };

export default function install (app) {
  app.component('a11y-dialog', A11yDialog)
}