// ========================================================
// Day 12: Fetch API Basics (GET requests + JSON parsing)
// ========================================================

// --------------------------------------------------------
// 1. Fetch Basics (Theory)
// --------------------------------------------------------
// - fetch(url) returns a Promise (async).
// - By default, it sends a GET request.
// - .then(response => response.json()) → parses JSON body.
// - .catch(err => ...) → handles errors (network issues).
// - Always test by logging results to console first.
// - Common issues: 
//     • Forgetting to use .json()
//     • Not handling async properly
//     • API might block (CORS)
// - Modern syntax: async/await for cleaner code.

// Example (promise style):
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));

// Example (async/await style):
async function getPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}
getPost();

// --------------------------------------------------------
// 2. 5 Practice Exercises
// --------------------------------------------------------

// Q1: Fetch 10 posts
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log("First 10 posts:", data.slice(0, 10)));

// Q2: Fetch single user (id=3)
fetch("https://jsonplaceholder.typicode.com/users/3")
  .then(res => res.json())
  .then(user => console.log("User 3:", user));

// Q3: Fetch comments of post 1
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then(res => res.json())
  .then(comments => console.log("Comments on Post 1:", comments));

// Q4: Fetch a random joke
fetch("https://official-joke-api.appspot.com/random_joke")
  .then(res => res.json())
  .then(joke => console.log(`Joke: ${joke.setup} - ${joke.punchline}`));

// Q5: Fetch Pokémon data (pikachu)
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(res => res.json())
  .then(pokemon => console.log("Pikachu Data:", pokemon));

// --------------------------------------------------------
// 3. Why This Matters for React (Theory)
// --------------------------------------------------------
// - React apps rely heavily on fetching APIs (REST, GraphQL).
// - Mastering fetch is core before using axios or React Query.
// - Console.log first → ensures data shape is understood.
// - API data powers lists, cards, dashboards, search, etc.
// - Clean error handling and async/await prevent crashes.

// --------------------------------------------------------
// Summary
// --------------------------------------------------------
// ✅ fetch(url) returns a Promise
// ✅ response.json() parses body
// ✅ Error handling with .catch / try...catch
// ✅ Practiced with 5 real APIs (posts, users, comments, jokes, Pokémon)
// ✅ Foundation for React data fetching (useEffect + state)
// ========================================================
