import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div className={css.friendsCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendsCardName}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
