# GitHub Repo Finder

A vanilla JavaScript web app that lets you search any GitHub user and instantly view their profile and public repositories.

**Live Demo:** [https://github-repo-founder.vercel.app}

---

## Features

- Search any GitHub user by username
- Displays profile card with avatar, name, bio, and profile link
- Lists up to 10 most recently updated public repositories
- Shows stars, forks, and language for each repo
- Error handling for invalid usernames
- Input validation with clear button to reset search
- Loading state with disabled button during fetch

---

## Tech Stack

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (ES6+)
- GitHub REST API (unauthenticated)

---

## Getting Started

### Run locally

```bash
git clone https://github.com/your-username/github-repo-finder.git
cd github-repo-finder
```

Then open `index.html` in your browser. No build step or dependencies required.

---

## Project Structure

```
github-repo-finder/
├── index.html       # App structure and layout
├── style.css        # All styling
├── main.js          # All JS logic (DOM, fetch, render)
└── search.jpg       # Search button icon
```

---

## How It Works

1. User enters a GitHub username and clicks search or presses Enter
2. App validates the input — shows error if empty
3. Fetches user data from `https://api.github.com/users/{username}`
4. If user exists, renders profile card with avatar, name, bio, and link
5. Makes a second fetch to `https://api.github.com/users/{username}/repos?sort=updated&per_page=10`
6. Renders up to 10 repo cards with name, description, stars, forks, and language
7. Shows "User not found" error for invalid usernames (404 response)

---

## API Reference

| Endpoint | Purpose |
|---|---|
| `GET /users/{username}` | Fetch user profile data |
| `GET /users/{username}/repos` | Fetch user's public repositories |

GitHub API has a rate limit of **60 requests/hour** for unauthenticated requests.

---

## Screenshots

> <img width="1918" height="933" alt="image" src="https://github.com/user-attachments/assets/13762fb1-9c42-46ff-bd7e-3fe2a04b68e5" />


---

## What I Learned

- Fetch API and async/await for real API calls
- Handling API errors with `response.ok` checks
- DOM manipulation with `innerHTML`, `classList`, `textContent`
- Event listeners for click and keydown (Enter key)
- Rendering dynamic content by looping with `forEach`
- Input validation and loading state management

---


## Author

**Sumeet Kumar Raj** — [github.com/Sumeet2612](https://github.com/Sumeet2612)

---

## License

MIT
