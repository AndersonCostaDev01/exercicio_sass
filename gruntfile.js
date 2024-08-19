module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dist/main.css': 'src/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/main.min.css': 'src/main.less'
                }
            }
        },
          htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'dist/index.html': 'src/index.html' // Ajuste o caminho para 'prebuild/index.html'
                }
            }
        },
    })
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
    // Default task(s).
    grunt.registerTask('default', ['less', 'htmlmin']);
  
  };