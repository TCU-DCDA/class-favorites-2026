# Class Favorites: Build It Together

WRIT 40363 · September 21, 2026

We will build one class favorites list together on the projector. You supply a favorite place; your instructor turns the submissions into JavaScript objects, adds the functions, and runs the page. Together, we will predict what should happen and troubleshoot what we see.

**You do not need to download files or write code during this shared activity.** Your job is to contribute, observe, ask questions, and explain what the code is doing.

## 1. Send one favorite

Open the submission link your instructor shares. If we use a Google Sheet, add one row in an empty row and leave your classmates' entries in place.

Supply these three pieces of information:

| name | category | why |
| --- | --- | --- |
| Campus Library | study | quiet tables upstairs |

- **name:** the name of a place you recommend.
- **category:** choose `dessert`, `study`, `coffee`, `outdoors`, or `food`.
- **why:** one short phrase explaining why a classmate might want to visit.

Submit ordinary text. Your instructor will add the JavaScript punctuation. If you cannot open the submission link, give your example aloud when invited.

## 2. Watch a submission become an object

Our example can become:

```js
{ name: 'Campus Library', category: 'study', why: 'quiet tables upstairs' }
```

As your instructor builds the list, discuss:

- Which parts are property names? Which parts are values?
- Why should every object use the same property names?
- What separates one object from the next in the array?
- If the array has three objects, how many cards should we expect?

The submission Sheet collects our examples. It does not automatically update the app; watch how your instructor translates a row into an object.

## 3. Predict before we run the code

First we will have data. Then your instructor will add the code that displays it.

Before each refresh or function call, predict what will change on the page. Be ready to explain:

- Why having an array does not, by itself, put cards on the page.
- What `displayFavorites()` does.
- Why rendering clears the old cards before drawing the list again.

## 4. Troubleshoot together

When something looks wrong, describe what you expected and what actually happened. Then suggest one place to look in the code.

We may compare a property name with the renderer, inspect capitalization or spaces, or read a console error. Some mistakes stop the code; others produce a page that looks almost right.

Your instructor may introduce a prepared mistake for discussion. You do not need to put deliberate errors in your own submission.

## 5. Explain what changed

When we add another favorite, watch for two separate actions:

**Change the array → call the rendering function.**

Closing question: **How did a classmate's submission become a card, and what would you check if the card were missing or incorrect?**

## After the shared exercise

When directed, open your own Project 2 tracker and follow [LAB13.5](https://tcu-dcda.github.io/WRIT40363_2026/labs/lab13_5.html). There, a form builds the object from what a user types. Your tracker uses additional fields, so follow the lab's names rather than copying the class example over your existing work.

No separate submission is needed for the shared demonstration. LAB13.5 is due **Tuesday, September 22, at 11:59 p.m.** Submit your tracker repository URL in its D2L dropbox.
