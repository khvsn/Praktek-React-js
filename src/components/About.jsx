import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    { name: "FRONT END", image: "/src/assets/icons/ruler-pen.png" },
    { name: "WEB DEVELOPMENT", image: "/src/assets/icons/code.png" },
    { name: "MOBILE DEVELOPMENT", image: "/src/assets/icons/android.png" },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">Tentang Kami:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
      Hai, nama saya Khairul Ikhsan, saya seorang pengembang web Frontend, dan pengembang Seluler. Saya telah mengasah keterampilan saya dalam Pengembangan Web dan terlebih dahulu saya memiliki pemahaman inti tentang prinsip-prinsip desain UI tingkat lanjut. Inilah yang utama
        keterampilan yang saya miliki.
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">3+</div>
        <p className="text-white text-2xl md:ml-5">Tahun Pengalaman. Spesialisasi dalam membangun aplikasi, sekaligus memastikan pengalaman web yang lancar bagi pengguna akhir.</p>
      </div>

      {/* skills */}
      <div className="flex flex-center md:flex-row ">
        {skills.map((skill, index) => (
          <div key={index} className="md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500">
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* services section */}
      <Services />
    </div>
  );
};

export default About;
