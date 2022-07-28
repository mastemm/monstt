import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import { MemberList, MemberEdit } from "./member";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="members" list={MemberList} edit={MemberEdit} />
    </Admin>
  );
}

export default App;
