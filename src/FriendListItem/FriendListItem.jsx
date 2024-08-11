import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  const containerClsx = clsx(isOnline ? css.isOnline : css.isOffline);
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={containerClsx}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
