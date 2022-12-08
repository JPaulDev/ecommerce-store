import Head from 'next/head';
import { useState } from 'react';
import * as Styled from '../../styles/Account';

export default function Account() {
  const [activeTab, setActiveTab] = useState('Account Details');

  return (
    <>
      <Head>
        <title>Your Account | PC Connect</title>
      </Head>
      <Styled.Section>
        <Styled.Heading>Your Account</Styled.Heading>
        <Styled.Container>
          <Styled.List>
            {['Account Details', 'Change Password', 'Edit Details'].map(
              (item) => (
                <li key={item}>
                  <Styled.Button
                    isActive={item === activeTab}
                    onClick={() => setActiveTab(item)}
                  >
                    {item}
                  </Styled.Button>
                </li>
              )
            )}
          </Styled.List>
          <Styled.RightContainer>Account Tab</Styled.RightContainer>
        </Styled.Container>
      </Styled.Section>
    </>
  );
}
