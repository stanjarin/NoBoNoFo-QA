# NoBo NoFo — PASS 4.3B CLEAN Gesture

PASS 3 replaces the old inline/Huck-only proof-of-concept with nine external book JSON files.

Implemented:
- nine-book Library
- lazy book loading
- Contents for every book
- chapter/page navigation across chapter boundaries
- external `/books/<id>.json` content; no book corpus embedded in app logic
- first-person EDITORIAL MODE
- direct visible-page text editing
- chapter-heading editing
- local persistence in browser localStorage
- explicit chapter repagination after edits
- export corrected book JSON
- import corrected book JSON
- editorial mode is separate from ordinary reader mode

Not in this pass:
- NoBo force/magic states
- H2G2 arming
- final visual camouflage/assets
- final typography/status-bar work
- corpus rats & mice

PASS 4 restores READY → ARMED → AUTO-PAID/PAID → CLEAN on top of this reader.

## Pass 4 — magic engine v1

Implemented state foundation:

- READY -> ARMED -> AUTO-PAID/PAID -> CLEAN
- RESET -> READY
- Session state is held in `sessionStorage`, so ordinary in-session navigation preserves it.
- ARMED pages resolve deliberately prepared `$$$` sockets to the force word.
- A landing page qualifies after 2.2 seconds stationary dwell.
- The next page move changes ARMED to PAID and records the departed payoff page.
- In PAID, only that recorded payoff page remains eligible to resolve its socket.
- CLEAN deliberately purges the force word; it never happens automatically.
- RESET deliberately returns to READY.
- No corpus prose is automatically rewritten: only explicit `$$$` sockets are substituted.
- Editorial mode remains manual SAVE PAGE.

Temporary desktop test controls (not intended as final performance UI):
- `F` — arm a force word.
- `C` — CLEAN, when PAID.
- `R` — RESET to READY.

Still to integrate in Pass 4 before approval:
- H2G2 ARMING Search route and visible “improbability” camouflage.
- Prepared author-specific `$$$` payoff grafts/sockets in the corpus.
- Touch/covert iPhone arming gesture replacing the temporary desktop `F` test control.
- Full iPhone state-transition torture test.

## Pass 4.2 — iPhone arming test
- H2G2 Contents shows SEARCH only while READY.
- Search accepts covert typed payload while visibly displaying `improbability`.
- Search/Return arms the payload and shows an Infinite Improbability result.
- Opening that result enters H2G2 reader; returning to Library leaves the session ARMED.
- Each book has one temporary `$$$` test socket on Chapter 1 / Page 1 so the full state engine can now be tested on iPhone.
- These `$$$` test pages are NOT final prose grafts and will be replaced.
- 2.2-second dwell then next page move triggers PAID; returning to the payoff page retains the force.
- CLEAN remains deliberately non-automatic. Final covert CLEAN gesture is still pending.

## Pass 4.2C cache fix
Immediate SW activation; old NoBo caches deleted; app HTML/book JSON network-first.
Visible marker: Pass 4.2C reader.

## Pass 4.2E — approved Search/Done choreography
- While the phone is concealed, the Search field shows the complete real covert input and can be corrected normally.
- The iPhone keyboard Search/Done action is the single state-change trigger.
- That same action arms the real word, changes the visible field to `improbability`, dismisses the keyboard, and produces plausible search results.
- No first-keystroke masking.
- Visible marker: `Pass 4.2E reader`.

## Pass 4.2F — input interception fix
Removed temporary global desktop C/R diagnostic shortcuts. They could fire while typing into H2G2 Search (R invoked RESET). Search input is now left alone until keyboard Search/Done submits it.
Visible marker: Pass 4.2F reader.

## Pass 4.2G — stale magic-state fix
Root cause found: Pass 4.2 builds all reused `nobonofo-magic-v1` in sessionStorage.
If an earlier build had reached ARMED, deploying/refeshing a newer build correctly preserved that ARMED state,
so H2G2 showed EXPORT instead of READY-only SEARCH.

Fix:
- Fresh development magic-state key: `nobonofo-magic-pass42g`, so this build starts READY.
- Temporary Library-only `RESET TEST` button for repeat testing without keyboard shortcuts.
- Temporary visible Library state marker: `STATE: READY / ARMED / PAID / CLEAN`.
- No book JSON changed. Do NOT upload `/books`.

## Pass 4.2H
- Explicit one-time READY initialization under a new session key.
- H2G2 shows SEARCH only in READY.
- Corrected stale README title.
- Books unchanged.

## Pass 4.2I
- Restored real iPhone horizontal flick navigation in reader pages.
- Left/right tap zones retained.
- SEARCH/arming and magic-state logic otherwise unchanged.
- New test-session key and cache identity.
- Books unchanged.

## Pass 4.2J
- Inactive temporary `$$$` sockets are suppressed instead of leaking visibly.
- ARMED substitution unchanged.
- PAID retains force only on exact payoff page.
- Swipe navigation retained.
- Books unchanged.

## Pass 4.3A
- Replaced temporary standalone `$$$.` test lines with separate author-specific prepared graft text.
- Genuine page text is preserved independently in `paragraphs`.
- Prepared payoff text lives in `force_paragraphs` and is rendered only while ARMED or on the exact PAID payoff page.
- Therefore other PAID pages/books are genuinely restored, not merely hiding a socket.
- Books changed in this build: upload `/books` too.

## Pass 4.3B
- Adds deliberate hidden PAID → CLEAN trigger.
- While PAID, long-press the visible page number for 1.2 seconds.
- CLEAN is silent and never automatic.
- CLEAN clears the stored force word, so even the exact payoff page renders its genuine `paragraphs`.
- Ordinary page taps/swipes do not trigger CLEAN.
- RESET remains distinct from CLEAN.
- Book JSON is unchanged from 4.3A.
