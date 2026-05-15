"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SportsMarquee from "./components/SportsMarquee";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import LeadForm from "./components/LeadForm";
import Image from "next/image";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="page-shell"
      data-node-id="2:521"
      data-name="1440 x 1024 - Desktop"
    >
      <div className="page-bg">
        <Image
          alt="Graphics Left"
          src="/images/gradient-left.png"
          className="page-bg--left large"
          width={422.912}
          height={534.619}
        />
        <Image
          alt="Graphics Right"
          src="/images/gradient-right.png"
          className="page-bg--right large"
          width={1231.327}
          height={514.295}
        />
        <Image
          alt="Graphics Left"
          src="/images/gradient-left-sm.png"
          className="page-bg--left small"
          width={422.912}
          height={534.619}
        />
        <Image
          alt="Graphics Right"
          src="/images/gradient-right-sm.png"
          className="page-bg--right small"
          width={1231.327}
          height={514.295}
        />
      </div>
      <Header />
      <Hero onOpenModal={openModal} />
      <SportsMarquee paused={isModalOpen} />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LeadForm onClose={closeModal} />
      </Modal>
    </div>
  );
}
