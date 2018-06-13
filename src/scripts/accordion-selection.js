$(function() {
	// Single check
	$('.accordion .card-body').click(function (e) {
		var checkbox = $(this).siblings('input[type="checkbox"]');
		if (checkbox.prop('checked')) {
			checkbox.prop('checked', false);
		}
		else {
			checkbox.prop('checked', true);
		}
	});
	
	// Country check
	$('.accordion .country-checkbox').click(function () {
		var destination = $(this).siblings('a.open-nav').attr('data-target')
		var checkbox = $(destination).find('input[type="checkbox"]');
		
		if ($(this).prop('checked')) {
			checkbox.prop('checked', true);
		}
		else {
			checkbox.prop('checked', false);
		}
	});
	
	// Check state
	$('.accordion .select-checkbox').click(function() {
		var selector = $(this).parent();
		var selectedCheckboxes = selector.find('input[type=checkbox]:checked');
		
		var allSelector = selector.attr('aria-labelledby');					
		var selectAllCheckbox = $('#' + allSelector).find('input[type="checkbox"]')

		if (selectedCheckboxes.length === 0) {
			selectAllCheckbox.prop("indeterminate", false);
			selectAllCheckbox.prop('checked', false);
		} 
		else if (selector.find('input[type=checkbox]:not(:checked)').length === 0) {
			selectAllCheckbox.prop("indeterminate", false);
			selectAllCheckbox.prop('checked', true);
		} 
		else {
			selectAllCheckbox.prop("indeterminate", true);
		}
	});
});

$(function() {
	$('#select-all').click(function() {
		$(this).siblings().find('input[type=checkbox]').prop('checked', true);
		//$(this).siblings().find('select-checkbox').find('input[type=checkbox]').prop('checked', true);
	});
});

$(function() {
	$('#deselect-all').click(function() {
		$(this).siblings().find('input[type=checkbox]').prop('checked', false);
	});
});
