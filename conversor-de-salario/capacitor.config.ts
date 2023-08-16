import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.conversordesalario.app',
  appName: 'Conversor de salario',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
