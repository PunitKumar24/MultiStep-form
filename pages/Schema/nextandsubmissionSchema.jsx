import * as Yup from "yup";

export const nextandsubmissionSchema = Yup.object({
  requisitiontitle: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your name"),
  numberofopenings: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your name"),
  gender: Yup.string().required("Please enter your name"),
  urgency: Yup.string().required("Please enter your name"),
  jobtitle: Yup.string().min(2).max(25).required("Please enter your name"),
  jobdetails: Yup.string().min(2).max(25).required("Please enter your name"),
  joblocation: Yup.string().min(2).max(25).required("Please enter your name"),
  interviewmode: Yup.string().required("Please enter your name"),
  interviewduration: Yup.string().required("Please enter your name"),
  joblanguage: Yup.string().required("Please enter your name"),
});
