// GitHub API utility functions
const GITHUB_API_BASE = 'https://api.github.com';

// Function to get GitHub user avatar
export const getGitHubAvatar = (username) => {
  return `https://github.com/${username}.png?size=150`;
};

// Function to get GitHub user info
export const getGitHubUserInfo = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    const userData = await response.json();
    return {
      avatar: userData.avatar_url,
      name: userData.name || userData.login,
      bio: userData.bio,
      location: userData.location,
      publicRepos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      githubUrl: userData.html_url,
      joinDate: userData.created_at
    };
  } catch (error) {
    console.error(`Error fetching GitHub data for ${username}:`, error);
    // Return fallback data
    return {
      avatar: getGitHubAvatar(username),
      name: username,
      bio: null,
      location: null,
      publicRepos: 0,
      followers: 0,
      following: 0,
      githubUrl: `https://github.com/${username}`,
      joinDate: null
    };
  }
};

// Function to get multiple GitHub users info
export const getMultipleGitHubUsers = async (usernames) => {
  const promises = usernames.map(username => getGitHubUserInfo(username));
  return Promise.all(promises);
};

// Function to get repository contributors
export const getRepositoryContributors = async (owner, repo) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${owner}/${repo}/contributors`);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    const contributors = await response.json();
    return contributors.map(contributor => ({
      username: contributor.login,
      avatar: contributor.avatar_url,
      contributions: contributor.contributions,
      githubUrl: contributor.html_url
    }));
  } catch (error) {
    console.error(`Error fetching contributors for ${owner}/${repo}:`, error);
    return [];
  }
};
