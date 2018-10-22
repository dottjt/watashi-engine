import * as React from 'react'
import { Link } from 'react-router5';

import { NavbarWrapper, FlexColumn } from './atoms/Layout';
import { H1, H2, H3 } from './atoms/Text';

import {
  LESSON_TITLE,
} from '../util/constants/lessonConstants';

class Navbar extends React.Component<{}, {}> {
  public render() {
    return (
      <NavbarWrapper>
      
        <H1>Grammar Boss</H1>
        <H2>Lesson navigation</H2>

        <FlexColumn>
          <H3>Contents</H3>
          <Link routeName={LESSON_TITLE.HOME} routeOptions={{reload: true}}>{LESSON_TITLE.HOME}</Link>
          <Link routeName={LESSON_TITLE.CONTENTS} routeOptions={{reload: true}}>{LESSON_TITLE.CONTENTS}</Link>
          <Link routeName={LESSON_TITLE.PREREQ} routeOptions={{reload: true}}>{LESSON_TITLE.PREREQ}</Link>
        </FlexColumn>
        
        <FlexColumn>
          <H3>Nouns - Basic</H3>
          <Link routeName={LESSON_TITLE.L001} routeOptions={{reload: true}}>{LESSON_TITLE.L001}</Link>
          <Link routeName={LESSON_TITLE.L002} routeOptions={{reload: true}}>{LESSON_TITLE.L002}</Link>
          <Link routeName={LESSON_TITLE.L003} routeOptions={{reload: true}}>{LESSON_TITLE.L003}</Link>
          <Link routeName={LESSON_TITLE.L004} routeOptions={{reload: true}}>{LESSON_TITLE.L004}</Link>
        </FlexColumn>

        <FlexColumn>
          <H3>Verbs - Basic</H3>
          <Link routeName={LESSON_TITLE.L005} routeOptions={{reload: true}}>{LESSON_TITLE.L005}</Link>
          <Link routeName={LESSON_TITLE.L006} routeOptions={{reload: true}}>{LESSON_TITLE.L006}</Link>
          <Link routeName={LESSON_TITLE.L007} routeOptions={{reload: true}}>{LESSON_TITLE.L007}</Link>
          <Link routeName={LESSON_TITLE.L008} routeOptions={{reload: true}}>{LESSON_TITLE.L008}</Link>
          <Link routeName={LESSON_TITLE.L009} routeOptions={{reload: true}}>{LESSON_TITLE.L009}</Link>
        </FlexColumn>
      </NavbarWrapper>
    );
  };
};

export default Navbar;
