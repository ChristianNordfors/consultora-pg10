// import React from "react";
// import { Link } from "react-router-dom";
// import { getAuth, signOut } from "@firebase/auth";
// import { getUsuario } from "../../../redux/actions";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
// import { toast } from "react-toastify";

// export default function NavAbogado() {
//   let usuario = useSelector((state) => state.usuario)

//   const history = useHistory();

//   const dispatch = useDispatch();
//   const auth = getAuth();

//   const logout = () => {
//     signOut(auth)
//       .then(() => {
//         dispatch(getUsuario({}));
//         toast.info("La sesión fue finalizada");
//         localStorage.removeItem("username");
//         history.push("/");
//       })
//       .catch((error) => {
//         // An error happened.
//       });
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-sm  navbar-dark" style={{ background: "#033663" }}>
//         <div className="izquierda">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link to="/user/abogado" className="nav-link">
//                 Home 🏠
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/user/abogado/modificar-perfil" className="nav-link">
//                 Detalles 👨‍🎓
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/user/abogado/casos" className="nav-link">
//                 Casos 📔
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/user/abogado/consultas" className="nav-link">
//                 Consultas 💭
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/user/abogado/clientes" className="nav-link">
//                 Clientes 🙋‍♂️
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/user/abogado/gestionar-turnos" className="nav-link">
//                 Turnos
//               </Link>
//             </li>
//             <li className="nav-item">
//               {usuario.adminId &&
//                 <Link to="/admin" className="nav-link">
//                   Admin
//                 </Link>
//               }
//             </li>
//             <li className="nav-item">
//               <a onClick={logout} className="nav-link pointer">
//                 Salir ❌
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }
