"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MegaMartLogo } from "@assets/imageImports"

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  };

  const [signupData, setSignUpData] = useState(initialValues);

  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    password,
    confirmPassword,
  } = signupData;

  // const { mutate: signup, isPending, error } = useSignup();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({ ...signupData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }
    // const formattedSignupData = {
    //   ...signupData,
    //   mobileNumber: Number(signupData.mobileNumber),
    // };
    // signup(formattedSignupData);
  };

  return (
    <div className="min-h-svh flex items-center justify-center bg-[#FDEFEB] p-4">
      <div className="bg-white p-6 rounded-sm flex flex-col gap-6">
        <Link href="/">
          <Image src={MegaMartLogo} alt="MegaMart Logo" className="w-16" />
        </Link>
        <p className="text-2xl font-bold">Signup</p>
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <div className="flex items-center gap-1">
            <input
              type="text"
              placeholder="Firstname"
              name="firstName"
              value={firstName}
              onChange={changeHandler}
              minLength={3}
              maxLength={10}
              title="First name is required and must be between 3 and 10 characters."
              className="w-full border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
              required
            />
            <input
              type="text"
              placeholder="Lastname"
              name="lastName"
              value={lastName}
              onChange={changeHandler}
              minLength={3}
              maxLength={10}
              title="Last name is required and must be between 3 and 10 characters."
              className="w-full border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={changeHandler}
            title="A valid email is required."
            className="border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
            required
          />
          <input
            inputMode="numeric"
            placeholder="Enter your mobile number"
            name="mobileNumber"
            value={mobileNumber}
            onChange={changeHandler}
            minLength={10}
            maxLength={10}
            pattern="[6789][0-9]{9}"
            title="Mobile Number is required, must starts with 6 or 7 or 8 or 9 digits and must be exactly 10 digits."
            className="border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={changeHandler}
            minLength={6}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Password is required and must be at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
            className="w-full border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password"
            onChange={changeHandler}
            minLength={6}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Confirm Password is required, must be at least 6 characters and should be same as password field."
            className="border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
            required
          />
          {/* {error && (
            <p className="text-sm text-[#f14040]">
              {error?.response?.data?.message}
            </p>
          )} */}

          <p>
            By continuing, I agree to the{" "}
            <Link href="/termsofuse" className="text-[#ff3f6c]">
              Terms of Use
            </Link>{" "}
            &{" "}
            <Link href="/privacypolicy" className="text-[#ff3f6c]">
              Privacy Policy
            </Link>
          </p>

          <button
            type="submit"
            // disabled={isPending}
            className={
              false
                ? "text-white font-bold uppercase bg-[#f57d99] pt-1.5 pb-0 rounded-sm"
                : "text-white font-bold uppercase bg-[#ff3f6c] p-[9px] rounded-sm"
            }
          >
            {false ? <span className="loader"></span> : "Signup"}
          </button>

          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-[#ff3f6c]">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;