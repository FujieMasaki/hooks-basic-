import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AuthDisplay: React.VFC = () => {
  const auth = useContext(AuthContext);
  // AuthContextのuserAuthのvalueを取得
  return <div>{auth?.userAuth ? <p>ログイン中</p> : <p>ログアウト中</p>}</div>;
  // trueだとログイン中。falseだとログアウト中。
};

export default AuthDisplay;