import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';

import Navbar from '../components/Navbar';

class ContentsPage extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Navbar/>
      </PageWrapper> 
    );
  };
};

export default ContentsPage;
