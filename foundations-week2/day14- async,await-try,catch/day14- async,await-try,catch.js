/*
===================================================================
Chapter: Async/Await, Try/Catch, and Modern Error Handling in JS
===================================================================

⚡ Introduction
---------------
Async/Await is a modern way of handling asynchronous code in JavaScript.
It was introduced in ES2017 (ES8) and is built on top of Promises, but
it makes asynchronous code look and behave more like synchronous code.

Instead of chaining multiple `.then()` calls, you can "pause" your code
execution with `await`, and resume when the Promise resolves or rejects.

Think of it like this:
- `async` keyword → marks a function as asynchronous and makes it
  automatically return a Promise.
- `await` keyword → pauses execution until a Promise is settled
  (fulfilled or rejected).
- `try/catch` → used for error handling in async functions, replacing
  `.catch()` in promise chaining.

-------------------------------------------------------------------
Why Async/Await?
-------------------------------------------------------------------
1. Cleaner and more readable than `.then()` chaining.
2. Easier error handling with `try/catch`.
3. Popular and heavily used in React, Node.js, and modern JavaScript.

-------------------------------------------------------------------
Rules of Async/Await
-------------------------------------------------------------------
1. You can only use `await` inside an `async` function.
2. `await` pauses until the Promise settles.
3. If the Promise is rejected, it throws an error you can catch in `catch`.

-------------------------------------------------------------------
Example Flow
-------------------------------------------------------------------
- With Promises:
    fetchData()
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

- With Async/Await:
    try {
        let res = await fetchData();
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
===================================================================
*/


/* =========================================================================
Example 1: Basic Async/Await with setTimeout
========================================================================= */

async function example1() {
    // wait for 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("✅ Example 1: Hello World after 2 seconds (async/await)");
}
example1();


/* =========================================================================
Example 2: Async function with try/catch (error handling)
========================================================================= */

async function example2() {
    try {
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                let success = Math.random() > 0.5; // random success/failure
                if (success) resolve("Task succeeded!");
                else reject(new Error("Task failed!"));
            }, 2000);
        });
        console.log("✅ Example 2:", result);
    } catch (error) {
        console.log("❌ Example 2 Error:", error.message);
    }
}
example2();


/* =========================================================================
Example 3: Fetch API with async/await + error handling
========================================================================= */

async function example3() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) throw new Error("Network response was not ok!");
        let data = await response.json();
        console.log("✅ Example 3 Data:", data);
    } catch (error) {
        console.log("❌ Example 3 Error:", error.message);
    }
}
example3();


/* =========================================================================
Example 4: Chaining API calls with async/await
========================================================================= */

async function example4() {
    try {
        let userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!userRes.ok) throw new Error("Failed to fetch user.");
        let user = await userRes.json();
        console.log("👤 Example 4 User:", user.name);

        let postsRes = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
        if (!postsRes.ok) throw new Error("Failed to fetch posts.");
        let posts = await postsRes.json();
        console.log("📝 Example 4 Posts count:", posts.length);

        let commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${posts[0].id}/comments`);
        if (!commentsRes.ok) throw new Error("Failed to fetch comments.");
        let comments = await commentsRes.json();
        console.log("💬 Example 4 First Post Comments:", comments.length);
    } catch (error) {
        console.log("❌ Example 4 Error:", error.message);
    }
}
example4();


/* =========================================================================
Exercises with Solutions (Async/Await)
========================================================================= */

/* ========================================================
EASY 1:
Resolve "Hello World!" after 2 seconds.
======================================================== */
async function easy1Async() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("✅ EASY 1 (async/await): Hello World!");
}
easy1Async();

/* ========================================================
EASY 2:
Sometimes reject the promise randomly. Handle with try/catch.
======================================================== */
async function easy2Async() {
    try {
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                let success = Math.random() > 0.5;
                if (success) resolve("Success! Coin landed heads.");
                else reject(new Error("Failure! Coin landed tails."));
            }, 2000);
        });
        console.log("✅ EASY 2 (async/await):", result);
    } catch (error) {
        console.log("❌ EASY 2 (async/await) Error:", error.message);
    }
}
easy2Async();

/* ========================================================
MEDIUM 3:
Fetch posts and print first 5 titles.
======================================================== */
async function medium3Async() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Network error while fetching posts.");
        let posts = await response.json();
        console.log("✅ MEDIUM 3 (async/await): First 5 Titles:");
        posts.slice(0, 5).forEach((p, i) => console.log(`${i + 1}. ${p.title}`));
    } catch (error) {
        console.log("❌ MEDIUM 3 Error:", error.message);
    }
}
medium3Async();

/* ========================================================
HARD 4:
Fetch user → fetch posts → fetch comments for first post.
======================================================== */
async function hard4Async() {
    try {
        let userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!userRes.ok) throw new Error("Failed to fetch user.");
        let user = await userRes.json();
        console.log("👤 HARD 4 (async/await) User:", user.name);

        let postsRes = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
        if (!postsRes.ok) throw new Error("Failed to fetch posts.");
        let posts = await postsRes.json();
        if (!posts.length) throw new Error("No posts found.");
        console.log("📝 HARD 4 (async/await) Posts count:", posts.length);

        let commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${posts[0].id}/comments`);
        if (!commentsRes.ok) throw new Error("Failed to fetch comments.");
        let comments = await commentsRes.json();
        console.log("💬 HARD 4 (async/await) First Post Comments:", comments.length);
    } catch (error) {
        console.log("❌ HARD 4 Error:", error.message);
    }
}
hard4Async();

/* ========================================================
HARD 5:
Implement retryFetch(url, retries) with async/await.
======================================================== */
async function retryFetch(url, retries) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`🔄 Attempt ${attempt} fetching: ${url}`);
            let response = await fetch(url);
            if (!response.ok) throw new Error("Bad response.");
            let data = await response.json();
            return data; // success
        } catch (error) {
            if (attempt === retries) throw new Error(`Failed after ${retries} retries: ${error.message}`);
            console.log("⚠️ Retry after failure...");
        }
    }
}

(async () => {
    try {
        let data = await retryFetch("https://jsonplaceholder.typicode.com/posts/1", 3);
        console.log("✅ HARD 5 (async/await):", data);
    } catch (error) {
        console.log("❌ HARD 5 Error:", error.message);
    }
})();


/*
===================================================================
🔑 Final Key Takeaways:
1. `async` makes a function return a Promise.
2. `await` pauses execution until a Promise settles.
3. Use `try/catch` for error handling instead of .catch().
4. Async/await makes async code much cleaner and easier to read.
5. Fetch with async/await is heavily used in React (with useEffect).
6. Retry logic is an advanced async pattern useful in real-world apps.
===================================================================
*/
