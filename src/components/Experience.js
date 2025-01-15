import React from 'react';
import SertifikatBEM from '../assets/images/Sertifikat-BEM.jpg';
import SertifikatHMP from '../assets/images/Sertifikat-HMP.jpg';

const Experience = () => {
  return (
    <div className="experience-section" id='experience'>
      <h2 className="experience-title">Organizational Experience</h2>
      
      {/* Pengalaman Organisasi 1 */}
      <div className="experience-item">
        <h3 className="experience-role">Member of the Public Relations Division</h3>
        <p className="experience-period">Periode: November 2020 - September 2021</p>
        <p className="experience-description">
          Administering the association to students and the community, delivering proposals to sponsors and correspondence
        </p>
      </div>
      
      {/* Pengalaman Organisasi 2 */}
      <div className="experience-item">
        <h3 className="experience-role">Advocate and Propaganda Division Staff</h3>
        <p className="experience-period">Periode: November 2021 - September 2022</p>
        <p className="experience-description">
        As a voice channel from students to the faculty, a place of mediation for several members, applying relevant regulations for association use
        </p>
      </div>
      
      {/* Sertifikat */}
      <h3 className="certificate-title">Certificate</h3>
      <div className="certificate-wrapper">
        <img 
          src={SertifikatHMP} 
          alt="Sertifikat Pengalaman Organisasi" 
          className="certificate-image"
        />
      </div>
      <div className="certificate-wrapper">
        <img 
          src={SertifikatBEM} 
          alt="Sertifikat Pengalaman Organisasi" 
          className="certificate-image"
        />
      </div>
    </div>
  );
};

export default Experience;
