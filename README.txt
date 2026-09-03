# NoBoNoFo POC 0.2

Diagnostic build.

Changes from 0.1:
- Uses localStorage instead of sessionStorage.
- Visible DEBUG FORCE on Library and reading page.
- Simpler $$$ replacement using split/join.
- Reading text rendered with textContent instead of innerHTML.

Test:
1. Open H2G2.
2. Long-press white page.
3. Enter MUNGO.
4. Tap Arm.
5. Back to Library: DEBUG FORCE must read MUNGO.
6. Open another book > Contents > Chapter.
7. Reading page: DEBUG FORCE must read MUNGO, and MUNGO must appear in prose.

If Library debug says MUNGO but prose does not, substitution/rendering is at fault.
If Library debug still says (none), the input/storage path is at fault.
