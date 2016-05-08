module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),//读取package信息
        uglify: {
          options: {
            banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//输出的头部信息
          },
          "my_target": {
            "files": {
              '<%= pkg.dest %>/js/libs.min.js': ['<%= pkg.src %>/js/jquery-2.1.1.min.js','<%= pkg.src %>/js/idangerous.swiper.min.js', '<%= pkg.src %>/js/hammer.js','<%= pkg.src %>/js/jquery.hammer.js','<%= pkg.src %>/js/my.js']
            }
          }
        },
    cssmin: {
      compress: {
        files: {
          '<%= pkg.dest %>/css/style.min.css': ["<%= pkg.src %>/css/style.css"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['uglify','cssmin']);

}

