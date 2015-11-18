
var menu_open = false;
var menu_move_dist = 300;
var icon_move_dist = 73;
var lst_btn = 'none';

function menu_toggle(action,delay)
{
	if(action == 'close')
	{
		menu_open = false;
		$('.menu-movable-pt1').delay(delay).animate({left:'+='+menu_move_dist+'px',width:'-='+menu_move_dist+'px'},300);
		$('.menu-movable-pt2').delay(delay).animate({left:'+='+menu_move_dist+'px'},300);				
	}
	else if(action == 'open')
	{
		menu_open = true;
		$('.menu-movable-pt1').delay(delay).animate({left:'-='+menu_move_dist+'px',width:'+='+menu_move_dist+'px'},300);
		$('.menu-movable-pt2').delay(delay).animate({left:'-='+menu_move_dist+'px'},300);	
	}
	
}

function menu_options_move(action,delay)
{
	if(action == 'up')
	{
		$('.menu-options-skills').delay(delay).animate({top: '-='+icon_move_dist+'px'},150);
		$('.menu-options-projects').delay(delay).animate({top: '-='+icon_move_dist+'px'},200);
		$('.menu-options-resume').delay(delay).animate({top: '-='+icon_move_dist+'px'},250);
		$('.menu-options-aboutme').delay(delay).animate({top: '-='+icon_move_dist+'px'},300);
	}
	else if(action == 'down')
	{
		$('.menu-options-skills').delay(delay).animate({top: '+='+icon_move_dist+'px'},300);
		$('.menu-options-projects').delay(delay).animate({top: '+='+icon_move_dist+'px'},250);
		$('.menu-options-resume').delay(delay).animate({top: '+='+icon_move_dist+'px'},200);
		$('.menu-options-aboutme').delay(delay).animate({top: '+='+icon_move_dist+'px'},150);
	}
}

function menu_contact_move(action,delay)
{
	if(action == 'up')
	{
		$('.menu-contact-pm').delay(delay).animate({top: '-='+icon_move_dist+'px'},150);
		$('.menu-contact-linkedin').delay(delay).animate({top: '-='+icon_move_dist+'px'},200);
		$('.menu-contact-gmail').delay(delay).animate({top: '-='+icon_move_dist+'px'},250);
		$('.menu-contact-github').delay(delay).animate({top: '-='+icon_move_dist+'px'},300);
	}
	else if(action == 'down')
	{
		$('.menu-contact-pm').delay(delay).animate({top: '+='+icon_move_dist+'px'},300);
		$('.menu-contact-linkedin').delay(delay).animate({top: '+='+icon_move_dist+'px'},250);
		$('.menu-contact-gmail').delay(delay).animate({top: '+='+icon_move_dist+'px'},200);
		$('.menu-contact-github').delay(delay).animate({top: '+='+icon_move_dist+'px'},150);
	}
}

function animatemenu(event)
{
	
	if(menu_open == false)
	{
		
		menu_toggle('open',0);
		if(event.data.btn == 'options')
		{
			menu_options_move('up',100);
		}
		else if(event.data.btn == 'contact')
		{
			menu_contact_move('up',100);
		}
		lst_btn = event.data.btn;

	}
	else if(menu_open == true)
	{
		if(event.data.btn == lst_btn)
		{
			if(event.data.btn == 'options')
			{
				menu_options_move('down',0);
			}
			else if(event.data.btn == 'contact')
			{
				menu_contact_move('down',0);
			}
			lst_btn = event.data.btn;
			menu_toggle('close',100);
		}
		else
		{
			if(event.data.btn == 'options')
			{
				menu_contact_move('down',0);
				menu_options_move('up',100);
			}
			else if(event.data.btn == 'contact')
			{
				menu_options_move('down',0);
				menu_contact_move('up',100);
			}
			lst_btn = event.data.btn;
		}
	}
}


