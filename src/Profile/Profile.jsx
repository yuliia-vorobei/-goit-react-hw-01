import css from '../Profile/Profile.module.css';

export default function Profile({
  image,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img src={image} alt={username} width="80" className={css.avatar} />
        <p className={css.username}>{username} </p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.numbers}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.numbers}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.numbers}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
