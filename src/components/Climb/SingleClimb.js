// import Link from "next/link";
// import { useRouter } from "next/router";
// import React from "react";
// import { Image } from "react-bootstrap";

// const SingleClimb = ({ tour, userSelect = false }) => {
//   const router = useRouter();

//   return (
//     <div>
//       <div
//         style={{ userSelect: userSelect ? "unset" : "none" }}
//         className="popular-tours__single"
//       >
//         <div className="popular-tours__img">
//           <Image src={tour?.banner} alt="" style={{ cursor: "pointer" }} onClick={() => router.push(`/program-detail/${tour?.id}`)}/>
//           <div className="popular-tours__icon">
//             <Link href={`/program-detail/${tour?.id}`}>
//               <a>
//                 <i className="fa fa-heart"></i>
//               </a>
//             </Link>
//           </div>
//         </div>
//         <div className="popular-tours__content">
//           <div className="popular-tours__stars">
//             <Link href={`/program-detail/${tour?.id}`}>
//               <a style={{ color: "#787780" }}>
//             <i className="fa fa-star"></i> {8.0} Superb
//               </a>
//             </Link>
//           </div>
//           <h3 className="popular-tours__title">
//             <Link href={`/program-detail/${tour?.id}`}>{tour?.name}</Link>
//           </h3>
//           <p className="popular-tours__rate">
//             <Link href={`/program-detail/${tour?.id}`}>
//               <a style={{ color: "#787780" }}>
//               <span>${tour?.starting_from}</span> / Per Person
//               </a>
//             </Link>
//           </p>
//           <ul className="popular-tours__meta list-unstyled">
//             <li>
//               <Link href={`/program-detail/${tour?.id}`}>
//                 {tour?.tribe_no_of_days +
//                   " " +
//                   "DAYS" +
//                   " " +
//                   tour?.tribe_region}
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleClimb;

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleClimb = ({ climb }) => {
  const router = useRouter();

  return (
    <Col xl={4} lg={4}>
      <div className="destinations-one__single">
        <div
          className="destinations-one__img"
          style={{ cursor: "pointer" }}
          onClick={() => router.push(`/climb-program/${climb?.title}`)}
        >
          <Image
            style={{ minHeight: "248px", maxHeight: "248px" }}
            src={climb?.programs[0]?.banner}
            alt="climb"
          />
          <div className="destinations-one__content">
            <h2 className="destinations-one__title">
              <Link href={`/climb-program/${climb?.title}`}>
                {climb?.title}
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleClimb;
