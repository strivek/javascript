module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    watch: {
      html: {
        files: ['angularjs/*.*'],
        tasks: ['wiredep'],
        options: {
          livereload: true
        },
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      css: {
        files: ['angularjs/*.*']
      },
      compass: {
        files: ['angularjs/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server'],
        options: {
          debounceDelay: 1000
        }
      }
    },
    compass: {
      options: {
        sassDir: 'angularjs/styles',
        cssDir: 'angularjs/styles',
        fontsDir: 'angularjs/styles/fonts',
        importPath: './bower_components',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false
      },
      server: {
        options: {
          debugInfo: false,
          sourcemap: false
        }
      }
    },
    wiredep: {
      options: {
        cwd: ''
      },
      app: {
        src: ['angularjs/index.html'],
        ignorePath: /\.\.\//
      },
      sass: {
        src: ['angularjs/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },
    concurrent: {
      server: ['compass:server']
    },
    connect: {
      liveroad: {
        options: {
          port: 8080,
          base: 'angularjs',
          livereload: 35729,
          open: true
        }
      }
    }
  })
  grunt.registerTask('default', ['connect', 'wiredep', 'watch']);
}
