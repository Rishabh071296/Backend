require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const GithubData = {
    "login": "rishabhsingh",
    "id": 3770742,
    "node_id": "MDQ6VXNlcjM3NzA3NDI=",
    "avatar_url": "https://avatars.githubusercontent.com/u/3770742?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rishabhsingh",
    "html_url": "https://github.com/rishabhsingh",
    "followers_url": "https://api.github.com/users/rishabhsingh/followers",
    "following_url": "https://api.github.com/users/rishabhsingh/following{/other_user}",
    "gists_url": "https://api.github.com/users/rishabhsingh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rishabhsingh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rishabhsingh/subscriptions",
    "organizations_url": "https://api.github.com/users/rishabhsingh/orgs",
    "repos_url": "https://api.github.com/users/rishabhsingh/repos",
    "events_url": "https://api.github.com/users/rishabhsingh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rishabhsingh/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Rishabh Singh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 3,
    "following": 0,
    "created_at": "2013-03-05T01:10:46Z",
    "updated_at": "2022-08-24T10:34:44Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
res.send ('rishabhdotcom')
})

app.get ('/login', (req, res)=>{
res.send ('<h1> Please login in RS7 Cafe </h1>')
})

app.get ('/github', (req, res)=>{
res.json (GithubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})