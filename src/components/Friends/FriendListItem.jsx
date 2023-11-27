import React from 'react';
import styles from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li class={styles.item}>
        <span
          class={`${styles.status} ${
            isOnline ? styles.online : styles.offline
          }`}
        ></span>
        <img class={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p class={styles.name}>{name}</p>
      </li>
    </>
  );
};
