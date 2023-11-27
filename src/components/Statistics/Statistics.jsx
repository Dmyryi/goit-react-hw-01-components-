import React from 'react';
import styles from './statisticss.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section class={styles.statistics}>
      {title && <h2 class={styles.title}>{title}</h2>}
      <ul class={styles.stat_list}>
        {stats.map(stat => (
          <li class={styles.item} key={stat.id}>
            <span class={styles.label}>{stat.label}</span>
            <span class={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
