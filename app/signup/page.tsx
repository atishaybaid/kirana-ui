"use client";
import { useState, useRef } from "react";
import Input from "../components/input";
import { checkValidMobileNumber } from "../Utils";
import NameAndPhone from "./NameAndPhone";
import Otp from "./Otp";
import LocationAndAddress from "./LocationAndAddress";
import GeoLocation from "./GeoLocation";
// import Stepper from "../components/Stepper";
const Singup = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [pageStep, setPageStep] = useState("nameAndPhone");
  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const mobileInputRef = useRef<HTMLInputElement>(null);

  const onMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMobileNumber(value);
    if (value.length === 10) {
      setErrorMessage("");
    }
  };

  const onShopNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShopName(value);
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("onSubmit called");
    console.log(mobileNumber);
    if (!checkValidMobileNumber(mobileNumber)) {
      setErrorMessage("Please enter a valid 10 digit mobile number");
      const inputElement = mobileInputRef.current;
      if (inputElement) {
        inputElement.focus();
      }
    } else {
      setPageStep("otp");
    }
  };

  const renderNameAndPhone = () => {
    return <NameAndPhone />;
  };

  const renderOtp = () => {
    return <Otp />;
  };

  const renderLocationAndAddress = () => {
    return <LocationAndAddress />;
  };

  const renderGeoLocation = () => {
    return <GeoLocation />;
  };

  const renderView = () => {
    switch (pageStep) {
      case "nameAndPhone":
        return <>{renderNameAndPhone()}</>;
      case "otp":
        return <>{renderOtp()}</>;
      case "locationAndAddress":
        return <>{renderLocationAndAddress()}</>;
      case "geoLocation":
        return <>{renderGeoLocation()}</>;
      default:
        return <></>;
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Kirana Shop"
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <div className="lg:mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create a new account and start selling
          </div>
        </div>
        {/* <Stepper /> */}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-4">
            {renderView()}
            {/* <div>
              <div className="mt-2">
                <Input
                  id="address"
                  name="address"
                  type="text"
                  required
                  autoComplete="address"
                  value={address}
                  onChange={onAddressChange}
                  placeholder="Enter your shop address"
                  ref={mobileInputRef as React.RefObject<HTMLInputElement>}
                />
              </div>

              <div className="mt-2 text-sm text-red-600 min-h-[20px]">
                {errorMessage}
              </div>
            </div> */}

            <div></div>
          </div>
          {pageStep == "nameAndPhone" && (
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Already have an account?{" "}
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </a>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Singup;
