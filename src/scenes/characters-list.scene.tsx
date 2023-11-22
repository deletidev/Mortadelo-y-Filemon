import { Layout } from '@/layout/layout';
import { CharacterListContainer } from '@/pods';
import React from 'react';

export const CharacterScene: React.FC = () => {
  return (
    <Layout>
      <CharacterListContainer></CharacterListContainer>
    </Layout>
  );
};
