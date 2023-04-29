const fetch = require('node-fetch');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * Implement the loadPosts() function that returns a Promise with posts
 * loaded from https://jsonplaceholder.typicode.com/posts and alphabetically sorted by title
 * 
 * 
 * Usage example:
 * ```
 * loadPosts().then(posts => {
 *      console.log(posts); // [{ title: ... } ...]
 * });
 * ```
 */

async function loadPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url);
    const posts = await response.json();
    return posts.sort((a, b) => a.title.localeCompare(b.title));
}

module.exports = loadPosts;
