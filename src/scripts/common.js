(function () {	
	var userTemplate = 
		'<a href="javascript:navigate(\'login.html\')" class="register-button">Login</a>' +
		'<a href="javascript:navigate(\'register.html\')" class="register-button btn">Register</a>';

	var user = sessionStorage.getItem("user");
	if (user) {
		userTemplate = 
			'<span class="greating">Здравейте <b>' + user +'</b></span>' +
			'<a href="javascript:navigate(\'profile.html\')" class="register-button btn">Profile</a>' +
			'<a href="javascript:navigate(\'index.html\')" class="register-button btn" id="LogoutBtn">Logout</a>';
	}
	
	var message = sessionStorage.getItem("message");
	if (message) {
		$('#message').html(message);
		$('#message').addClass('msg-success');
		$('#message').show();
		sessionStorage.removeItem("message");
	}
	
	var navTemplate = 
		'<nav class="navbar navbar-expand-lg navbar-light custom-theme">' +
			'<div class="container">' +
				'<a class="navbar-brand" href="javascript:navigate(\'index.html\')">Erasmus++</a>' +
				'<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
					'<span class="navbar-toggler-icon"></span>' +
				'</button>' +
				
				'<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
					'<ul class="navbar-nav mr-auto">' +
						'<li class="nav-item dropdown">' +
							'<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
								'Search' +
							'</a>' +
							'<div class="dropdown-menu custom-theme" aria-labelledby="navbarDropdown">' +
								'<a class="dropdown-item" href="javascript:navigate(\'organization_search.html\')">By organization</a>' +
								'<a class="dropdown-item" href="javascript:navigate(\'host_search.html\')">By host</a>' +
								'<a class="dropdown-item" href="javascript:navigate(\'project_search.html\')">By project</a>' +
							'</div>' +
						'</li>' +
					'</ul>' +
					userTemplate
				'</div>' +
			'</div>' +
		'</nav>';
	
	$('#nav').append(navTemplate);
	
	$('#LogoutBtn').click(function() {
		sessionStorage.removeItem('user');	
	});
}());

var navigate = function (address) {
    var link = window.location.href;
    var search = 'src';
    var idx = link.indexOf(search) + search.length + 1;
	var baseAddress = link.substr(0, idx);
	
	window.location = baseAddress + address;
};

var navigateForm = function (btn) {
	var form = btn.closest("form");
	var action = form.attr('action');
	navigate(action);
}
