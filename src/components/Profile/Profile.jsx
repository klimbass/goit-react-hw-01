import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.cardUser}>
        <img src={image} alt="User avatar" className={css.cardUserImage} />
        <p className={css.cardUserName}>{name}</p>
        <p className={css.cardUserText}>@{tag}</p>
        <p className={css.cardUserText}>{location}</p>
      </div>

      <ul className={css.cardUserStatsList}>
        <li className={css.cardUserStatsItem}>
          <span>Followers</span>
          <span className={css.bold}>{stats.followers}</span>
        </li>
        <li className={css.cardUserStatsItem}>
          <span>Views</span>
          <span className={css.bold}>{stats.views}</span>
        </li>
        <li className={css.cardUserStatsItem}>
          <span>Likes</span>
          <span className={css.bold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
