// Generated by uRequire v0.6.14 - template: 'UMD' 
(function (window, global)
{
    var __isAMD = !!(typeof define === 'function' && define.amd),
        __isNode = (typeof exports === 'object'),
        __isWeb = !__isNode;

    (function (factory)
    {
        if (typeof exports === 'object') {
            var nr = new (require('urequire').NodeRequirer)('angular-logX', module, __dirname, '.');
            module.exports = factory(nr.require, exports, module);
        } else if (typeof define === 'function' && define.amd) {
            define(factory)
        } else throw new Error('uRequire: Loading UMD module as <script>, without `build.noLoaderUMD`');
    }).call(this, function (require, exports, module)
    {


        "use strict";
        require([
            "./mindspace/logger/LogDecorator",
            "./mindspace/logger/ExternalLogger"
        ], function (LogDecorator, ExternalLogger) {
            var moduleName = "mindspace.logX";
            angular.module(moduleName, []).config(LogDecorator);
        });

        return module.exports;

    });
}).call(this, (typeof exports === 'object' ? global : window), (typeof exports === 'object' ? global : window));