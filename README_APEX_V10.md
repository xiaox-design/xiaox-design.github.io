# Portfolio Apex Vitalis V10

This version rebuilds the first project detail page from the latest standalone Apex Vitalis artwork supplied in the conversation.

Key changes:
- Rebuilt Apex Vitalis from a fresh `apex-v10` asset namespace.
- Removed the previous `src/assets/apex-case` detail assets so the rebuilt Apex page cannot accidentally import the previous set.
- Cover now uses the full expanded and folded product renders together, with soft floating and pointer-drag interaction.
- Background → insights → sketch system → physical prototype → final product → structure → function → usage → dimensions → closing is the new narrative order.
- Sketch work is presented as the supplied consolidated sketch board; the physical prototype is presented as the supplied two-photo board.
- Final product is introduced immediately after prototype validation and is sized to remain fully legible within a screen-height composition.
- Final navigation is a single `返回作品目录` action at the bottom-right; no Next Project action is used on Apex.
- Moody cover robot sizes are overridden back to a smaller triangular composition.
- Existing route-top reset logic in `src/App.jsx` remains enabled so route changes start at scroll position 0 without smooth scrolling.

Build note: dependency installation could not be completed in the container because `npm install` timed out, so a browser build was not executed here.
