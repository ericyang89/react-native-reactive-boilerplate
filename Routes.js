import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Route, Switch } from "react-router";
import { NativeRouter, Link } from "react-router-native";
import { Navigation, Card } from "react-router-navigation";

const Home = () => <Text style={styles.header}>HomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHome</Text>;
const About = () => <Text style={styles.header}>About</Text>;
const Topics = () => <Text style={styles.header}>Topics</Text>;

const Topic = ({ match }) =>
  <Text style={styles.topic}>
    {match.params.topicId}
  </Text>;

const Routes = () => {
  return (
    <NativeRouter>
      <View>
        <Navigation>
          <Card
            exact
            path="/"
            render={() =>
              <Link to="/hello">
                <Text>Press it</Text>
              </Link>}
          />
          <Card path="/hello" render={() => <Text>Hello</Text>} />
        </Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </Switch>
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
});

export default Home;
