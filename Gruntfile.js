module.exports = function (grunt) {
    // Projekt Konfiguration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // Konfiguration des Watch-Tasks
        watch: {
            scripts: {
                files: ["**/*.js"], // Pfade zu den zu überwachenden Skriptdateien
                tasks: ["test"], // Aufgabe, die bei Änderungen ausgeführt werden soll
                options: {
                    spawn: false, // Hält den Watch-Task davon ab, neue Prozesse zu starten
                    cwd: __dirname, // Setzt das Arbeitsverzeichnis für den Watch-Task auf das Verzeichnis, in dem das Gruntfile liegt
                },
            },
        },
    });

    // Load the plugins
    grunt.loadNpmTasks("grunt-contrib-watch"); // Plugin für den Watch-Task

    // Task zum Ausführen von QUnit-Tests
    grunt.registerTask("test", function () {
        var done = this.async();
        var exec = require("child_process").exec;

        // Befehl zum Ausführen der QUnit-Tests
        var command = "npm run test";

        var child = exec(command, function (error, stdout, stderr) {
            if (error !== null) {
                console.error("QUnit-Tests fehlgeschlagen: " + error);
                done(false);
            } else {
                console.log(stdout);
                done();
            }
        });
    });

    // Default task(s)
    grunt.registerTask("default", ["watch"]); // Standardaufgabe ist das Überwachen von Dateiänderungen
};
