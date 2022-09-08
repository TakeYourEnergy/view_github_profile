import "./styles.css";
import Form from "./form/form";
import Account from "./account/account";
import { useState } from "react";

export default function App() {
  const [acc, setAcc] = useState({
    login: "TakeYourEnergy",
    id: 81747629,
    node_id: "MDQ6VXNlcjgxNzQ3NjI5",
    avatar_url: "https://avatars.githubusercontent.com/u/81747629?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/TakeYourEnergy",
    html_url: "https://github.com/TakeYourEnergy",
    followers_url: "https://api.github.com/users/TakeYourEnergy/followers",
    following_url:
      "https://api.github.com/users/TakeYourEnergy/following{/other_user}",
    gists_url: "https://api.github.com/users/TakeYourEnergy/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/TakeYourEnergy/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/TakeYourEnergy/subscriptions",
    organizations_url: "https://api.github.com/users/TakeYourEnergy/orgs",
    repos_url: "https://api.github.com/users/TakeYourEnergy/repos",
    events_url: "https://api.github.com/users/TakeYourEnergy/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/TakeYourEnergy/received_events",
    type: "User",
    name: "Alexander",
    company: null,
    location: null,
    email: null,
    bio: "Frontend Developer. JavaScript, ReactJS, TypeScript, NodeJS",
    public_repos: 16,
    public_gists: 0,
    followers: 16,
    following: 14,
    created_at: "2021-04-01T09:30:22Z",
    updated_at: "2022-09-06T12:45:31Z"
  });

  return (
    <div className="App">
      <div className="app-container">
        <Form setAcc={setAcc} />
        <Account acc={acc} />
      </div>
    </div>
  );
}
