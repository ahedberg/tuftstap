window.App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

Ember.Handlebars.helper('openRow', function(index) {
	var value = parseInt(index);
	if (value === 0 || value % 4 === 0) {
		console.log('opening on ' + index);
		return new Ember.Handlebars.SafeString('<div class="row">');
	} else {
		return '';
	}
});

Ember.Handlebars.helper('closeRow', function(index) {
	var value = parseInt(index);
	if (value % 4 === 3 || value === App.Member.FIXTURES.length - 1) {
		console.log('closing on ' + index);
		return new Ember.Handlebars.SafeString('</div>');
	} else {
		return '';
	}
});