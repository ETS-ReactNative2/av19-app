import React from 'react';
import _ from 'lodash';

import {
  Container, Content, Tab, Tabs
} from 'native-base';

import { CalendarDay } from '../components/CalendarDay';
import { DrawerMenuButton } from '../components/DrawerMenuButton';

import { activeDay } from '../utils/utils';
import style from '../constants/Styles';
import schelude from '../data/schelude';

export class HarmonogramScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Harmonogram',
    headerLeft: <DrawerMenuButton />,
  });

  componentDidMount() {
    setTimeout(this._tabs.goToPage.bind(this._tabs, activeDay()));
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Tabs
          tabBarUnderlineStyle={style.tab.tabBarUnderlineStyle}
          ref={component => (this._tabs = component)}
        >
          <Tab heading="Pátek" {...style.tab}>
            <CalendarDay schelude={schelude.friday} navigation={navigation} />
          </Tab>
          <Tab heading="Sobota" {...style.tab}>
            <CalendarDay schelude={schelude.saturday} navigation={navigation} />
          </Tab>
          <Tab heading="Neděle" {...style.tab}>
            <CalendarDay schelude={schelude.sunday} navigation={navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
