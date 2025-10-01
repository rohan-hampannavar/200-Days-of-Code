/*
===================================================================
Chapter: Promises, Chaining, .then, .catch, and Error Handling in JS
===================================================================

⚡ Introduction
---------------
In JavaScript, asynchronous operations (like fetching data from an API,
reading files, or waiting for timers) do not block the rest of the program.
Promises were introduced to handle these asynchronous operations more
elegantly compared to the older callback style ("callback hell").

A Promise is like a "contract of future value." Imagine ordering food online.
The restaurant promises your food will arrive later:
  - If the food is delivered → Promise is "fulfilled."
  - If the restaurant cancels or fails → Promise is "rejected."
  - While you wait → Promise is in "pending" state.

-------------------------------------------------------------------
Promise States
-------------------------------------------------------------------
1. Pending   → Initial state, still waiting for result.
2. Fulfilled → Operation succeeded, value is available.
3. Rejected  → Operation failed, error is available.

-------------------------------------------------------------------
Key Methods
-------------------------------------------------------------------
- .then(onFulfilled, onRejected)
    Executes when promise is fulfilled (or rejected if you pass second param).
- .catch(onRejected)
    Executes if an error or rejection happens.
- .finally(onFinally)
    Executes no matter what (success or error). Often used for cleanup.

-------------------------------------------------------------------
Promise Chaining
-------------------------------------------------------------------
You can "chain" multiple `.then()` calls. The return value of one `.then()`
is automatically passed to the next `.then()`. This creates a clean,
step-by-step flow of asynchronous operations without messy nesting.
*/


/* =========================================================================
Example 1: Basic Promise
========================================================================= */

let promise = new Promise((resolve, reject) => {
    // Simulating an async task using setTimeout
    setTimeout(() => {
        let success = true; // try changing to false to see rejection
        if (success) {
            resolve("Task completed successfully!");
        } else {
            reject("Task failed!");
        }
    }, 1000);
});

promise
    .then(result => {
        // Runs if promise is fulfilled
        console.log("✅ Example 1 Success:", result);
    })
    .catch(error => {
        // Runs if promise is rejected
        console.log("❌ Example 1 Error:", error);
    })
    .finally(() => {
        // Runs always
        console.log("🔄 Example 1 Finished.");
    });


/* =========================================================================
Example 2: Promise Chaining
========================================================================= */

new Promise((resolve) => {
    resolve(2); // Start with value 2
})
.then(value => {
    console.log("Step 1:", value); 
    return value * 2; // Passes 4 to next
})
.then(value => {
    console.log("Step 2:", value); 
    return value * 3; // Passes 12 to next
})
.then(value => {
    console.log("Step 3:", value); 
    return value * 4; // Passes 48 to next
})
.catch(error => {
    console.log("Error caught:", error);
});


/* =========================================================================
Example 3: Fetch API with Error Handling
========================================================================= */

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok!");
        }
        return response.json();
    })
    .then(data => {
        console.log("✅ Example 3 Data received:", data);
    })
    .catch(error => {
        console.log("❌ Example 3 Fetch error:", error.message);
    });


/* =========================================================================
Example 4: Chaining Multiple API Calls
========================================================================= */

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(user => {
        console.log("👤 Example 4 User:", user.name);
        return fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
    })
    .then(response => response.json())
    .then(posts => {
        console.log("📝 Example 4 Posts:", posts.length, "posts found");
    })
    .catch(error => {
        console.log("❌ Example 4 Error:", error.message);
    });



/* =========================================================================
Exercises with Solutions
========================================================================= */


/* ========================================================
EASY 1:
Make a promise that resolves after 2 seconds with "Hello World!".
======================================================== */

let helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello World!");
    }, 2000);
});

helloPromise.then(message => {
    console.log("✅ EASY 1:", message);
});


/* ========================================================
EASY 2:
Modify the above promise to sometimes reject. Handle with .catch().
======================================================== */

let randomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = Math.random() > 0.5; // Random true/false
        if (success) {
            resolve("Success! The coin landed on heads.");
        } else {
            reject("Failure! The coin landed on tails.");
        }
    }, 2000);
});

randomPromise
    .then(msg => {
        console.log("✅ EASY 2:", msg);
    })
    .catch(err => {
        console.log("❌ EASY 2:", err);
    });


