import fetch from 'node-fetch';

export class ApiController {
    constructor() {
        this.commentsURL = 'https://jsonplaceholder.typicode.com/comments/1';
        this.postsURL = 'https://jsonplaceholder.typicode.com/posts/2';
    };

    async fetchComments() {
        const response = await fetch(this.commentsURL);
        return response.json();
    };

    async fetchPosts() {
        const response = await fetch(this.postsURL);
        return response.json();
    };

    async fetchData() {
        try {
            const [comments, posts] = await Promise.all([this.fetchComments(), this.fetchPosts()]);
            return { comments, posts };
        } catch (error) {
            throw new Error('An error occurred: ' + error.message);
        }
    };

    async fetchFasterResult() {
        try {
            return Promise.race([this.fetchComments(), this.fetchPosts()]);
        } catch (error) {
            throw new Error('An error occurred: ' + error.message);
        }
    }
};
