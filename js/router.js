App.Router.map(function() {
	this.resource('main', {path: '/'});
	this.resource('members', {path: '/members/'});
	this.resource('alumni', {path: '/alumni/'});
	this.resource('video', {path: '/video/'});
});

App.MembersRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('member')/**.sortBy('lastName')**/;
	}
});

App.AlumniRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('alum')/**.sortBy('lastName')**/;
	}
});
