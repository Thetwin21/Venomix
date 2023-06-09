import React from 'react';

type Props = {
  children: any
};

function ConnectWallet({ children }: Props) {

  return (
    <div>
      {children}
    </div>
  );
}
  
export default ConnectWallet;