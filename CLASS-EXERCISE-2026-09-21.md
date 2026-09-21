# Class Favorites: Collaborative Live-Coding Guide

WRIT 40363 · Meeting 12 · September 21, 2026

**One projected app, built together in 25–30 minutes.** Students submit a favorite; the instructor assembles the objects, adds function code, and operates the browser. The class predicts results and troubleshoots together. Students do not download, clone, or edit this project during the shared activity.

## Class-period allocation

| Time | Activity |
| --- | --- |
| 10:00–10:05 | Opening; students submit one favorite |
| 10:05–10:40 | Deck 09-1 and questions |
| 10:40–11:10 | Collaborative Class Favorites exercise |
| 11:10–11:45 | Apply the pattern in personal trackers through LAB13.5 |
| 11:45–11:50 | Exit check and homework reminder |

The deck has a protected 35-minute allocation. If it needs more time, shorten the shared exercise using the fallback below.

## Before class

1. Share [the student instructions](practice/STUDENT-SETUP.md) through your normal course channel.
2. Choose one submission channel. A shared Google Sheet works well: create columns `name`, `category`, and `why`, and let students add one row each. Share its link in class. Spoken submissions are a sufficient fallback.
3. Put one example row in the Sheet: `Campus Library | study | quiet tables upstairs`. Tell students to use `dessert`, `study`, `coffee`, `outdoors`, or `food` for category. No JavaScript punctuation is needed in their submissions.
4. Open VS Code and the top-level `index.html` in the browser. Show the editor and page side by side; keep DevTools Console available and enlarge text for projection.
5. Open [Deck 09-1](https://tcu-dcda.github.io/WRIT40363_2026/decks/deck09-1/index.html), [LAB13.5](https://tcu-dcda.github.io/WRIT40363_2026/labs/lab13_5.html), and [practice/functions.js](practice/functions.js) as your function-code reference.
6. Preserve a copy of the current working `app.js` before staging the live build. The current app already contains data and functions, and the main HTML already contains the matching form. Do not expect the current page to start blank.
7. For the live build, prepare `app.js` with only `let favorites = [];`. Keep the working HTML and CSS. Until functions are added, no cards appear and the form is not wired; leave the form unused during this stage.

Staging the starting state is an instructor preparation step; this guide does not reset the working app for you. No packages, backend, Sheet integration, or deployment are needed. Opening the local HTML directly works.

## The shared exercise: 30-minute maximum

### 0–8 minutes: turn submissions into objects

Project three or four submitted rows. Translate the first into an object slowly, explaining the property/value pairs, quotes, colons, and braces:

```js
let favorites = [
  { name: 'Campus Library', category: 'study', why: 'quiet tables upstairs' }
];
```

Add two or three more submissions, with students calling out the next property or separator. Preserve consistent keys. If a place or reason contains an apostrophe, demonstrate choosing double quotes around that string or escaping the apostrophe.

Use only a few submissions live to preserve time; the rest can remain in the Sheet for later. The Sheet is a collection surface, not a live data connection.

Ask students to predict `favorites.length` and `favorites[0].name`; check them in the console after saving and refreshing. Ask: **“We have the data. Why are there still no cards?”**

### 8–17 minutes: add the functions and predict the display

Use `practice/functions.js` as the reference. Add these parts below the array, pausing to explain their jobs:

1. The `form` and `favoritesList` element lookups.
2. `displayFavorites()`, which clears the display, handles an empty array, and builds one card per object.
3. The initial `displayFavorites();` call.

You can paste the rendering function as a prepared block and trace it together; students do not need to watch every line being typed. The current function uses DOM elements and `textContent`, matching the supplied CSS and displaying submitted text as text.

Before refreshing, ask: **“How many cards should we see, and where will each card's text come from?”** Compare the result with the prediction. Call `displayFavorites()` again to show that clearing the container prevents duplicate cards.

If you paste the entire functions file at once, explain that it also includes `addFavorite()` and the submit listener. Paste it only once, below the array; do not load it separately as well.

### 17–25 minutes: troubleshoot as a class

Start with any actual mismatch. If everything works, introduce one prepared error at a time into a class object, then undo it after discussion:

- Rename `why` to `Why`: the renderer displays `undefined`.
- Change a category to `Coffee` or add a trailing space: the page may conceal the inconsistency, while an exact comparison reveals it.
- If useful, briefly remove a comma between objects: the file fails to parse and the console identifies a syntax error.

For each case, ask: **“What did we expect? What do we see? Where should we look? What single change should we try?”** Let students propose the correction before you make it.

The full [debug dataset](practice/favorites-debug.js) and [instructor key](practice/DEBUGGING-GUIDE.md) are backup materials. Do not require finding all six issues within this short demonstration.

### 25–30 minutes: connect adding to rendering

Choose one more submitted favorite and add it through the console:

```js
favorites.push({ name: 'Library', category: 'study', why: 'a quiet place to focus' });
```

Pause: the array changed, but the page did not. Then run:

```js
displayFavorites();
```

Ask a student to narrate the sequence. Refresh once to show that the console-added item disappears while the objects saved in `app.js` return.

If time permits, add `addFavorite()` and `form.addEventListener('submit', addFavorite);` from the reference file if they are not already present. Submit one example through the form to connect Friday's events to today's array. Explain that the handler builds the same kind of object, pushes it, clears the form, and renders. Otherwise, make that connection during LAB13.5 work time.

**Stop here.** Deletion, search/filter, and persistence belong to later meetings.

## Troubleshooting the demonstration

| Symptom | First check |
| --- | --- |
| No cards | First console error, array syntax, and the initial `displayFavorites()` call |
| `Cannot read properties of null` at `addEventListener` | The loaded HTML must contain `id="add-favorite-form"`; load the script after the markup |
| `favorites` already declared | Keep only one array declaration; do not combine two dataset files |
| `undefined` on a card | Compare the object's property name with the one the renderer reads |
| Repeated cards after rendering | Clear the container inside the function, before the loop |
| New console-added favorite disappears on refresh | Expected: this app does not persist runtime changes |

## If only 15 minutes remain

Spend 4 minutes converting two submissions into objects, 5 minutes adding and tracing the renderer, 4 minutes discussing one deliberate error, and 2 minutes explaining the connection to LAB13.5. Skip the form demonstration and full dummy-data exercise.

## Transition to students' own trackers

Now have students open their own Project 2 repositories and follow LAB13.5. The shared build established the pattern; the lab connects their existing form to it.

| Shared example | LAB13.5 tracker |
| --- | --- |
| Instructor translates a submitted row | Form handler reads user-entered values |
| `name`, `category`, `why` | `name`, `category`, `rating`, `notes`, `dateAdded` |
| Root-level `app.js` | `js/app.js` |
| DOM elements and `textContent` in the supplied reference | Template literals and `innerHTML` in the lab example |

Both change an array and call `displayFavorites()`. Students should follow their lab's fields and selectors, keeping their own tracker work intact.

Exit question: **“How did a classmate's submission become a card, and what would you check if it were missing or incorrect?”**

No separate submission is needed for the shared demonstration. LAB13.5 is due Tuesday, September 22, at 11:59 p.m.; students submit their tracker repository URL in D2L.

[Course schedule](https://tcu-dcda.github.io/WRIT40363_2026/schedule.html)
