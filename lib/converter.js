var fs = require('fs');
var Mustache = require('mustache');
var path = require('path');
var resumeSchema = require('resume-schema');
var resumeToMarkdown = require('resume-to-markdown');
var marked = require('marked');
var _ = require('lodash');
var defaultContainer = fs.readFileSync(__dirname + '/../themes/default_container.html', 'utf8');
var defaultTheme = fs.readFileSync(__dirname + '/../themes/modern/resume.css', 'utf8');
var defaultThemeHTML = fs.readFileSync(__dirname + '/../themes/modern/resume.html', 'utf8');

function resumeToHTML(resumeObject, options, callback) {
	var themeName = options.theme || 'modern';
	var theme = getTheme(themeName);

	_.each(resumeObject.work, function(w){
		w.startDateYear = w.startDate.substr(0,4);
		if(w.endDate) {
			w.endDateYear = w.endDate.substr(0,4);
		} { 
			w.endDateYear = 'Present'
		}
	});
	var resumeHTML = Mustache.render(theme.html, resumeObject);
	
	var html = Mustache.render(defaultContainer, {resumeHTML: resumeHTML, resume: resumeObject, theme: theme.css});

    callback(html, null);
};
function getTheme(themeName) {
	return {
		html: fs.readFileSync(__dirname + '/../themes/'+themeName+'/resume.html', 'utf8'),
		css: fs.readFileSync(__dirname + '/../themes/'+themeName+'/resume.css', 'utf8'),
	}
}

module.exports = resumeToHTML;


