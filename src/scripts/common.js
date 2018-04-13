(function () {
	var navTemplate = 
		'<nav class="navbar navbar-expand-lg navbar-light custom-theme">' +
			'<div class="container">' +
				'<a class="navbar-brand" href="index.html">Erasmus++</a>' +
				'<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
					'<span class="navbar-toggler-icon"></span>' +
				'</button>' +
				
				'<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
					'<ul class="navbar-nav mr-auto">' +
						'<li class="nav-item">' +
							'<a class="nav-link" href="#">Link</a>' +
						'</li>' +
						'<li class="nav-item dropdown">' +
							'<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
								'Dropdown' +
							'</a>' +
							'<div class="dropdown-menu custom-theme" aria-labelledby="navbarDropdown">' +
								'<a class="dropdown-item" href="#">Action</a>' +
								'<a class="dropdown-item" href="#">Another action</a>' +
							'</div>' +
						'</li>' +
					'</ul>' +
					
					'<form class="form-inline my-2 my-lg-0">' +
						'<a href="register_person.html" class="btn btn-md btn-link">Регистрация</a>' +
					'</form>' +
				'</div>' +
			'</div>' +
		'</nav>';
	
	$('#nav').append(navTemplate);
}());
