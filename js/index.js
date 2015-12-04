

function check_screen_size()
{
	var sizes = ['xs','sm','md','lg'];
	var $element = $('<div>');
	var i;

	$element.appendTo($('body'));

	for(i=0;i<sizes.length;i++)
	{
		var size = sizes[i];
		var clas = 'hidden-' + size;

		$element.addClass(clas);

		if($element.is(':hidden'))
		{
			$element.remove();
			return size;
		}

	}

	return 'lg';
}

function scaletext()
{
	var currentsize = check_screen_size();
	if(currentsize == 'xs')
	{
		$('body').css('font-size','24px');
		$('.menu-icon').css('font-size','0.8em');
		$('.menu-tooltip-text').css('font-size','0.675em');
	}
	else if(currentsize == 'sm')
	{
		$('body').css('font-size','24px');
		$('.menu-icon').css('font-size','0.8em');
		$('.menu-tooltip-text').css('font-size','0.675em');
	}
	else
	{
		$('body').css('font-size','16px');
		$('.menu-icon').css('font-size','1em');
		$('.menu-tooltip-text').css('font-size','1em');
	}
}

setInterval(scaletext,100);