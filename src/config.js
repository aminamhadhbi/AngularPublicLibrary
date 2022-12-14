var angularVersion = '@7.2.10';

System.config({
  transpiler: 'ts',
  typescriptOptions: {
    emitDecoratorMetadata: true,
    experimentalDecorators: true
  },
  meta: {
    'typescript': {
      "exports": "ts"
    }
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    app: "./src",
    '@angular/core': 'npm:@angular/core'+angularVersion+'/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common'+angularVersion+'/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler'+angularVersion+'/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser'+angularVersion+'/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic'+angularVersion+'/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http'+angularVersion+'/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router'+angularVersion+'/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms'+angularVersion+'/bundles/forms.umd.js',
    '@angular/upgrade': 'npm:@angular/upgrade'+angularVersion+'/bundles/upgrade.umd.js',
    '@angular/upgrade/static': 'npm:@angular/upgrade'+angularVersion+'/bundles/upgrade-static.umd.js',

    // other libraries
    'rxjs':                      'npm:rxjs@6.2.1',
    'rxjs-compat':               'npm:rxjs-compat@6.2.1',
    'ts':                        'npm:plugin-typescript@8.0.0/lib/plugin.js',
    'typescript':                'npm:typescript@2.9.2/lib/typescript.js',
    'gijgo-angular-wrappers': 'npm:gijgo-angular-wrappers@1.9.8/index.ts',
    'gijgo': 'npm:gijgo',
    '@types/jquery': 'npm:@types/jquery',
    '@types/gijgo': 'npm:@types/gijgo'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      main: 'index.js',
      defaultExtension: 'js'
    },
    "rxjs/operators": {
      main: 'index.js',
      defaultExtension: 'js'
    }
  }
});
