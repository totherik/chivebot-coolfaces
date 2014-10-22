'use strict';

var Package = require('./package');
var Cool = require('cool-ascii-faces');


exports.register = function (plugin, options, next) {

        plugin.dependency('chivebot', function (plugin, next) {

            plugin.plugins.chivebot.registerCommand('lives!', function (raw, args, cb) {
                cb(null, Cool());
            });

            next();
        });

        next();
};


exports.register.attributes = {
    pkg: Package
};