import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';

class Page404 extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        404'd
      </PageWrapper> 
    );
  };
};

export default Page404;
