"use strict";function TagScroller(t){var o=.1,r=0;!function e(){r+=(window.pageYOffset/2-parseFloat(r.toFixed(2)))*o;t.scrollLeft=r;requestAnimationFrame(e)}()}