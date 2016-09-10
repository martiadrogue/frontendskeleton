module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      options: {
        paths: ['assets/less'],
      },
      files: {
        'assets/css/styles.css': 'assets/less/source.less',
      },
    },
    sass: {
      options: {
        outputStyle: 'expanded',
      },
      files: {
        'assets/css/styles.css': 'assets/scss/source.scss',
      },
    },
    cssmin: {
      options: {
        keepSpecialComments: 0,
      },
      combine: {
        files: {
          'css/main.css': [
            'assets/css/normalize.css',
            'assets/css/font-awesome.css',
            'assets/css/block/*.css',
            'assets/css/styles.css',
          ],
        },
      },
    },
    uglify: {
      dev: {
        options: {
          beautify: {
            width: 80,
            beautify: true,
          },
          preserveComments: true,
          mangle: false,
          banner: "'use strict';\n",
          process: function (src, filepath) {
            return src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          },
        },
        files: [
          { 'js/main.js': ['assets/js/block/**/*.js'] },
          {
            expand: true,
            cwd: 'assets/js/lib',
            src: '**/*.*',
            dest: 'js',
          },
          {
            expand: true,
            cwd: 'assets/js/raw',
            src: '**/*.json',
            dest: 'js/raw',
          },
        ],
      },
      build: {
        options: {
          banner: "'use strict';",
          process: function (src, filepath) {
            return src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          },
        },
        files: [
          { 'js/main.js': ['assets/js/block/**/*.js'] },
          {
            expand: true,
            cwd: 'assets/js/lib',
            src: '**/*.*',
            dest: 'js',
          },
          {
            expand: true,
            cwd: 'assets/js/raw',
            src: '**/*.json',
            dest: 'js/raw',
          },
        ],
      },
    },
    imagemin: {
      dynamic: {
        options: {
          progressive: true,
        },
        files: [
          {
            expand: true,
            cwd: 'assets/img/',
            src: ['**/*.{png,jpg,jpeg,gif,PNG,JPG,JPEG,GIF}'],
            dest: 'img/',
          },
        ],
      },
    },
    watch: {
      options: {
        livereload: true,
        debounceDelay: 250,
      },
      less: {
        files: 'assets/less/**/*.less',
        tasks: ['less'],
      },
      sass: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass'],
      },
      css: {
        files: 'assets/css/**/*.css',
        tasks: ['cssmin'],
      },
      js: {
        files: 'assets/js/**/*.js',
        tasks: ['uglify:dev'],
      },
      img: {
        files: 'assets/img/**/*.*',
        tasks: ['imagemin'],
      },
    },
    connect: {
      server: {
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('build', ['less', 'sass', 'cssmin', 'uglify:build', 'imagemin']);
};
