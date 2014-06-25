var test = require('tape');
var converter = require('../lib/converter');

var resumeJson = {
    "name": "test",
    "email": "email"
}

test('Test resumeToText on resume.json.', function(t) {
    resumeToText(resumeJson, function(report, err) {
        t.plan(1);
        t.equal(err, null, 'no errors');
    });
});