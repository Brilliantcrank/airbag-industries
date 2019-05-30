---
title: Waferthin.
id: 973
date: Wed, 11 Feb 2004 07:26:48 +0000
---

Last night I converted Airbag from <span class="caps">SHTML</span> to <span class="caps">PHP</span>. While the transition and page renaming was simple enough, getting it to work took no less than four people: myself, [Resonance](http://www.etherfarm.com/), [Waferbaby](http://www.waferbaby.com), and [Atlantian](http://www.atlantisnet.com).  
 After converting all the Moveabletype templates and hand coded pages like About or Contact, I rebuilt the entire website. The process went very quickly but resulted in every page coming up completely blank, not a drop of code could be seen when choosing View Source from a browser. Server logs were requested, Bush was blamed, and I was starting to think that blank isn’t so bad — blank is just the new white.  
 Still the troupe was determined to find the solution as the symptom had never been seen, let alone diagnosed before. Time passed, Waferbaby told a joke while Atlantian disappeared seemingly never to be heard from again.  
 Then with a spark triumphant the problem was found. Horns sounded and the heavens opened.  
 This site is constructed with the finest tool ever created for building websites. When I start building a new page BBEdit spits out a fresh new sheet with the proper <span class="caps">DOCTYPE</span> all ready to go. Along with the <span class="caps">DOCTYPE</span> is this line at the very top: <?xml version=”1.0″>.  
 The use of ‘<? ?>’ indicates to <span class="caps">PHP</span> that something must be processed between the question marks. So when the middleware tried to process “version=’1.0′” nothing came of it, resulting in blank pages as white and pure as virgin snow.  
 It might seem obvious now but late last night it was a mystery of the likes you have never seen.  
 Thank you again to the chaps (see above) who spent 20 minutes in a dark and smokey iChat window trying to help figure this out.  
 Ladies and gentlemen, Airbag’s regular service between cynicism and hyperbole will resume shortly.


