import { Admin, Resource } from "react-admin";
import PersonIcon from "@mui/icons-material/Person";
import dataProvider from "./dataProvider";
import { MemberList, MemberEdit, MemberCreate } from "./member";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="members"
        list={MemberList}
        edit={MemberEdit}
        create={MemberCreate}
        icon={PersonIcon}
      />
    </Admin>
  );
}

export default App;
