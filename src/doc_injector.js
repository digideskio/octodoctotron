var DocInjector = {
	init: function() {
		var that = this;
		$.each(this.data, function(i, docReference) {
			that.inject(docReference)
		});
	},
	data: [{
		"api_url": "http://developer.github.com/v3/meta/#meta",
		"method_name":"meta"
	}],
	inject: function(docReference) {
		var anchor = docReference.api_url.split("#");
		if(window.location.href !== anchor[0]) return;
		var html = '<div><code>Octokit.rb: <a href="#" target="_blank">Octokit#' + docReference.method_name + '</a></code></div>';
		$('#' + anchor[1]).after(html);
	}
};

$().ready(function() { DocInjector.init(); });
