import user from './Profile/user';
import data from './Statistics/data';
import friends from './Friends/friends';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionsHistory } from './Transactions/TransactionsHistory';
import transactions from './Transactions/transactions';

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
