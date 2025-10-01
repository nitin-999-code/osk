# Contributing to Open Source Kashmir

Thank you for your interest in contributing to Open Source Kashmir (OSK)! We welcome contributors of all skill levels and backgrounds.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 20 or higher)
- [Git](https://git-scm.com/)
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))

## How to Contribute

### 1. Fork the Repository

1. Visit the [OSK repository](https://github.com/Open-Source-Kashmir/osk)
2. Click the **Fork** button in the top-right corner
3. This creates a copy of the repository under your GitHub account

### 2. Clone Your Fork

Clone your forked repository to your local machine:

```bash
git clone https://github.com/YOUR-USERNAME/osk.git
cd osk
```

Replace `YOUR-USERNAME` with your GitHub username.

### 3. Add Upstream Remote

Add the original repository as an upstream remote to keep your fork synced:

```bash
git remote add upstream https://github.com/Open-Source-Kashmir/osk.git
```

### 4. Set Up Locally

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`

### 5. Create a New Branch

Before making changes, create a new branch:

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names like:
- `feature/add-mentor-card`
- `fix/navbar-responsive`
- `docs/update-readme`

### 6. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Test your changes locally
- Ensure the app runs without errors

### 7. Commit Your Changes

Stage and commit your changes with a clear message:

```bash
git add .
git commit -m "Add: brief description of your changes"
```

**Commit Message Guidelines:**
- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for changes to existing features
- `Docs:` for documentation changes

### 8. Push to Your Fork

Push your branch to your forked repository:

```bash
git push origin feature/your-feature-name
```

### 9. Open a Pull Request (PR)

1. Go to your fork on GitHub
2. Click **Compare & pull request**
3. Fill in the PR template with:
   - A clear title
   - Description of what you changed
   - Any related issue numbers (e.g., "Closes #123")
4. Click **Create pull request**

## Contribution Ideas

Check out these good first issues:
- Add new mentor cards to the Mentors Page
- Create program cards for LFX, GSoC, Outreachy, C4GT
- Improve the About Us section
- Add new resources (guides, blogs, YouTube links)
- Enhance UI/UX styling
- Fix responsive design issues

## Code Style Guidelines

- Use meaningful variable and function names
- Keep functions small and focused
- Add comments for complex logic
- Use React functional components with hooks
- Follow Tailwind CSS utility-first approach

## Need Help?

- Browse existing issues for guidance
- Ask questions in issue comments
- Check the [README.md](README.md) for project overview

## Syncing Your Fork

Keep your fork up to date with the main repository:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## Hacktoberfest Guidelines

If contributing during Hacktoberfest:
- PRs must be meaningful (no spam or trivial changes)
- Low-quality PRs will be marked as spam or invalid
- Valid PRs must be merged, approved, or labeled `hacktoberfest-accepted`

Learn more at [Hacktoberfest Rules](https://hacktoberfest.com/)

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on collaboration over competition

Thank you for contributing to Open Source Kashmir! Together, we're building a strong open source community in Kashmir.
