import user from '../user';
import data from '../data';
import friends from '../friends';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionsHistory } from './TransactionsHistory';
import transactions from '../transactions';

export const App = () => {
  return (
    <div>
       <Profile
     username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
      stats={user.stats} />
   <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />;
    </div>
   
  );
};
