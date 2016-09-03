module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['assets/less'],
        },
        files: {
          'assets/css/styles.css': 'assets/less/source.less',
        },
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
      scripts: {
        files: 'assets/**/*.*',
        tasks: ['less', 'cssmin', 'imagemin'],
        options: {
          debounceDelay: 250,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'cssmin', 'imagemin']);
};
