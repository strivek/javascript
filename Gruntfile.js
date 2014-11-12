module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    watch: {
      html: {
        files: ['angularjs/*.*', 'angularjs/*/*.*'],
        task: ['wiredep'],
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
        files: ['angularjs/styles/{,*/}*.{scss,sass}',
          'angularjs/scss/{,*/}*.{scss,sass}'
        ],
        tasks: ['compass:server'],
        options: {
          debounceDelay: 1000,
          livereload: true
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
          sourcemap: false,
        }
      }
    },
    wiredep: {
      app: {
        src: ['angularjs/*.html'],
        ignorePath: /\.\.\//
      }
    },
    concurrent: {
      server: ['compass:server']
    },
    connect: {
      liveroad: {
        options: {
          port: 8080,
          base: '.',
          livereload: 35729,
          open: true,
          middleware: function(connect) {
            return [
              connect.static('angularjs'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static("angularjs")
            ];
          }
        }
      }
    }
  })
  grunt.registerTask('default', ['connect', 'wiredep', 'watch']);
  grunt.registerTask('update', ['wiredep'])
}
