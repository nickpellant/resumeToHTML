var fs = require('fs');
var path = require('path');

var resumeTemplate = fs.readFileSync(path.resolve(__dirname, '../layout.template'), 'utf8');

function resumeToHTML(resumeObject, callback) {
    var resumeTXT = Mustache.render(resumeTemplate, resumeObject);
    callback(resumeTXT);
}

module.exports = resumeToHTML;