function animate_tooltip(event)
{
	if(event.data.action == 'up')
	{
		$('.menu-tooltip-text').html(event.data.text);
		$('.menu-tooltip').animate({top: '-=20px'},100);
		$(event.data.obj).css('opacity','1');
	}
	else if(event.data.action == 'down')
	{
		$('.menu-tooltip').animate({top: '+=20px'},100);
		$(event.data.obj).css('opacity','0.75');	
	}
}

$(document).on('click','.menu-icon-options',{btn:'options'},animatemenu);
$(document).on('click','.menu-icon-contact',{btn:'contact'},animatemenu);


$(document).on('mouseenter','.menu-icon-options',{action:'up',text: 'Menu',obj: '.menu-icon-options'},animate_tooltip);
$(document).on('mouseleave','.menu-icon-options',{action:'down',text: '-------------',obj: '.menu-icon-options'},animate_tooltip);

$(document).on('mouseenter','.menu-icon-contact',{action:'up',text: 'Contact',obj: '.menu-icon-contact'},animate_tooltip);
$(document).on('mouseleave','.menu-icon-contact',{action:'down',text: '-------------',obj: '.menu-icon-contact'},animate_tooltip);

$(document).on('mouseenter','.menu-icon-stats',{action:'up',text: 'TBD',obj: '.menu-icon-stats'},animate_tooltip);
$(document).on('mouseleave','.menu-icon-stats',{action:'down',text: '-------------',obj: '.menu-icon-stats'},animate_tooltip);

$(document).on('mouseenter','.menu-options-aboutme',{action:'up',text: 'About me',obj: '.menu-options-aboutme'},animate_tooltip);
$(document).on('mouseleave','.menu-options-aboutme',{action:'down',text: '-------------',obj: '.menu-options-aboutme'},animate_tooltip);

$(document).on('mouseenter','.menu-options-resume',{action:'up',text: 'My resume',obj: '.menu-options-resume'},animate_tooltip);
$(document).on('mouseleave','.menu-options-resume',{action:'down',text: '-------------',obj: '.menu-options-resume'},animate_tooltip);

$(document).on('mouseenter','.menu-options-projects',{action:'up',text: 'My projects',obj: '.menu-options-projects'},animate_tooltip);
$(document).on('mouseleave','.menu-options-projects',{action:'down',text: '-------------',obj: '.menu-options-projects'},animate_tooltip);

$(document).on('mouseenter','.menu-options-skills',{action:'up',text: 'My skills',obj: '.menu-options-skills'},animate_tooltip);
$(document).on('mouseleave','.menu-options-skills',{action:'down',text: '-------------',obj: '.menu-options-skills'},animate_tooltip);

$(document).on('mouseenter','.menu-contact-github',{action:'up',text: 'Github',obj: '.menu-contact-github'},animate_tooltip);
$(document).on('mouseleave','.menu-contact-github',{action:'down',text: '-------------',obj: '.menu-contact-github'},animate_tooltip);

$(document).on('mouseenter','.menu-contact-gmail',{action:'up',text: 'Gmail',obj: '.menu-contact-gmail'},animate_tooltip);
$(document).on('mouseleave','.menu-contact-gmail',{action:'down',text: '-------------',obj: '.menu-contact-gmail'},animate_tooltip);

$(document).on('mouseenter','.menu-contact-linkedin',{action:'up',text: 'Linkedin',obj: '.menu-contact-linkedin'},animate_tooltip);
$(document).on('mouseleave','.menu-contact-linkedin',{action:'down',text: '-------------',obj: '.menu-contact-linkedin'},animate_tooltip);

$(document).on('mouseenter','.menu-contact-pm',{action:'up',text: 'Personal message',obj: '.menu-contact-pm'},animate_tooltip);
$(document).on('mouseleave','.menu-contact-pm',{action:'down',text: '-------------',obj: '.menu-contact-pm'},animate_tooltip);