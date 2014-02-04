'use strict';

var pkg = require('./package'),
    cool = require('cool-ascii-faces');


module.exports = {

    name: pkg.name,

    version: pkg.version,

    register: function (plugin, options, next) {

        plugin.dependency('chivebot', function (plugin, next) {

            plugin.plugins.chivebot.registerCommand('lives!', function (data, cb) {
                cb(null, cool());
            });

            next();

        });

        next();

    }

};