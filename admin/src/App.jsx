import { Admin, Resource } from "react-admin";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import dataProvider from "./dataProvider";
import { MemberList, MemberEdit, MemberCreate } from "./member";
import { ContentList, ContentEdit, ContentCreate } from "./content";

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
      <Resource
        name="contents"
        list={ContentList}
        edit={ContentEdit}
        create={ContentCreate}
        icon={ArticleIcon}
      />
    </Admin>
  );
}

export default App;