/* ========================================================
MEDIUM 3:
Fetch posts from API and log only the first 5 titles.
======================================================== */

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network error while fetching posts.");
        }
        return response.json();
    })
    .then(posts => {
        console.log("✅ MEDIUM 3: First 5 post titles:");
        posts.slice(0, 5).forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });
    })
    .catch(error => {
        console.log("❌ MEDIUM 3 Error:", error.message);
    });


/* ========================================================
HARD 4:
Fetch a user by ID → then fetch their posts → then fetch comments
for the first post. Handle errors at each stage.
======================================================== */

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        if (!response.ok) throw new Error("Failed to fetch user.");
        return response.json();
    })
    .then(user => {
        console.log("👤 HARD 4 User:", user.name);
        return fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
    })
    .then(response => {
        if (!response.ok) throw new Error("Failed to fetch posts.");
        return response.json();
    })
    .then(posts => {
        console.log("📝 HARD 4 Posts count:", posts.length);
        if (posts.length === 0) throw new Error("No posts found for this user.");
        let firstPost = posts[0];
        console.log("📌 First Post Title:", firstPost.title);
        return fetch(`https://jsonplaceholder.typicode.com/posts/${firstPost.id}/comments`);
    })
    .then(response => {
        if (!response.ok) throw new Error("Failed to fetch comments.");
        return response.json();
    })
    .then(comments => {
        console.log("💬 HARD 4 Comments on first post:", comments.length);
        comments.slice(0, 3).forEach((c, i) => {
            console.log(`${i + 1}. ${c.body}`);
        });
    })
    .catch(error => {
        console.log("❌ HARD 4 Error:", error.message);
    });


/* ========================================================
HARD 5:
Implement retryFetch(url, retries).
======================================================== */

function retryFetch(url, retries) {
    return new Promise((resolve, reject) => {
        function attemptFetch(attempt) {
            console.log(`🔄 Attempt ${attempt} to fetch: ${url}`);
            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error("Bad response.");
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => {
                    if (attempt < retries) {
                        console.log("⚠️ Failed, retrying...");
                        attemptFetch(attempt + 1);
                    } else {
                        reject(`❌ Failed after ${retries} retries: ${error.message}`);
                    }
                });
        }
        attemptFetch(1);
    });
}

retryFetch("https://jsonplaceholder.typicode.com/posts/1", 3)
    .then(data => {
        console.log("✅ HARD 5 Data fetched successfully:", data);
    })
    .catch(err => {
        console.log(err);
    });



/* =========================================================================
Same Problems Using async/await (modern style used in React)
========================================================================= */

async function easy1Async() {
    // Returns "Hello World!" after 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("✅ EASY 1 (async/await): Hello World!");
}

async function medium3Async() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Network error while fetching posts.");
        let posts = await response.json();
        console.log("✅ MEDIUM 3 (async/await): First 5 titles:");
        posts.slice(0, 5).forEach((p, i) => console.log(`${i + 1}. ${p.title}`));
    } catch (error) {
        console.log("❌ MEDIUM 3 Error:", error.message);
    }
}

async function hard4Async() {
    try {
        let userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!userRes.ok) throw new Error("Failed to fetch user.");
        let user = await userRes.json();
        console.log("👤 HARD 4 (async/await) User:", user.name);

        let postsRes = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
        if (!postsRes.ok) throw new Error("Failed to fetch posts.");
        let posts = await postsRes.json();
        if (posts.length === 0) throw new Error("No posts found.");
        console.log("📝 HARD 4 (async/await) Posts count:", posts.length);

        let commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${posts[0].id}/comments`);
        if (!commentsRes.ok) throw new Error("Failed to fetch comments.");
        let comments = await commentsRes.json();
        console.log("💬 HARD 4 (async/await) First post comments:", comments.length);
    } catch (error) {
        console.log("❌ HARD 4 Error:", error.message);
    }
}

// Run async examples
easy1Async();
medium3Async();
hard4Async();


/*
===================================================================
🔑 Final Key Takeaways:
1. Promises handle async work with .then() / .catch().
2. Promise chaining avoids messy nested callbacks.
3. Fetch returns promises; always check response.ok.
4. Async/await makes code look synchronous but still async.
5. Error handling is crucial for real-world apps (especially React).
6. Retry logic is an advanced but essential async pattern.
===================================================================
*/
