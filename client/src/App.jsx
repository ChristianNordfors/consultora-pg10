import { Route, Switch } from "react-router-dom";
import { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "@firebase/auth";
import {
  getMaterias,
  getProvincias,
  getUsuario,
  getAbogados,
  getAbout,
  getItems,
} from "./redux/actions";
import HomePage from "./components/home-page/HomePage";
import FormCita from "./components/FormCita/FormCita";
import Perfiles from "./components/perfiles/Perfiles";
import PerfilAbogado from "./components/perfilAbogado/PerfilAbogado";
import ModificarAbogado from "./components/modificarAbogado/ModificarAbogado";
import VistaConsultasAbogado from "./components/vistaConsultasAbogado/VistaConsultasAbogado";
import Clientes from "./components/clientes/clientes";
import HomeAbogado from "./components/home-Abogado/HomeAbogado";
import NavAbogado from "./components/home-Abogado/NavAbogado/NavAbogado";
import Footer from "./components/home-Abogado/Footer/Footer";
import Signin from "./components/Sign/singnin";
import Signup from "./components/Sign/signup";
import Loaded from "./components/Loaded/Loaded";
import FormCasos from "./components/FormCasos/FormCasos";
import HomeUsuario from "./components/homeUsuario/HomeUsuario";
import ConsultasUsuario from "./components/homeUsuario/consultasUsuario/ConsultasUsuario";
import TurnosUsuarios from "./components/homeUsuario/turnosUsuario/TurnosUsuario";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPage from "./components/admin/adminPage/adminPage";
import TurnosAbogado from "./components/home-Abogado/turnos/TurnosAbogado";
import "./App.css";
import SiteMateria from "./components/Materia/SiteMaterias/SiteMaterias";
import Clients from "./components/home-Abogado/clients/clients";
import NewPass from "./components/Sign/newpass";

function App() {
  const dispatch = useDispatch();
  const { usuario } = useSelector((state) => state);

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user?.uid) {
        dispatch(getUsuario({ eMail: user.email }));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProvincias());
    dispatch(getAbogados());
    dispatch(getMaterias());
    dispatch(getAbout());
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/admin" component={AdminPage}></Route>
        <Route exact path="/materias/:materia">
          <SiteMateria />
        </Route>
        <Route exact path="/consulta">
          <FormCita />
        </Route>
        <Route path="/perfil/:slug">
          <PerfilAbogado />
        </Route>
        <Route exact path="/abogados">
          <Perfiles />
        </Route>
        <Route exact path="/ingreso" component={Signin} />
        <Route exact path="/Cambiopass" component={NewPass} />

        {/* <div> */}
        <Route exact path="/cita" component={FormCita} />

        <Route exact path="/user/panel">
          <HomeUsuario />
        </Route>
        <Route exact path="/user/panel/consultas">
          <ConsultasUsuario />
        </Route>
        <Route exact path="/user/panel/turnos">
          <TurnosUsuarios />
        </Route>
        {/* </div> */}
        {/* <div> */}
        {/* <NavAbogado /> */}
        <Route exact path="/user/abogado">
          <HomeAbogado />
        </Route>
        <Route exact path="/user/abogado/clientes">
          <Clients />
        </Route>
        <Route exact path="/user/abogado/consultas">
          <VistaConsultasAbogado />
        </Route>
        <Route exact path="/user/abogado/casos">
          <Clientes />
        </Route>
        <Route
          exact
          path="/user/abogado/modificar-perfil"
          component={ModificarAbogado}
        ></Route>
        <Route exact path="/user/abogado/gestionar-turnos">
          <TurnosAbogado />
        </Route>
        <Route exact path="/user/abogado/nuevo-caso">
          <FormCasos />
        </Route>
        <Footer />
        {/* </div> */}
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
