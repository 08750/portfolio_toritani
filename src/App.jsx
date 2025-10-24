import "./App.css";
import Firstview from "./components/Firstview";
import navList from "./components/navigationList";
import Header from "./components/Header";
import ListItem from "./components/Listitem";
import Logo from "./components/Logo";
import MainArea from "./components/MainArea";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Section02 from "./components/Section02";

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation src={navList} />
      </Header>

      <MainArea>
        <Firstview />
        <Section />
        <Section02 />
      </MainArea>
      <h1>簡単なwebサイト制作</h1>
    </>
  );
}

export default App;
{
  /* <ListItem listName="メニュー１" listClass="red" />
          <ListItem
            listName="メニュー2"
            listClass="green"
            style={{
              color: "#f8c579",
            }}
          />
          <ListItem listName="メニュー3" listClass="blue" /> */
}
