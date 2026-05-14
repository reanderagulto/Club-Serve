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
