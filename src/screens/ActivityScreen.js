import React from "react";
import _ from "lodash";
import { Container, Content, Tab, Tabs } from "native-base";

import ActivityTab from "../components/ActivityTab";

import activities from "../data/activities";
import style from "../constants/Styles";

export class ActivityScreen extends React.Component {
  static navigationOptions = {
    title: "Aktivity"
  };
  render() {
    return (
      <Container>
        <Content>
          <Tabs tabBarUnderlineStyle={style.tab.tabBarUnderlineStyle}>
            <Tab heading="Volný čas" {...style.tab}>
              <ActivityTab activities={_.filter(activities, ["type", 0])} />
            </Tab>
            <Tab heading="Přednášky" {...style.tab}>
              <ActivityTab activities={_.filter(activities, ["type", 1])} />
            </Tab>
            <Tab heading="Duchovní" {...style.tab}>
              <ActivityTab activities={_.filter(activities, ["type", 2])} />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
