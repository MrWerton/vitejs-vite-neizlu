import { Post } from './Post';
export const Main = () => {
  return (
    <main id="main">
      <aside className="aside">
        <div className="background">
          <img
            src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="illustration"
          />
        </div>
        <div className="profile">
          <img src="https://github.com/mrwerton.png" alt="illustration" />
          <strong>Werton</strong>
          <span>Developer</span>
          <a href="#">
            <strong>Edit Profile</strong>
          </a>
        </div>
      </aside>
      <div className="feed">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
};
