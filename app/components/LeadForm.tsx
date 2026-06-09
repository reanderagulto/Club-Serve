"use client";

import { useMutation } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import type { Iti } from "intl-tel-input";
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

async function submitLeadForm(data: FormData) {
  const response = await fetch("/api/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorResponse = await response.json().catch(() => null);
    throw new Error(
      errorResponse?.error ||
        (response.status === 429
          ? "Too many requests. Please try again in a moment."
          : "Failed to submit form"),
    );
  }

  return response.json();
}

export default function LeadForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
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
  const itiRef = useRef<Iti | null>(null);
  const submitMutation = useMutation({
    mutationFn: submitLeadForm,
    onSuccess: () => setSubmitted(true),
    onError: (error) => {
      console.error("Submit error:", error);
      alert(error instanceof Error ? error.message : "An error occurred");
    },
  });

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

      submitMutation.mutate(submissionBody);
    } catch (error) {
      console.error("Submit error:", error);
      alert("An error occurred");
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
      <div className="lead-form">
        <div className="lead-form__header">
          <div className="lead-form__logo">
            <img src="/marketing/clubserve-logo-white.svg" alt="ClubServe" />
          </div>
          <div>
            <p className="lead-form__title">Thank you for your inquiry!</p>
            <p className="lead-form__subtitle">
              We will be reaching out to you shortly.
            </p>
          </div>
        </div>
        <div className="lead-form__body">
          <div className="lead-form__steps">
            <div className="lead-form__step">
              <div className="lead-form__step-number">
                <span>1</span>
              </div>
              <div className="lead-form__step-content">
                <p className="lead-form__step-title">Inquiry reviewed</p>
                <p className="lead-form__step-desc">
                  Our team checks your club type and requirements.
                </p>
              </div>
            </div>
            <div className="lead-form__step">
              <div className="lead-form__step-number">
                <span>2</span>
              </div>
              <div className="lead-form__step-content">
                <p className="lead-form__step-title">Onboarding call</p>
                <p className="lead-form__step-desc">
                  We&apos;ll schedule a quick walkthrough of the platform.
                </p>
              </div>
            </div>
            <div className="lead-form__step">
              <div className="lead-form__step-number">
                <span>3</span>
              </div>
              <div className="lead-form__step-content">
                <p className="lead-form__step-title">Go live</p>
                <p className="lead-form__step-desc">
                  Your venue goes live on ClubServe across Asia.
                </p>
              </div>
            </div>
          </div>
          <button className="lead-form__submit" onClick={onClose}>
            Back to homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="lead-form">
      <div className="lead-form__header">
        <div className="lead-form__logo">
          <img src="/marketing/clubserve-logo-white.svg" alt="ClubServe" />
        </div>
        <div>
          <p className="lead-form__title">Get Your Club in the Game</p>
          <p className="lead-form__subtitle">
            Inquire to learn more about our features & advantages.
          </p>
        </div>
      </div>
      <div className="lead-form__body">
        <form className="lead-form__form" onSubmit={handleSubmit}>
          <div className="lead-form__row">
            <div className="lead-form__field">
              <label className="lead-form__label">Your name</label>
              <input
                type="text"
                name="name"
                className="lead-form__input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="lead-form__field">
              <label className="lead-form__label">Company</label>
              <input
                type="text"
                name="businessName"
                className="lead-form__input"
                placeholder="Business name"
                value={formData.businessName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="lead-form__row">
            <div className="lead-form__field">
              <label className="lead-form__label">Type of club</label>
              <select
                name="clubType"
                className="lead-form__select"
                value={formData.clubType}
                onChange={handleInputChange}
                required
              >
                <option value="">Choose</option>
                <option value="Racket sports">Racket sports</option>
                <option value="Gym/Fitness">Gym/Fitness</option>
                <option value="Yoga/Pilates">Yoga/Pilates</option>
                <option value="Wellness/Spa">Wellness/Spa</option>
                <option value="Others">
                  Other (specify in message box below)
                </option>
              </select>
            </div>
            <div className="lead-form__field">
              <label className="lead-form__label">Location</label>
              <input
                type="text"
                name="location"
                className="lead-form__input"
                placeholder="Philippines"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="lead-form__row">
            <div className="lead-form__field">
              <label className="lead-form__label">Email</label>
              <input
                type="email"
                name="email"
                className="lead-form__input"
                placeholder="juan@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="lead-form__field">
              <label className="lead-form__label">Mobile number</label>
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
                />
              </div>
            </div>
          </div>
          <div className="lead-form__field lead-form__field--full">
            <label className="lead-form__label">
              What club manager features are you looking for?
            </label>
            <textarea
              name="message"
              className="lead-form__textarea"
              placeholder="Tell us more..."
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="lead-form__submit"
            disabled={submitMutation.isPending}
          >
            {submitMutation.isPending ? "Submitting..." : "Submit inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
