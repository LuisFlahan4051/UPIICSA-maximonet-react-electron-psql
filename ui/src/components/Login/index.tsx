import { useRef } from "react";
import Login from "./Login";
import swal from "sweetalert2";

/* INTEGRATION WITH ELECTRON */
const remote = window.require("electron").remote;
const currentWindow = remote.getCurrentWindow();

/* Types needed for user data */
interface User {
  id: string;
  nickname: string;
  phone: string;
  mail: string;
  password: string;
  admin: boolean;
  root: boolean;
  active: boolean;
}

/* Static mock data for testing interface */
const mockUsers: User[] = [
  {
    id: "1",
    nickname: "admin",
    phone: "5551234567",
    mail: "admin@test.com",
    password: "admin123",
    admin: true,
    root: true,
    active: true,
  },
  {
    id: "2",
    nickname: "usuario1",
    phone: "5559876543",
    mail: "usuario1@test.com",
    password: "user123",
    admin: false,
    root: false,
    active: true,
  },
  {
    id: "3",
    nickname: "manager",
    phone: "5555555555",
    mail: "manager@test.com",
    password: "manager123",
    admin: true,
    root: false,
    active: true,
  },
];

function Index(props: {
  setHandlerBlur: any;
  stateCurrentUser: any;
  setStateCurrentUser: any;
}) {
  /* REFERENCES OF INPUTS */
  const inputUser = useRef(document.createElement("input"));
  const inputPass = useRef(document.createElement("input"));
  const inputEntry = useRef(document.createElement("button"));

  /* REDUX STATE */
  /*--- get Redux data using hook from store. reducer current User is called ---*/
  //const currentUser = useSelector((state: RootStateOrAny) => state.currentUser)

  /*--- for set data we need dispatch hook from react-redux ---*/
  //const dispatch = useDispatch()

  /* STATIC DATA FOR TESTING INTERFACE */
  // Extract nicknames for the select area
  const usersNicks: string[] = mockUsers.map((user) => user.nickname);

  // Use mock data directly
  const usersData: User[] = mockUsers;

  /* PRINCIPAL FUNCTIONS */
  function cancel(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log("Cancelar");
    currentWindow.close();
  }

  function link() {
    console.log("Directo al link");
  }

  function Entry(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log("Entrar");

    // Skip validation for interface testing - always allow entry
    if (inputUser.current.value !== "" && inputPass.current.value !== "") {
      // Set a default user for testing interface
      props.setStateCurrentUser({
        id: mockUsers[0].id,
        user: mockUsers[0].nickname,
        loggedin: true,
        admin: mockUsers[0].admin,
        root: mockUsers[0].root,
        active: mockUsers[0].active,
      });

      props.setHandlerBlur(false);
    } else {
      swal.fire({
        icon: "warning",
        title: "¡Ingrese bien los campos!",
        text: "Dejó un campo en blanco",
      });
    }
  }

  return (
    <div className="Index-login">
      <Login
        usersNicks={usersNicks}
        cancel={cancel}
        link={link}
        entry={Entry}
        inputUser={inputUser}
        inputPass={inputPass}
        inputEntry={inputEntry}
      />
    </div>
  );
}

export default Index;
