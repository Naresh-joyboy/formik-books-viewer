import axios from "axios";
import React, { useState } from "react";
import * as yup from "yup";
import { Formik, useFormik } from "formik";

const End = ({ api }) => {
  const registerHandler = async (values) => {
    const payload = {
      Author: values.Author,
      ISBNNumber: values.ISBNNumber,
      Title: values.Title,
      PublishDate: values.PublishDate,
      Soldcopies: values.Soldcopies
    };
    try {
      const response = await axios.post(api, payload);
    } catch (error) {
      console.log("there is an error");
    } 
  };
  const formik = useFormik({
    initialValues: {
      Author: "",
      ISBNNumber: "",
      Title: "",
      PublishDate: "",
      Soldcopies: "",
    },
    validationSchema: yup.object({
      Author: yup
        .string()
        .min(3, "Must be more than 3 characters")
        .required("Required"),
      ISBNNumber: yup.number(1, "Must be a number").required("Required"),
      Title: yup
        .string()
        .min(2, "Must be more than 3 characters")
        .required("Required"),
      PublishDate: yup
        .string()
        .min(3, "Must be more than 3 characters")
        .required("Required"),
      Soldcopies: yup.number().required("Required"),
    }),
    onSubmit : registerHandler
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <label>Author</label>
            <input
              id="Author"
              name="Author"
              type="text"
              value={formik.values.Author}
              placeholder="Enter Author Name"
              className="form-control"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.Author && formik.errors.Author ? (
              <p style={{ color: "red" }}>{formik.errors.Author}</p>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label>ISBNNumber</label>
            <input
              id="ISBNNumber"
              name="ISBNNumber"
              type="text"
              className="form-control"
              value={formik.values.ISBNNumber}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.ISBNNumber && formik.errors.ISBNNumber ? (
              <p style={{ color: "red" }}>{formik.errors.ISBNNumber}</p>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label>Title</label>
            <input
              id="Title"
              name="Title"
              type="text"
              className="form-control"
              value={formik.values.Title}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.Title && formik.errors.Title ? (
              <p style={{ color: "red" }}>{formik.errors.Title}</p>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label>PublishDate</label>
            <input
              id="PublishDate"
              name="PublishDate"
              type="Date"
              className="form-control"
              value={formik.values.PublishDate}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.PublishDate && formik.errors.PublishDate ? (
              <p style={{ color: "red" }}>{formik.errors.PublishDate}</p>
            ) : null}
          </div>
          <div className="col-lg-4">
            <label>Sold copies</label>
            <input
              id="Soldcopies"
              name="Soldcopies"
              type="text"
              className="form-control"
              value={formik.values.Soldcopies}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.Soldcopies && formik.errors.Soldcopies ? (
              <p style={{ color: "red" }}>{formik.errors.Soldcopies}</p>
            ) : null}
          </div>
          <div className="col-lg-12 mt-4">
            <input type="submit" className="btn btn-primary" value={"submit"} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default End;

// const End = ({ api }) => {
//   const [detail, setDetail] = useState({
//     Author: "",
//     ISBNNumber: "",
//     Title: "",
//     PublishDate: "",
//     Soldcopies: ""
//   });
//   const postData = async () => {
//     try{
//     await axios.post(api, detail);
//     setDetail({
//       Author: "",
//       ISBNNumber: "",
//       Title: "",
//       PublishDate: "",
//       Soldcopies: ""
//     });
// }catch(error){
//     console.log("There is an Error");
// }
//   };
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-lg-4">
//           <label>Author</label>
//           <input
//             type="text"
//             value={detail.Author}
//             placeholder="Enter Author Name"
//             className="form-control"
//             onChange={(e) => setDetail({...detail, Author:e.target.value})}
//           />
//         </div>
//         <div className="col-lg-4">
//           <label>ISBNNumber</label>
//           <input
//             type="text"
//             value={detail.ISBNNumber}
//             className="form-control"
//             onChange={(e) => setDetail({...detail, ISBNNumber:e.target.value})}
//           />
//         </div>
//         <div className="col-lg-6">
//           <label>Title</label>
//           <input
//             type="text"
//             value={detail.Title}
//             className="form-control"
//             onChange={(e) => setDetail({...detail, Title:e.target.value})}
//           />
//         </div>
//         <div className="col-lg-4">
//           <label>PublishDate</label>
//           <input
//             type="Date"
//             value={detail.PublishDate}
//             className="form-control"
//             onChange={(e) => setDetail({...detail, PublishDate:e.target.value})}
//           />
//         </div>
//         <div className="col-lg-4">
//           <label>Sold copies</label>
//           <input
//             type="text"
//             value={detail.Soldcopies}
//             className="form-control"
//             onChange={(e) => setDetail({...detail, Soldcopies:e.target.value})}
//           />
//         </div>
//         <div className="col-lg-12 mt-4">
//           <input
//             type="submit"
//             onClick={postData}
//             className="btn btn-primary"
//             value={"submit"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
