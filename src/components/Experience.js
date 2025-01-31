import React from 'react';
import SertifikatBEM from '../assets/images/Sertifikat-BEM.jpg';
import SertifikatHMP from '../assets/images/Sertifikat-HMP.jpg';

const Experience = () => {
  return (
    <div className="experience-section" id='experience'>
      <h2 className="experience-title">Pengalaman Organisasi</h2>
      
      {/* Pengalaman Organisasi 1 */}
      <div className="experience-item">
        <h3 className="experience-role">Anggota Divisi Humas</h3>
        <p className="experience-period">Periode: November 2020 - September 2021</p>
        <p className="experience-description">
        Mengurus himpunan kepada mahasiswa dan masyarakat, menyampaikan proposal kepada sponsor dan surat menyurat
        </p>
      </div>
      
      {/* Pengalaman Organisasi 2 */}
      <div className="experience-item">
        <h3 className="experience-role">Staff Divisi Advokasi dan Propaganda</h3>
        <p className="experience-period">Periode: November 2021 - September 2022</p>
        <p className="experience-description">
        Sebagai saluran suara mahasiswa kepada dosen, tempat mediasi beberapa anggota, penerapan peraturan terkait Himpunan
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
