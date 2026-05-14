"use client";

import { useState, useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/styles";

interface FormData {
  name: string;
  businessName: string;
  clubType: string;
  location: string;
  email: string;
  mobileNumber: string;
  message: string;
}

export default function LeadForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    businessName: "",
    clubType: "",
    location: "Philippines",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const phoneInputRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<any>(null);
  const utilsReadyRef = useRef(false);

  useEffect(() => {
    if (!phoneInputRef.current || itiRef.current) return;

    itiRef.current = intlTelInput(phoneInputRef.current, {
      initialCountry: "ph",
      loadUtils: () => import("intl-tel-input/utils"),
    });

    return () => {
      itiRef.current?.destroy();
      itiRef.current = null;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formElement = e.currentTarget;
      const rawValues = Object.fromEntries(
        new FormData(formElement).entries(),
      ) as Record<string, string>;

      let phoneNumber = rawValues.mobileNumber || formData.mobileNumber;
      if (itiRef.current) {
        try {
          phoneNumber = itiRef.current.getNumber();
        } catch {
          phoneNumber = phoneInputRef.current?.value || phoneNumber;
        }
      }

      const submissionBody = {
        name: rawValues.name || formData.name,
        businessName: rawValues.businessName || formData.businessName,
        clubType: rawValues.clubType || formData.clubType,
        location: rawValues.location || formData.location,
        email: rawValues.email || formData.email,
        mobileNumber: phoneNumber,
        message: rawValues.message || formData.message || "",
      };

      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionBody),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorResponse = await response.json().catch(() => null);
        alert(
          errorResponse?.error ||
            (response.status === 429
              ? "Too many requests. Please try again in a moment."
              : "Failed to submit form"),
        );
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="lead-form" data-node-id="2:779">
        <div className="lead-form__header" data-node-id="2:780">
          <div className="lead-form__logo" data-node-id="2:782">
            <img src="/svg/clubserve-logo-white.svg" alt="ClubServe" />
          </div>
          <div data-node-id="2:783">
            <p className="lead-form__title" data-node-id="2:784">
              Thank you for your inquiry!
            </p>
            <p className="lead-form__subtitle" data-node-id="2:785">
              We will be reaching out to you shortly.
            </p>
          </div>
        </div>
        <div className="lead-form__body" data-node-id="2:786">
          <div className="lead-form__steps" data-node-id="2:787">
            <div className="lead-form__step" data-node-id="2:789">
              <div className="lead-form__step-number" data-node-id="2:790">
                <span data-node-id="2:792">1</span>
              </div>
              <div className="lead-form__step-content">
                <p className="lead-form__step-title" data-node-id="2:793">
                  Inquiry reviewed
                </p>
                <p className="lead-form__step-desc" data-node-id="2:795">
                  Our team checks your club type and requirements.
                </p>
              </div>
            </div>
            <div className="lead-form__step" data-node-id="2:797">
              <div className="lead-form__step-number" data-node-id="2:798">
                <span data-node-id="2:800">2</span>
              </div>
              <div className="lead-form__step-content">
                <p className="lead-form__step-title" data-node-id="2:801">
                  Onboarding call
                </p>
                <p className="lead-form__step-desc" data-node-id="2:803">
                  We'll schedule a quick walkthrough of the platform.
                </p>
              </div>
            </div>
            <div className="lead-form__step" data-node-id="2:805">
              <div className="lead-form__step-number" data-node-id="2:806">
                <span data-node-id="2:808">3</span>
              </div>
              <div className="lead-form__step-content">
                <p className="lead-form__step-title" data-node-id="2:809">
                  Go live
                </p>
                <p className="lead-form__step-desc" data-node-id="2:811">
                  Your venue goes live on ClubServe across Asia.
                </p>
              </div>
            </div>
          </div>
          <button
            className="lead-form__submit"
            onClick={onClose}
            data-node-id="2:812"
          >
            Back to homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lead-form" data-node-id="2:710">
      <div className="lead-form__header" data-node-id="2:711">
        <div className="lead-form__logo" data-node-id="2:713">
          <img src="/svg/clubserve-logo-white.svg" alt="ClubServe" />
        </div>
        <div data-node-id="2:714">
          <p className="lead-form__title" data-node-id="2:715">
            Interested in ClubServe For Your Business?
          </p>
          <p className="lead-form__subtitle" data-node-id="2:716">
            Inquire to learn more about our features & advantages.
          </p>
        </div>
      </div>
      <div className="lead-form__body" data-node-id="2:717">
        <form
          className="lead-form__form"
          onSubmit={handleSubmit}
          data-node-id="2:718"
        >
          <div className="lead-form__row" data-node-id="2:719">
            <div className="lead-form__field" data-node-id="2:720">
              <label className="lead-form__label" data-node-id="I2:720;30:1187">
                Your name
              </label>
              <input
                type="text"
                name="name"
                className="lead-form__input"
                placeholder="Input"
                value={formData.name}
                onChange={handleInputChange}
                required
                data-node-id="I2:720;30:1185"
              />
            </div>
            <div className="lead-form__field" data-node-id="2:721">
              <label className="lead-form__label" data-node-id="I2:721;30:1187">
                Business name
              </label>
              <input
                type="text"
                name="businessName"
                className="lead-form__input"
                placeholder="Owner / Manager"
                value={formData.businessName}
                onChange={handleInputChange}
                required
                data-node-id="I2:721;30:1185"
              />
            </div>
          </div>
          <div className="lead-form__row" data-node-id="2:722">
            <div className="lead-form__field" data-node-id="2:723">
              <label
                className="lead-form__label"
                data-node-id="I2:723;35:1672;30:1187"
              >
                Type of club
              </label>
              <select
                name="clubType"
                className="lead-form__select"
                value={formData.clubType}
                onChange={handleInputChange}
                required
                data-node-id="I2:723;35:1672;30:1185"
              >
                <option value="">Choose</option>
                <option value="gym">Gym</option>
                <option value="studio">Studio</option>
                <option value="sports-club">Sports Club</option>
                <option value="wellness">Wellness</option>
              </select>
            </div>
            <div className="lead-form__field" data-node-id="2:726">
              <label className="lead-form__label" data-node-id="I2:726;30:1187">
                Location
              </label>
              <input
                type="text"
                name="location"
                className="lead-form__input"
                placeholder="Philippines"
                value={formData.location}
                onChange={handleInputChange}
                required
                data-node-id="I2:726;30:1185"
              />
            </div>
          </div>
          <div className="lead-form__row" data-node-id="2:727">
            <div className="lead-form__field" data-node-id="2:728">
              <label className="lead-form__label" data-node-id="I2:728;30:1187">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="lead-form__input"
                placeholder="juan@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                data-node-id="I2:728;30:1185"
              />
            </div>
            <div className="lead-form__field" data-node-id="2:772">
              <label className="lead-form__label" data-node-id="I2:772;30:1187">
                Mobile number
              </label>
              <div className="lead-form__phone-wrapper">
                <input
                  ref={phoneInputRef}
                  type="tel"
                  name="mobileNumber"
                  className="lead-form__input lead-form__input--phone"
                  placeholder=""
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                  data-node-id="I2:772;30:1185"
                />
              </div>
            </div>
          </div>
          <div
            className="lead-form__field lead-form__field--full"
            data-node-id="2:775"
          >
            <label className="lead-form__label" data-node-id="I2:775;30:1187">
              What club manager features are you looking for?
            </label>
            <textarea
              name="message"
              className="lead-form__textarea"
              placeholder="Tell us more..."
              value={formData.message}
              onChange={handleInputChange}
              data-node-id="I2:775;30:1185"
            />
          </div>
          <button
            type="submit"
            className="lead-form__submit"
            disabled={loading}
            data-node-id="2:776"
          >
            {loading ? "Submitting..." : "Submit inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
