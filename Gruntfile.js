module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      css: ['css/'],
      js: ['js/'],
      img: ['img/'],
    },
    copy: {
      main: {
        files: [
          {
            src: ['node_modules/normalize.css/normalize.css'],
            dest: 'assets/css/normalize.css',
          },
        ],
      },
    },
    less: {
      dev: {
        options: {
          paths: ['assets/less'],
        },
        files: {
          'assets/css/styles.css': 'assets/less/source.less',
        },
      },
      dist: {
        options: {
          paths: ['assets/less'],
          plugins: [
            new (require('less-plugin-autoprefix'))({ browsers: ['last 2 versions'] }),
          ],
          modifyVars: {
            colorBase: 'red',
          },
        },
        files: {
          'assets/css/styles.css': 'assets/less/source.less',
        },
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
      dist: {
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
    notify_hooks: {
      options: {
        enabled: true,
        title: 'LoginForm',
        success: true,
        duration: 3,
      },
    },
    notify: {
      css: {
        options: {
          title: 'Task Complete',
          message: 'New Css minified successfully!',
        },
      },
      js: {
        options: {
          title: 'Task Complete',
          message: 'Clean and Uglify finished running!',
        },
      },
      img: {
        options: {
          title: 'Task Complete',
          message: 'Clean and ImageMin finished running!',
        },
      },
    },
    watch: {
      options: {
        livereload: true,
        debounceDelay: 250,
      },
      less: {
        files: 'assets/less/**/*.less',
        tasks: ['less:dev'],
      },
      sass: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass'],
      },
      css: {
        files: 'assets/css/**/*.css',
        tasks: ['clean:css', 'cssmin', 'notify:css'],
      },
      js: {
        files: 'assets/js/**/*.js',
        tasks: ['clean:js', 'uglify:dev', 'notify:js'],
      },
      img: {
        files: 'assets/img/**/*.*',
        tasks: ['clean:img', 'imagemin', 'notify:img'],
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
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('setup', ['copy']);
  grunt.registerTask('default', ['connect', 'watch', 'notify_hooks']);
  grunt.registerTask(
    'build',
    ['clean', 'less:dist', 'sass', 'cssmin', 'uglify:dist', 'imagemin']
  );
};
