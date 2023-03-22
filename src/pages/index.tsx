import type { NextPage } from 'next';

import { MainLayout } from '@/layouts/MainLayout';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = ({}) => {
  return (
    <MainLayout>
      <h1>Hello World!</h1>
    </MainLayout>
  );
};

export default HomePage;
