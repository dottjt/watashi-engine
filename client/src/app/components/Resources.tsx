import * as React from 'react';
import { Flex, Link } from 'rebass';

class Resources extends React.Component<PropTypes.IResourcesProps, {}> {
  public render() {
    return (
      <Flex flexDirection='column'>
        {this.props.resources.map((resource, index) => (
          <Link key={index} href={resource.url}>{resource.url}</Link>
        ))}
      </Flex>
    );
  };
};

export default Resources;
