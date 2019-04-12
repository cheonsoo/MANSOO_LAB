var fs = require('fs');  
var async = require('async');

var oldFilename = './processId.txt';  
var newFilename = './processIdOld.txt';

async.waterfall([  
    function (cb) {
        fs.chmod(oldFilename, 777, function (err){
            console.log('complete chmod.');
            cb(null);
        });
    },
    function (cb) {
        fs.rename(oldFilename, newFilename, function (err) {
            console.log('complete rename.');
            cb(null);
        });
    },
    function (cb) {
        fs.lstat(newFilename, function (err, stats) {
            var isSymLink = stats.isSymbolicLink();
            console.log('complete symbolic check.');
        });
    }
]);