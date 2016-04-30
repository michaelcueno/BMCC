var already_played = 0; 


if(typeof navigator.plugins['Shockwave Flash']!='undefined' && !already_played)
{ 
  already_played = 1; 
  var overlay = document.createElement('div');
  overlay.id = 'overlay';

  var intro = document.createElement('object'); 
  intro.innerHTML = "codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' WIDTH='400' HEIGHT='500' ALIGN='middle'><PARAM NAME=movie VALUE='intro.swf'><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFF><EMBED src='intro.swf' quality=high bgcolor=#FFF WIDTH='400' HEIGHT='500' ALIGN='middle' TYPE='application/x-shockwave-flash' PLUGINSPAGE='http://www.macromedia.com/go/getflashplayer'></EMBED>";

	overlay.appendChild(intro); 
	document.body.appendChild(overlay);

}else{ 
  alert("no flash") } 



