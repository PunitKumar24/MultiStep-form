import React, { useState } from "react";

import { useFormik } from "formik";
import { nextandsubmissionSchema } from "../Schema/nextandsubmissionSchema";

const ParentComponent = () => {
  const initialValues = {
    requisitiontitle: "",
    numberofopenings: "",
    gender: "",
    urgency: "",
    jobtitle: "",
    jobdetails: "",
    joblocation: "",
    interviewmode: "",
    interviewduration: "",
    joblanguage: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema: nextandsubmissionSchema,

      initialValues: initialValues,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  const submitted = () => {
    alert("Form Submitted Successfully!!!");
  };

  const formList = ["FirstForm", "SecondForm", "ThirdForm"];

  const formLength = formList.length;

  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const handleForms = () => {
    switch (page) {
      case 0: {
        return (
          <div className="grid grid-cols-2 w-[1240px] gap-20">
            <div className="w-[700px] ">
              <form
                onSubmit={handleSubmit}
                className="bg-white px-24 pt-16 pb-10 mb-8 "
              >
                <div className="grid gap-4 place-content-center items-center"></div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="requisitiontitle"
                  >
                    Requisition Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                    id="requisitiontitle"
                    name="requisitiontitle"
                    type="text"
                    placeholder="Enter requisition title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.requisitiontitle}
                  ></input>
                  {errors.requisitiontitle && touched.requisitiontitle ? (
                    <p className="text-red-500">{errors.requisitiontitle}</p>
                  ) : null}
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="numberofopenings"
                  >
                    Number of openings
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="numberofopenings"
                    name="numberofopenings"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.numberofopenings}
                    type="text"
                    placeholder="0"
                  ></input>
                  {errors.numberofopenings && touched.numberofopenings ? (
                    <p className="text-red-500">{errors.numberofopenings}</p>
                  ) : null}
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <select
                    className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gender}
                  >
                    <option value="" disabled selected>
                      Select gender
                    </option>
                    {genderoptions.map((state) => {
                      return (
                        <option key={state.id} value={state.name}>
                          {state.name}
                        </option>
                      );
                    })}
                  </select>
                  {errors.gender && touched.gender ? (
                    <p className="text-red-500">{errors.gender}</p>
                  ) : null}
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="urgency"
                  >
                    Urgency
                  </label>
                  <select
                    className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="urgency"
                    name="urgency"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.urgency}
                  >
                    <option value="" disabled selected>
                      Select urgency
                    </option>
                    {urgencyoptions.map((state) => {
                      return (
                        <option key={state.id} value={state.name}>
                          {state.name}
                        </option>
                      );
                    })}
                  </select>
                  {errors.urgency && touched.urgency ? (
                    <p className="text-red-500">{errors.urgency}</p>
                  ) : null}
                </div>
              </form>
              {errors.requisitiontitle ||
              errors.numberofopenings ||
              errors.gender ||
              errors.urgency ||
              values.requisitiontitle === "" ||
              values.numberofopenings === "" ||
              values.gender === "" ||
              values.urgency === "" ? (
                ((
                  <button
                    disabled
                    onClick={() => {
                      handleNext();
                    }}
                    className="bg-red-500 rounded-md text-white font-bold py-2 px-4  relative left-[535px]"
                  >
                    Next
                  </button>
                ),
                (
                  <p className="text-red-500 relative bottom-20">
                    ❌ Please fill the all the rows then Next button will enable
                  </p>
                ))
              ) : (
                <button
                  onClick={() => {
                    handleNext();
                  }}
                  className="bg-red-500 rounded-md text-white font-bold py-2 px-4  relative left-[535px]"
                >
                  Next
                </button>
              )}
            </div>
            <div className=" bg-indigo-50 w-[500px] h-[995px] rounded-2xl  ">
              <div className="flex justify-between">
                <p className="text-md font-extrabold w-[100px] text-center p-3">
                  Draft
                </p>
                <p className="text-center text-white text-md w-[140px] bg-rose-500 p-3 rounded-tr-2xl ">
                  Preview
                </p>
              </div>
              <div className="bg-purple-900 text-white flex justify-between p-4 w-[450px] rounded-2xl mt-5 mb-7 mx-auto text-right">
                <h3>{values.requisitiontitle}</h3>
                <h3 className="text-purple-300">
                  OPENING{" "}
                  <span className="mx-1 font-extrabold text-white">
                    {values.numberofopenings}
                  </span>
                </h3>
              </div>
              <div className="bg-white   p-4 w-[450px] h-[180px]  rounded-2xl mt-12 mb-7 mx-auto ">
                <h3 className="text-2xl font-bold  p-3">Requisition Details</h3>
                <div className=" relative right-14">
                  <div className="flex text-xl mt-2 text-gray-600 justify-around">
                    <div className="  grid">
                      <h3 className="mb-2">Urgency</h3>
                      <h3 className="text-black">{values.urgency}</h3>
                    </div>
                    <div className="grid">
                      <h3 className="mb-2">Gender</h3>
                      <h3 className="text-black">{values.gender}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 w-[450px] h-[280px]  rounded-2xl mt-5 mb-7 mx-auto ">
                <h3 className="text-2xl font-bold  p-3">Job Details</h3>
                <div className=" relative right-12">
                  <div className="flex text-xl mt-2 text-gray-600 justify-around">
                    <div className="  grid">
                      <h3 className="mb-2">Job Title</h3>
                      <h3 className="text-black">{values.jobtitle}</h3>
                    </div>
                    <div className="grid">
                      <h3 className="mb-2">Job Details</h3>
                      <h3 className="text-black">{values.jobdetails}</h3>
                    </div>
                  </div>
                </div>
                <div className=" text-xl  text-gray-600 justify-around relative right-[-12px] mt-8">
                  <h3 className="mb-2">Job Location</h3>
                  <h3 className="text-black">{values.joblocation}</h3>
                </div>
              </div>
              <div className="bg-white  p-4 w-[450px] h-[280px] rounded-2xl mt-5 mb-7 mx-auto">
                <h3 className="text-2xl font-bold  p-3">Interview Settings</h3>
                <div className=" relative right-2">
                  <div className="flex text-xl mt-2 text-gray-600 justify-around">
                    <div className="  grid">
                      <h3 className="mb-2">Interview Duration</h3>
                      <h3 className="text-black">{values.interviewduration}</h3>
                    </div>
                    <div className="grid">
                      <h3 className="mb-2">Interview Language</h3>
                      <h3 className="text-black">{values.joblanguage}</h3>
                    </div>
                  </div>
                </div>
                <div className=" text-xl  text-gray-600 justify-around relative right-[-12px] mt-8">
                  <h3 className="mb-2">Interview Mode</h3>
                  <h3 className="text-black">{values.interviewmode}</h3>
                </div>
              </div>
            </div>
          </div>
        );
      }
      case 1: {
        return (
          <div className="grid grid-cols-2 w-[1240px] gap-20">
            <div className="w-[700px] ">
              <form
                onSubmit={handleSubmit}
                className="bg-white px-24 pt-16 pb-10 mb-8 "
              >
                <div className="grid gap-4 place-content-center items-center"></div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="jobtitle"
                  >
                    Job Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                    id="jobtitle"
                    name="jobtitle"
                    type="text"
                    placeholder="Enter job title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.jobtitle}
                  ></input>
                  {errors.jobtitle && touched.jobtitle ? (
                    <p className="text-red-500">{errors.jobtitle}</p>
                  ) : null}
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="jobdetails"
                  >
                    Job Details
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="jobdetails"
                    name="jobdetails"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.jobdetails}
                    type="text"
                    placeholder="Enter job details"
                  ></input>
                  {errors.jobdetails && touched.jobdetails ? (
                    <p className="text-red-500">{errors.jobdetails}</p>
                  ) : null}
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="joblocation"
                  >
                    Job Location
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="joblocation"
                    name="joblocation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.joblocation}
                    type="text"
                    placeholder="Enter job location"
                  ></input>
                  {errors.joblocation && touched.joblocation ? (
                    <p className="text-red-500">{errors.joblocation}</p>
                  ) : null}
                </div>
              </form>
              {errors.jobtitle ||
              errors.jobdetails ||
              errors.joblocation ||
              values.jobtitle === "" ||
              values.jobdetails === "" ||
              values.joblocation === "" ? (
                ((
                  <button
                    disabled
                    onClick={() => {
                      handleNext();
                    }}
                    className="bg-red-500 rounded-md text-white font-bold py-2 px-4 relative left-[535px]"
                  >
                    Next
                  </button>
                ),
                (
                  <p className="text-red-500 relative bottom-20">
                    ❌ Please fill the all the rows then Next button will enable
                  </p>
                ))
              ) : (
                <button
                  onClick={() => {
                    handleNext();
                  }}
                  className="bg-red-500 rounded-md text-white font-bold py-2 px-4 relative left-[535px]"
                >
                  Next
                </button>
              )}
            </div>
            <div className=" bg-indigo-50 w-[500px] h-[995px] rounded-2xl  ">
              <div className="flex justify-between">
                <p className="text-md font-extrabold w-[100px] text-center p-3">
                  Draft
                </p>
                <p className="text-center text-white text-md w-[140px] bg-rose-500 p-3 rounded-tr-2xl ">
                  Preview
                </p>
              </div>
              <div className="bg-purple-900 text-white flex justify-between p-4 w-[450px] rounded-2xl mt-5 mb-7 mx-auto text-right">
                <h3>{values.requisitiontitle}</h3>
                <h3 className="text-purple-300">
                  OPENING{" "}
                  <span className="mx-1 font-extrabold text-white">
                    {values.numberofopenings}
                  </span>
                </h3>
              </div>
              <div className="bg-white   p-4 w-[450px] h-[180px]  rounded-2xl mt-12 mb-7 mx-auto ">
                <h3 className="text-2xl font-bold  p-3">Requisition Details</h3>
                <div className=" relative right-14">
                  <div className="flex text-xl mt-2 text-gray-600 justify-around">
                    <div className="  grid">
                      <h3 className="mb-2">Urgency</h3>
                      <h3 className="text-black">{values.urgency}</h3>
                    </div>
                    <div className="grid">
                      <h3 className="mb-2">Gender</h3>
                      <h3 className="text-black">{values.gender}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 w-[450px] h-[280px]  rounded-2xl mt-5 mb-7 mx-auto ">
                <h3 className="text-2xl font-bold  p-3">Job Details</h3>
                <div className=" relative right-12">
                  <div className="flex text-xl mt-2 text-gray-600 justify-around">
                    <div className="  grid">
                      <h3 className="mb-2">Job Title</h3>
                      <h3 className="text-black">{values.jobtitle}</h3>
                    </div>
                    <div className="grid">
                      <h3 className="mb-2">Job Details</h3>
                      <h3 className="text-black">{values.jobdetails}</h3>
                    </div>
                  </div>
                </div>
                <div className=" text-xl  text-gray-600 justify-around relative right-[-12px] mt-8">
                  <h3 className="mb-2">Job Location</h3>
                  <h3 className="text-black">{values.joblocation}</h3>
                </div>
              </div>
              <div className="bg-white  p-4 w-[450px] h-[280px] rounded-2xl mt-5 mb-7 mx-auto">
                <h3 className="text-2xl font-bold  p-3">Interview Settings</h3>
                <div className=" relative right-2">
                  <div className="flex text-xl mt-2 text-gray-600 justify-around">
                    <div className="  grid">
                      <h3 className="mb-2">Interview Duration</h3>
                      <h3 className="text-black">{values.interviewduration}</h3>
                    </div>
                    <div className="grid">
                      <h3 className="mb-2">Interview Language</h3>
                      <h3 className="text-black">{values.joblanguage}</h3>
                    </div>
                  </div>
                </div>
                <div className=" text-xl  text-gray-600 justify-around relative right-[-12px] mt-8">
                  <h3 className="mb-2">Interview Mode</h3>
                  <h3 className="text-black">{values.interviewmode}</h3>
                </div>
              </div>
            </div>
          </div>
        );
      }
      case 2: {
        return (
          <div className="grid grid-cols-2 w-[1240px] gap-20">
            <div className="w-[700px] ">
              <form
                onSubmit={handleSubmit}
                className="bg-white px-24 pt-16 pb-10 mb-8 "
              >
                <div className="grid gap-4 place-content-center items-center"></div>

                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="interviewmode"
                  >
                    Interview Mode
                  </label>
                  <select
                    className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="interviewmode"
                    name="interviewmode"
                    placeholder="Select interview mode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.interviewmode}
                  >
                    <option value="" disabled selected>
                      Select interview mode
                    </option>
                    {interviewmodeoption.map((state) => {
                      return (
                        <option key={state.id} value={state.name}>
                          {state.name}
                        </option>
                      );
                    })}
                  </select>
                  {errors.interviewmode && touched.interviewmode ? (
                    <p className="text-red-500">{errors.interviewmode}</p>
                  ) : null}
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="interviewduration"
                  >
                    Interview Duration
                  </label>
                  <select
                    className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Select interview duration"
                    id="interviewduration"
                    name="interviewduration"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.interviewduration}
                  >
                    {interviewdurationoption.map((state) => {
                      return (
                        <option key={state.id} value={state.name}>
                          {state.name}
                        </option>
                      );
                    })}
                  </select>
                  {errors.interviewduration && touched.interviewduration ? (
                    <p className="text-red-500">{errors.interviewduration}</p>
                  ) : null}
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="joblocation"
                  >
                    Job Language
                  </label>
                  <select
                    className="block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Select interview language"
                    id="joblanguage"
                    name="joblanguage"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.joblanguage}
                  >
                    {joblanguageoption.map((state) => {
                      return (
                        <option key={state.id} value={state.name}>
                          {state.name}
                        </option>
                      );
                    })}
                  </select>
                  {errors.joblanguage && touched.joblanguage ? (
                    <p className="text-red-500">{errors.joblanguage}</p>
                  ) : null}
                </div>
              </form>
              {values.interviewmode === "" ||
              errors.interviewmode ||
              values.interviewduration === "" ||
              errors.interviewduration ||
              values.joblanguage === "" ||
              errors.joblanguage ? (
                ((
                  <button
                    disabled
                    onClick={handleSubmit}
                    className="bg-red-500 rounded-md text-white font-bold py-2 px-4 relative left-[535px]"
                  >
                    Submit
                  </button>
                ),
                (
                  <p className="text-red-500 relative bottom-20">
                    ❌ Please fill the all the rows then Submit button will
                    enable
                  </p>
                ))
              ) : (
                <button
                  onClick={() => {
                    handleSubmit(), submitted();
                  }}
                  className="bg-red-500 rounded-md text-white font-bold py-2 px-4 relative left-[535px]"
                >
                  Submit
                </button>
              )}
            </div>
            <div className=" bg-indigo-50 w-[500px] h-[995px] rounded-2xl  ">
              <div className="flex justify-between">
                <p className="text-md font-extrabold w-[100px] text-center p-3">
                  Draft
                </p>
                <p className="text-center text-white text-md w-[140px] bg-rose-500 p-3 rounded-tr-2xl ">
                  Preview
                </p>
              </div>
              <div className="bg-purple-900 text-white flex justify-between p-4 w-[450px] rounded-2xl mt-5 mb-7 mx-auto text-right">
                <h3>{values.requisitiontitle}</h3>
                <h3 className="text-purple-300">
                  OPENING{" "}
                  <span className="mx-1 font-extrabold text-white">
                    {values.numberofopenings}
                  </span>
                </h3>
              </div>
              <div className="bg-white   p-4 w-[450px] h-[180px]  rounded-2xl mt-12 mb-7 mx-auto ">
                <h3 className="text-2xl font-bold  p-3">Requisition Details</h3>
                <div className=" relative right-14">
                  <div className="flex text-xl mt-2 text-gray-600 justify-around">
                    <div className="  grid">
                      <h3 className="mb-2">Urgency</h3>
                      <h3 className="text-black">{values.urgency}</h3>
                    </div>
                    <div className="grid">
                      <h3 className="mb-2">Gender</h3>
                      <h3 className="text-black">{values.gender}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 w-[450px] h-[280px]  rounded-2xl mt-5 mb-7 mx-auto ">
                <h3 className="text-2xl font-bold  p-3">Job Details</h3>
                <div className=" relative right-12">
                  <div className="flex text-xl mt-2 text-gray-600 justify-around">
                    <div className="  grid">
                      <h3 className="mb-2">Job Title</h3>
                      <h3 className="text-black">{values.jobtitle}</h3>
                    </div>
                    <div className="grid">
                      <h3 className="mb-2">Job Details</h3>
                      <h3 className="text-black">{values.jobdetails}</h3>
                    </div>
                  </div>
                </div>
                <div className=" text-xl  text-gray-600 justify-around relative right-[-12px] mt-8">
                  <h3 className="mb-2">Job Location</h3>
                  <h3 className="text-black">{values.joblocation}</h3>
                </div>
              </div>
              <div className="bg-white  p-4 w-[450px] h-[280px] rounded-2xl mt-5 mb-7 mx-auto">
                <h3 className="text-2xl font-bold  p-3">Interview Settings</h3>
                <div className=" relative right-2">
                  <div className="flex text-xl mt-2 text-gray-600 justify-around">
                    <div className="  grid">
                      <h3 className="mb-2">Interview Duration</h3>
                      <h3 className="text-black">{values.interviewduration}</h3>
                    </div>
                    <div className="grid">
                      <h3 className="mb-2">Interview Language</h3>
                      <h3 className="text-black">{values.joblanguage}</h3>
                    </div>
                  </div>
                </div>
                <div className=" text-xl  text-gray-600 justify-around relative right-[-12px] mt-8">
                  <h3 className="mb-2">Interview Mode</h3>
                  <h3 className="text-black">{values.interviewmode}</h3>
                </div>
              </div>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  const genderoptions = [
    { id: "1", name: "Male" },
    { id: "2", name: "Female" },
    { id: "3", name: "Non Binary" },
  ];

  const urgencyoptions = [
    { id: "1", name: "Urgent" },
    { id: "2", name: "Immediate joining" },
    { id: "3", name: "Relaxed" },
  ];

  const interviewmodeoption = [
    { id: "1", name: "Offline" },
    { id: "2", name: "Online" },
  ];

  const interviewdurationoption = [
    { id: "1", name: "Short" },
    { id: "2", name: "Medium" },
    { id: "3", name: "Long" },
  ];

  const joblanguageoption = [
    { id: "1", name: "Hindi" },
    { id: "2", name: " English" },
  ];

  const setForm = (e) => {
    const name = e.target.innerText;
    switch (name) {
      case "Requisition Details": {
        return setPage(0);
      }
      case "Job Details": {
        return setPage(1);
      }
      case "Interview Settings": {
        return setPage(2);
      }
      default:
        setPage(0);
    }
  };

  return (
    <div className="grid gap-4 place-content-center items-center  h-screen place-items-center ">
      <div className=" relative right-[280px] pb-10 font-bold ">
        <h1 className="text-4xl">Create Candidate Requisition</h1>
      </div>
      <ul className="flex justify-between w-[480px] relative right-[290px]">
        <li
          onClick={setForm}
          className={
            page === 0
              ? " text-decoration-line: underline  rounded-lg  "
              : "bg: transparent"
          }
        >
          <div className="flex items-center ">
            <span
              className={
                page === 0
                  ? "ml-2 text-blue-700 font-medium"
                  : "ml-2 text-blue-700 cursor-pointer"
              }
            >
              Requisition details
            </span>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 1
              ? " text-decoration-line: underline  rounded-lg  "
              : "bg: transparent"
          }
        >
          <div className="flex items-center">
            <span
              className={
                page === 1
                  ? "ml-2 text-blue-700 font-medium"
                  : "ml-2 text-blue-700 cursor-pointer"
              }
            >
              Job Details
            </span>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 2
              ? " text-decoration-line:  underline  rounded-lg  "
              : "bg: transparent"
          }
        >
          <div className="flex items-center">
            <span
              className={
                page === 2
                  ? "ml-2 text-blue-700 font-medium"
                  : "ml-2 text-blue-700 cursor-pointer"
              }
            >
              Interview Settings
            </span>
          </div>
        </li>
      </ul>
      <div className="border-2 border-gray-200 p-[px] w-full"></div>
      <div className="flex-1">{handleForms()}</div>
      <div className="grid grid-cols-2 gap-4  relative left-[260px] ">
        {page === 0 ? null : (
          <button
            onClick={handlePrev}
            className="bg-gray-200  rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 relative bottom-[608px] right-[355px]"
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
