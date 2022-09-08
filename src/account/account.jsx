import styles from "./account.module.css";
import location from "../images/location.svg";

const Account = ({ acc }) => {
  const formatDate = (string) => {
    let date = new Date(string).toLocaleString();
    return date.slice(0, 10);
  };

  return (
    <>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <div className={styles.userImage}>
            <img
              className={styles.userAvatar}
              src={acc.avatar_url}
              alt="avatar"
            />
          </div>
          <div className={styles.userData}>
            <h1 className={styles.userName}>
              {acc.name}
              <span>{`@${acc.login}`}</span>
            </h1>
            <p className={styles.userAbout}>{acc.bio}</p>
          </div>
        </div>

        <ul className={styles.userStats}>
          <li className={styles.userStatsItem}>
            <p className={styles.text}>Репозиториев</p>
            <span>{acc.public_repos}</span>
          </li>
          <li className={styles.userStatsItem}>
            <p className={styles.text}>Подписчиков</p>
            <span>{acc.followers}</span>
          </li>
          <li className={styles.userStatsItem}>
            <p className={styles.text}>Аккаунт создан</p>
            <span>{formatDate(acc.created_at)}</span>
          </li>
        </ul>

        <ul className={styles.userLocation}>
          <li
            style={{
              backgroundImage: `url(${location})`
            }}
            className={styles.userLocationItem}
          >
            {acc.location}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Account;
