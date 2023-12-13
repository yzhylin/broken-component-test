import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing';
import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    ...nxComponentTestingPreset(__filename),
    specPattern: 'cypress/tests/**.cy.{js,jsx,ts,tsx}',
  },
});
