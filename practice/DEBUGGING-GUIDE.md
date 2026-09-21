# Class Favorites: Subtle Data Errors

Instructor reference for the shared September 21 demonstration. Project one or two examples for whole-class troubleshooting after adding `displayFavorites()`. The full 5–8 minute dataset activity below is optional; students do not need their own copy during the shared exercise.

All place descriptions are sample teaching data, not verified recommendations.

## Setup

### Run the included practice page

Open [index.html](index.html) in a browser, directly or through your existing Live Server setup. It loads the debug dataset followed by [functions.js](functions.js), which supplies `addFavorite()`, `displayFavorites()`, the submit listener, and the initial render. No installation is needed.

**Optional syntax challenge:** the current dataset has the required commas. You can temporarily remove the comma after the Maple Street Cafe object to demonstrate a parse error. Restore it and refresh before investigating the six data-quality issues below.

For a working recovery version, change the dataset script in `practice/index.html` from `favorites-debug.js` to `favorites-clean.js`. Load only one dataset at a time.

The functions adapt LAB13.5 to this exercise's three fields (`name`, `category`, `why`); they do not require the lab's rating, notes, or date fields. Rendering uses DOM elements and `textContent` for form input rather than the lab's HTML interpolation. Explicit string conversion keeps the same visible debugging clues. New submissions require all three fields, are added to the array, clear the form, and trigger a render. Nothing is saved across refreshes.

### Alternatively, use the original class demo

1. Keep a copy of the working `app.js` so you can return to it.
2. Open [favorites-debug.js](favorites-debug.js).
3. Replace only the existing `favorites` declaration in `app.js` with the practice declaration. Keep the element lookup, rendering function, and initial call.
4. Save and refresh with the browser console open.

Do not add this file as a second script or paste its declaration below the existing one: that would declare `favorites` twice. The original repository starter needs a rendering function before this activity will show cards; the teaching guide contains one.

## Student prompt

The dataset is valid JavaScript, but some records do not follow our rules:

- Every favorite has `name`, `category`, and `why` properties.
- All three values are strings containing meaningful text.
- Categories use lowercase values with no extra spaces: `dessert`, `study`, `coffee`, `outdoors`, or `food`.
- For this exercise, an identical record should appear only once.

Compare the cards with the source data. Find six records that need attention. For each one, explain:

1. What is wrong?
2. Does the page reveal the problem, hide it, or display something misleading?
3. How would you fix it without inventing missing information?

Start with observation, then edit. A clean console does not guarantee clean data.

## Suggested pacing

| Minutes | Activity |
| --- | --- |
| 0–1 | Load the dataset and read the rules |
| 1–4 | Pairs inspect cards and source; identify issues |
| 4–6 | Share fixes and distinguish visible from hidden errors |
| 6–8 | If time permits, check corrected data and discuss a console probe |

## Instructor key

Array indexes below start at zero. Expected display behavior applies to the included practice renderer and the template-literal renderer in the September 21 teaching guide.

| Index / entry | Issue | Likely symptom | Correction |
| --- | --- | --- | --- |
| `2`: Maple Street Cafe | `Why` has an uppercase `W`; the renderer reads `why` | The reason displays as `undefined`; no exception is required | Rename the key to `why` |
| `3`: River Trail | Category has a trailing space | The card can look correct, but an exact comparison with `'outdoors'` fails | Remove the trailing space |
| `4`: Corner Espresso | Category is `'Coffee'` instead of `'coffee'` | CSS uppercases both on screen, concealing the mismatch; exact comparisons fail | Use `'coffee'` |
| `5`: unnamed entry | Name contains only spaces | The card has no meaningful visible title; the string is nevertheless truthy | Ask for the missing name or omit the record pending clarification |
| `6`: Oak Park | `why` is an array instead of a string | Interpolation produces `shade,walking paths`, which can look like merely awkward writing | Use a string such as `'shade and walking paths'` |
| `7`: Melt Ice Cream | Exact duplicate of index `0` | Two identical cards | Remove one copy under the stated exercise rule |

The first two records are controls: they follow the rules. Do not tell students every record is broken.

The duplicate is a data-quality issue under this exercise's rule, not a JavaScript error. A real class collection might reasonably allow two students to recommend the same place; that would require a different rule or a contributor field.

## Optional console probes

Run these before editing, while the indexes still match the original dataset. Choose one or two; do not turn this into another syntax lesson.

```js
favorites[2].why                 // undefined
favorites[2].Why                 // 'room to read between classes'

favorites[3].category === 'outdoors' // false
favorites[3].category.length        // 9, not 8

favorites[4].category === 'coffee'   // false

Boolean(favorites[5].name)        // true
favorites[5].name.trim() === ''  // true

Array.isArray(favorites[6].why)   // true
```

The whitespace-only name connects directly to LAB13.5's `.trim()` validation. Category consistency becomes especially important when the class reaches filtering.

## Recovery and closing check

[favorites-clean.js](favorites-clean.js) provides one corrected version. It contains six records because it removes the exact duplicate and omits the unnamed record rather than guessing a name. This is one defensible repair, not the only possible response to missing data.

Replace only the array declaration, save, and refresh. Check that six cards appear, each has a meaningful title and reason, and the categories match the allowed values in the source. Call `displayFavorites()` again: it should still show six cards.

Exit question: **Which error was hardest to notice on the page, and why did the browser allow it?**
