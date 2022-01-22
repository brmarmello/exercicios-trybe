//  const fetch = require('node-fetch');

const getUserReposUrl = (username) => `https://api.github.com/users/${username}`;

const getGitHubUserInfos = async (username) => {
  const url = getUserReposUrl(username);

  // Fetch é uma dependência a função getGitHubUserInfos
  const result = await fetch(url);
  const data = await result.json();

  const { name, company, twitter_username: twitter, bio, location } = data;

  return {
    name,
    company,
    twitter,
    bio,
    location,
  };
};

module.exports = {
  getGitHubUserInfos,
  getUserReposUrl,
};
