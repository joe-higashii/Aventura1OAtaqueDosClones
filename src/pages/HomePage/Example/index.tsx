import { View, Text, ScrollView } from "react-native";
import { Button, Title, Paragraph } from "react-native-paper";
import {
  Tabs,
  TabScreen,
  TabsProvider,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import CardItem from "../CardItem";
const cardItems = [
  { name: "Joedson", lastText: "Tô na área!", time: "5:27 PM" },

  { name: "Joedson Mendes", lastText: "Se derrubar é penalti.", time: "Ontem" },

  {
    name: "Joedson Mendes de Amorim",
    lastText: "Exatamente, cara pálida!",
    time: "Ontem",
  },

  { name: "Joe", lastText: "Você é grande mas não é dois.", time: "Ontem" },

  {
    name: "Joedson",
    lastText: "Eu sou pequeno mas não sou metade.",
    time: "Ontem",
  },

  { name: "Mendes", lastText: "Mete bronca!", time: "Ontem" },

  { name: "Amorim", lastText: "Eita, bexiga!", time: "Ontem" },

  { name: "Joedson de Amorim", lastText: "Fala aí, mano!", time: "Ontem" },

  { name: "joe-higashii", lastText: "Vambora!", time: "Ontem" },
];

function Example() {
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: "#008069",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Appbar.BackAction
          onPress={() => {}}
          style={{
            width: 0,
          }}
        />
        <Appbar.Content
          title="WhatsApp"
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
          }}
          titleStyle={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "700",
          }}
        />
        <Appbar.Action icon="magnify" iconColor="#fff" onPress={() => {}} />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => {}}
          iconColor="#fff"
        />
      </Appbar.Header>
      <TabsProvider defaultIndex={0}>
        <Tabs
          uppercase={false}
          style={{ backgroundColor: "#008069" }}
          tabLabelStyle={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "700",
            borderBottomColor: "#fff",
          }}
        >
          <TabScreen icon="camera" label="">
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="CONVERSAS" badge={33}>
            <ExploreWitHookExamples />
          </TabScreen>
          <TabScreen label="STATUS">
            <View style={{ backgroundColor: "black", flex: 1 }} />
          </TabScreen>
          <TabScreen label="CHAMADAS">
            <View style={{ backgroundColor: "red", flex: 1 }} />
          </TabScreen>
        </Tabs>
      </TabsProvider>
      <ScrollView>
        {cardItems.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </ScrollView>
    </View>
  );
}

function ExploreWitHookExamples() {
  const goTo = useTabNavigation();
  const index = useTabIndex();
  return (
    <View style={{ flex: 1 }}>
      <Title>Explore</Title>
      <Paragraph>Index: {index}</Paragraph>
      <Button onPress={() => goTo(1)}>Go to Flights</Button>
    </View>
  );
}

export default Example;
