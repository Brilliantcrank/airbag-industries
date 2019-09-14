/*:._.:*:._.:*:._.:*:._.:*:._.:*:._

Flash Detect

Copyright (c) 2004 Polychrome Studio, Inc.
http://www.polychrome.org/
- - - - - - - - - - - - -
Created:   2004/08/06 11:40:36
Modified:  2004/14/10 16:15:30
Author(s): Christian Rocha

*:._.:*:._.:*:._.:*:._.:*:._.:*:._.:*/

function detectFlash()
{
    var version = 0;
    
    // Most browsers store plugin information in navigator.plugins...
    if (navigator.plugins && navigator.plugins.length) {
        
        var n = navigator.plugins["Shockwave Flash"];
        
        if(n && n.description) {
            var d = n.description;
            version = d.charAt(d.indexOf('.') - 1);
        }
    }
    
    // Internet Explorer, however, needs some VBScript for it's detection
    else {
        result = false;
        for(var i = 15; i >= 3 && result != true; i--) {
            execScript('on error resume next: result = IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.'+i+'"))','VBScript');
            version = i;
        }
    }
    
    return version;
    
};

function insertFlash(url, width, height, flashVars, quality)
{
	var url       = url       || 'about:blank',
	    width     = width     || 100,
	    height    = height    || 100,
	    flashVars = flashVars || false,
		quality   = quality   || 'high';
	
	var flashVarsObject = (flashVars) ? '<param name="FlashVars" value="' + flashVars + '">' : '',
        flashVarsEmbed  = (flashVars) ? ' flashVars="' + flashVars + '" ' : '';
		
	var flash = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="' + width + '" height="' + height + '">'
	         + '<param name="movie" value="' + url + '" />'
			 + '<param name="quality" value="' + quality + '" />'
			 + flashVarsObject
			 + '<embed src="' + url + '" quality="' + quality + '"' + flashVarsEmbed + ' pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="' + width + '" height="' + height + '"></embed>'
			 + '</object>';
	
	document.write(flash);	
}
