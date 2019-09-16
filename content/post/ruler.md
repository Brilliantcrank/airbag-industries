---
title: Ruler.
id: 4867
date: Sun, 11 Jun 2006 16:53:04 +0000
---

Debugging style sheets isn’t a whole lot of fun. Especially for persons, like me, who aren’t knee deep in BBEdit all day long. Today I am trying to get boxes to float and position the way I want them too. It’s not rocket science and I’ve done it many, many times before but as each site is different, so are the pieces to the puzzle.  

One of the more frustrating difficulties in this work is deciphering what causes a box to behave differently between all three browsers. Specifically, why is that box wider in IE when it fits fine in Firefox and Safari or visa-versa. The methods for finding the problem are good and many. On the Mac I use a combination of solid background colors assigned to each box I’m working with and measure them [xScope](http://www.iconfactory.com/xs_home.asp), that wonderful utility available from Iconfactory that lets me bring a ruler overtop of any application for taking accurate measurements.  

Still I have to test for Internet Explorer and that’s on a separate <span class="caps">PC</span> where xScope can’t be used. I know there are alternatives but I hate having to buy and/or install another piece of software just so I can get a quick measurement of a box width.  

And then it dawned on me that any image can be placed in the background of almost any block level element. So why not create an image of a ruler? Duh.



<div style="width:402px;height:28px;background:url(https://www.airbagindustries.com/bucket/mini_tape.gif) no-repeat;"></div>[So here it is](https://www.airbagindustries.com/bucket/tape.gif.zip), here you have it, a simple image that can be applied as the background to most block level elements that will help you get an idea what’s going on between browsers and platforms without the need for another application. It has already saved me a bit of time and could do the same for you.





