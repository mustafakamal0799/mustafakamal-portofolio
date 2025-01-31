import React from "react";
import { motion } from "framer-motion";
import project1Image from "../assets/images/ProjectOne.jpg"; // Import gambar screenshot proyek 2
import project2Image from "../assets/images/ProjectTwo.jpg"; // Import gambar screenshot proyek 2

const projects = [
  {
    name: "Aplikasi Laporan Keuangan & Manajemen Stok Barang",
    image: project1Image,
    description: "Saya mengembangkan sebuah aplikasi berbasis web untuk manajemen laporan keuangan dan stok barang menggunakan Laravel dan Bootstrap. Aplikasi ini dirancang untuk membantu bisnis dalam mengelola transaksi keuangan, arus kas, serta pemantauan stok barang secara real-time.",
    features: ["Manajemen Stok Barang", "Laporan Keuangan", "Pendapatan & Pengeluaran", "Manajemen User", "Desain Responsif"],
    technologies: ["Laravel", "Boostrap"],
  },
  {
    name: "Website Informasi Relawan Kebakaran Bardes",
    image: project2Image,
    description: "Saya mengembangkan sebuah website berbasis React.js untuk mendukung Relawan Kebakaran Bardes dalam menyebarkan informasi dan dokumentasi kegiatan mereka. Website ini bertujuan untuk memperkenalkan relawan kepada masyarakat serta memberikan informasi mengenai struktur organisasi, anggota, dan dokumentasi kegiatan mereka.",
    features: ["Profil Relawan", "Struktur Organisasi", "Daftar Anggota", "Galeri & Dokumentasi "],
    technologies: ["React.js"],
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      style={styles.section}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 style={styles.title}>My Projects</h2>
      <div style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <img
              src={project.image}
              alt={project.name}
              style={styles.projectImage}
            />
            <h3 style={styles.name}>{project.name}</h3>
            <p style={styles.description}>{project.description}</p>
            <h4>Features</h4>
            <ul style={styles.featuresList}>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h4>Technologies</h4>
            <ul style={styles.technologiesList}>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

const styles = {
  section: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#097351",
  },
  title: {
    color: "#F59C40",
  },
  projectsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  projectCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    padding: "20px",
    textAlign: "center",
    color: "#097351",
  },
  projectImage: {
    width: "100%",
    height: "500px",
    borderRadius: "10px",
    objectFit: "contain",
  },
  featuresList: {
    listStyleType: "disc",
    textAlign: "left",
    marginLeft: "20px",
    color: "#097351",
  },
  technologiesList: {
    listStyleType: "square",
    textAlign: "left",
    marginLeft: "20px",
  },
  description: {
    color: "#097351",
    textAlign: "justify"
  },
  name: {
    marginBottom:"20px"
  }
};

export default Projects;
