import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AuthButton: React.VFC = () => {
  const auth = useContext(AuthContext);
  // AuthContextのuserAuthのvalueを取得
  console.log(auth);

  const handleSignOut = () => {
    auth?.setUserAuth(false);
  };

  const handleSignIn = () => {
    auth?.setUserAuth(true);
  };

  return (
    <React.Fragment>
      {auth?.userAuth ? (
        // AuthContext.ProviderのuserAuthの状態が渡される
        <button onClick={handleSignOut}>ログアウト</button>
      ) : (
        <button onClick={handleSignIn}>ログイン</button>
      )}
    </React.Fragment>
  );
};

export default AuthButton;