App.Member = DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	year: DS.attr('int'),
	school: DS.attr('string'),
	imageUrl: DS.attr('string'),
	major: DS.attr('string'),
	secondMajor: DS.attr('string'),
	minor: DS.attr('string')
});

App.Alum = DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	year: DS.attr('int'),
	school: DS.attr('string'),
	imageUrl: DS.attr('string'),
	major: DS.attr('string'),
	secondMajor: DS.attr('string'),
	minor: DS.attr('string'),
	sinceTufts: DS.attr('string')
});