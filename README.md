# ureeqa-challenge
Full Stack Developer challenge to implement Sieve of Eratosthenes algorithm and find a median of the list.

Function
Given the upper limit of n, write a function that will find the median prime number(s) of the set of
prime numbers less than n

Example:
1. If n = 10, the set of prime numbers less than 10 is `[2,3,5,7]`, and so the medians are `[3,5]`
2. If n = 18, the set of prime numbers less than 18 is `[2,3,5,7,11,13,17]`, and so the median
is `[7]`

To run the app follow these steps:

- Clone the repository: `git clone https://github.com/shahaadesh5/ureeqa-challenge.git`
- `cd server`
- Install the backend dependencies: `npm i`
- Start the server: `npm start`
- The server starts at `http://localhost:5000`
- In a new terminal window, `cd web`
- Install the frontend dependencies: `npm i`
- Start the frontend app: `npm run start`
- Frontend Starts at `http://localhost:3000`

Routes exposed:

| METHOD | ROUTE | BODY DATA |
| ------------- |:-------------:| -----:|
| POST | `http://localhost:5000/prime` | `{n: 10}` | 

Answers to questions:

1. Do you have production experience with JavaScript prior to the submission of this code
challenge? If yes, for how long?

Ans: Yes, I have deployed JS applications over Heroku, AWS, and Azure platforms. I have about 2+ years of deploying over these platforms.

2. Do you have production experience with JavaScript Frameworks (e.g React.js, Vue.js,
Angular.js, jQuery, Backbone, Ember etc) prior to the submission of this code challenge?
If yes, for how long?

Ans: Yes, I have worked with all 3 frontend frameworks (React: 2 years; Vue: 1 year; Angular: 1 year;) along with JS and jQuery. I have read upon Backbone and Ember and as they are js based frameworks, it won't be difficult to switch to either of those. I recently got adapted to Nest.js (based on express.js) and Next.js (based on server rendered react)