"use strict";function TagScroller(t){var e=new ScreenProgress(t,{firstEl:!0}),r=t.querySelector(".tag-scroller__track"),s=r.scrollWidth-window.innerWidth;e.onProgress(function(t){t<-.1&&(r.style.opacity=0),.76<t&&(r.style.opacity=0),e.step(t,-.1,0,function(t){r.style.opacity=t}),e.step(t,.66,.76,function(t){r.style.opacity=1-t}),e.step(t,-.1,.76,function(t){r.style.transform="translateY(5rem) translatey(".concat(-10*t,"rem)"),r.scrollLeft=s*t})})}