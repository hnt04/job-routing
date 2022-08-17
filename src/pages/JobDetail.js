// import React, { useEffect, useState } from "react";
// import api from "../data/fetchData";
// import { useParams } from "react-router-dom";

// function JobDetail(title) {
//     const [singleJob, setSingleJob] = useState();
//     let { id } = useParams();
//     useEffect(() => {
//       const fetch = async () => {
//         const data = await api.getSingleJob(id);
//         setSingleJob(data);
//       };
//       fetch();
//     }, []);

//     function RequireAuth({ children }) {
//     let auth = useAuth();
//     console.log("user status:", auth.user);
//     if (!auth.user) {
//       return <Navigate to="/login" state={{ from: location }} replace />;
//     }
//     return children;
//   }

//   return (
//     <div>
//       <RequireAuth callback={() => {}}>
//         <h1>{title}</h1>
//       </RequireAuth>
//     </div>
//   );
// }

// export default JobDetail;