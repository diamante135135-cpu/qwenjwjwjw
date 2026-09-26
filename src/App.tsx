import React, { useState, useEffect } from 'react';

// Image URLs from generated images
const images = {
  portrait: 'https://image.qwenlm.ai/generated-images/f671e6f7-c180-4771-9437-6fc7043a06f2/_result.png',
  story: 'https://image.qwenlm.ai/generated-images/108e8c88-ba8b-47cb-9569-bfaa42625f7e/_result.png',
  gallery1: 'https://image.qwenlm.ai/generated-images/53c33be8-bce7-47e3-b499-e291a18ac0b5/_result.png',
  gallery2: 'https://image.qwenlm.ai/generated-images/ba93a5d2-6dfd-4a53-be52-0f84c05f6954/_result.png',
  gallery3: 'https://image.qwenlm.ai/generated-images/8d195014-d1c5-45a0-8548-684e440cd6bc/_result.png',
  gallery4: 'https://image.qwenlm.ai/generated-images/c24f2ee5-8fd4-4536-95a0-ee11067b9734/_result.png',
  special: 'https://image.qwenlm.ai/generated-images/bf3c8d1c-3dc4-45e9-9ac9-3639ba1a10af/_result.png',
  closing: 'https://image.qwenlm.ai/generated-images/092a32c7-c6f4-4620-a3e0-dbf0c896cbbe/_result.png',
};

function FloralOrnament() {
  return (
    <svg className="floral-ornament mx-auto" width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 5C30 5 25 10 20 10C15 10 10 8 10 8C10 8 15 12 20 12C25 12 30 8 30 8" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      <path d="M30 5C30 5 35 10 40 10C45 10 50 8 50 8C50 8 45 12 40 12C35 12 30 8 30 8" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      <circle cx="30" cy="7" r="2" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      <path d="M15 18C15 18 20 22 25 22C30 22 30 18 30 18" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      <path d="M45 18C45 18 40 22 35 22C30 22 30 18 30 18" stroke="currentColor" strokeWidth="0.5" fill="none"/>
      <path d="M30 15L30 25" stroke="currentColor" strokeWidth="0.5"/>
    </svg>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="section-divider"></div>
    </div>
  );
}

function Portada() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative w-full h-[55vh] min-h-[380px] max-h-[500px] overflow-hidden">
        <img 
          src={images.portrait} 
          alt="Retrato" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf7f4]"></div>
      </div>
      
      {/* Name and subtitle */}
      <div className="px-8 pt-2 pb-14 text-center" style={{ backgroundColor: '#faf7f4' }}>
        <div className="mb-5">
          <FloralOrnament />
        </div>
        <h1 className="font-serif-elegant text-[2rem] font-light text-[#3d3835] tracking-wide mb-3 leading-tight">
          Nombre de la Persona
        </h1>
        <p className="font-sans-modern text-[13px] font-light text-[#8a817c] tracking-[0.15em] uppercase">
          19XX — 20XX
        </p>
        <div className="mt-7 gold-line w-24 mx-auto"></div>
        <p className="mt-7 font-serif-elegant text-[17px] italic text-[#6b6560] leading-relaxed px-4">
          "Su recuerdo vive en cada uno de nosotros"
        </p>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section className="px-7 py-14" style={{ backgroundColor: '#faf7f4' }}>
      <div className="text-center mb-9">
        <p className="font-sans-modern text-[11px] font-medium text-[#b8965a] tracking-[0.2em] uppercase mb-3">
          Su Historia
        </p>
        <h2 className="font-serif-elegant text-[1.75rem] font-light text-[#3d3835]">
          Una vida bien vivida
        </h2>
      </div>
      
      <div className="image-frame mb-9">
        <img 
          src={images.story} 
          alt="Historia" 
          className="w-full h-60 object-cover"
        />
      </div>
      
      <div className="space-y-5">
        <p className="font-sans-modern text-[14px] font-light text-[#6b6560] leading-[1.8] text-center">
          Aquí irá el texto que cuente la historia de vida de la persona. 
          Sus momentos más significativos, sus pasiones, su legado.
        </p>
        <p className="font-sans-modern text-[14px] font-light text-[#6b6560] leading-[1.8] text-center">
          Un espacio para compartir los recuerdos más queridos, 
          las anécdotas que definen quién fue y cuánto significó 
          para quienes tuvieron la fortuna de conocerle.
        </p>
        <div className="pt-2">
          <p className="font-sans-modern text-[13px] font-light text-[#a09890] leading-relaxed text-center italic">
            [ El texto completo será añadido posteriormente ]
          </p>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section className="px-5 py-14" style={{ backgroundColor: '#f5f0eb' }}>
      <div className="text-center mb-9">
        <p className="font-sans-modern text-[11px] font-medium text-[#b8965a] tracking-[0.2em] uppercase mb-3">
          Galería
        </p>
        <h2 className="font-serif-elegant text-[1.75rem] font-light text-[#3d3835]">
          Momentos compartidos
        </h2>
      </div>

      {/* Large vertical photo */}
      <div className="image-frame mb-4">
        <img 
          src={images.gallery1} 
          alt="Recuerdo familiar" 
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Horizontal photo */}
      <div className="image-frame mb-4">
        <img 
          src={images.gallery2} 
          alt="Paisaje" 
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Two small photos side by side */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="image-frame">
          <img 
            src={images.gallery3} 
            alt="Recuerdo" 
            className="w-full h-44 object-cover"
          />
        </div>
        <div className="image-frame">
          <img 
            src={images.gallery4} 
            alt="Recuerdo" 
            className="w-full h-44 object-cover"
          />
        </div>
      </div>

      {/* Another large photo */}
      <div className="image-frame">
        <img 
          src={images.gallery4} 
          alt="Recuerdo" 
          className="w-full h-64 object-cover"
        />
      </div>

      <p className="mt-8 text-center font-sans-modern text-[12px] font-light text-[#8a817c] italic">
        Más fotografías serán añadidas a la galería
      </p>
    </section>
  );
}

function Recuerdos() {
  const memories = [
    { text: "Aquí irá un recuerdo escrito por un familiar. Una anécdota, un mensaje o una reflexión sobre los momentos compartidos.", author: "— Nombre del familiar" },
    { text: "Otro recuerdo especial que alguien desea compartir. Palabras que honran la memoria y mantienen vivo el legado.", author: "— Otro familiar" },
    { text: "Un tercer testimonio de amor y gratitud. Cada palabra es un puente entre el pasado y el presente.", author: "— Otro ser querido" },
  ];

  return (
    <section className="px-6 py-14" style={{ backgroundColor: '#faf7f4' }}>
      <div className="text-center mb-9">
        <p className="font-sans-modern text-[11px] font-medium text-[#b8965a] tracking-[0.2em] uppercase mb-3">
          Recuerdos
        </p>
        <h2 className="font-serif-elegant text-[1.75rem] font-light text-[#3d3835]">
          Palabras del corazón
        </h2>
      </div>

      <div className="space-y-4">
        {memories.map((memory, index) => (
          <div key={index} className="memory-card">
            <p className="font-sans-modern text-[14px] font-light text-[#5a5552] leading-[1.8] mb-4">
              {memory.text}
            </p>
            <p className="font-serif-elegant text-[14px] italic text-[#b8965a]">
              {memory.author}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="inline-block border border-dashed border-[#d4c5a9] rounded-xl px-6 py-5">
          <p className="font-sans-modern text-[12px] font-light text-[#8a817c]">
            Los familiares podrán añadir más recuerdos
          </p>
        </div>
      </div>
    </section>
  );
}

function MomentoEspecial() {
  return (
    <section className="px-6 py-14" style={{ backgroundColor: '#f5f0eb' }}>
      <div className="text-center mb-9">
        <p className="font-sans-modern text-[11px] font-medium text-[#b8965a] tracking-[0.2em] uppercase mb-3">
          Momento Especial
        </p>
        <h2 className="font-serif-elegant text-[1.75rem] font-light text-[#3d3835]">
          Para siempre en nuestro corazón
        </h2>
      </div>

      <div className="relative image-frame overflow-hidden">
        <img 
          src={images.special} 
          alt="Momento especial" 
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 8L1 15V1Z" fill="white" fillOpacity="0.9"/>
              </svg>
            </div>
            <div>
              <p className="font-sans-modern text-[13px] font-medium text-white/95">
                Nombre de la canción o video
              </p>
              <p className="font-sans-modern text-[11px] text-white/60 mt-0.5">
                Descripción del momento especial
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center px-2">
        <p className="font-serif-elegant text-[15px] italic text-[#6b6560] leading-[1.8]">
          "Este espacio estará dedicado a aquello que mejor 
          representa su esencia — una canción, un video, 
          una fotografía o un recuerdo único."
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-[#b8965a] opacity-40"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#b8965a] opacity-60"></div>
          <div className="w-2 h-2 rounded-full bg-[#b8965a] opacity-80"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#b8965a] opacity-60"></div>
          <div className="w-1 h-1 rounded-full bg-[#b8965a] opacity-40"></div>
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="relative">
      {/* Final large photo */}
      <div className="relative w-full h-[45vh] min-h-[300px] max-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0eb] via-transparent to-transparent z-10"></div>
        <img 
          src={images.closing} 
          alt="Cierre" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f4] via-transparent to-transparent"></div>
      </div>

      {/* Final message */}
      <div className="px-8 pt-8 pb-20 text-center" style={{ backgroundColor: '#faf7f4' }}>
        <FloralOrnament />
        
        <div className="mt-7 mb-7">
          <p className="font-serif-elegant text-[1.1rem] font-light text-[#3d3835] leading-[1.8]">
            Aquí irá un mensaje final de despedida, 
            una reflexión esperanzadora que cierre 
            este homenaje con paz y gratitud.
          </p>
        </div>

        <div className="gold-line w-16 mx-auto mb-7"></div>

        <p className="font-serif-elegant text-[15px] italic text-[#8a817c]">
          "Siempre en nuestros corazones"
        </p>

        <div className="mt-14">
          <div className="gold-line w-8 mx-auto mb-4"></div>
          <p className="font-sans-modern text-[10px] font-light text-[#b0a89f] tracking-[0.15em] uppercase">
            Memorial Digital
          </p>
        </div>
      </div>
    </section>
  );
}

function MemorialContent() {
  return (
    <div style={{ backgroundColor: '#faf7f4' }} className="min-h-screen">
      <Portada />
      <SectionDivider />
      <Historia />
      <SectionDivider />
      <Galeria />
      <SectionDivider />
      <Recuerdos />
      <SectionDivider />
      <MomentoEspecial />
      <Cierre />
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4" style={{ backgroundColor: '#f5f0eb' }}>
      {/* Title above phone */}
      <div className="text-center mb-10">
        <h1 className="font-serif-elegant text-3xl md:text-4xl font-light text-[#3d3835] mb-3">
          Maqueta Visual
        </h1>
        <p className="font-serif-elegant text-lg font-light text-[#6b6560] mb-2">
          Memorial Digital
        </p>
        <p className="font-sans-modern text-[13px] font-light text-[#8a817c]">
          Vista previa de la experiencia mobile
        </p>
      </div>

      {/* Phone Frame */}
      <div className="phone-frame">
        <div className="phone-notch"></div>
        <div className="phone-content" style={{ backgroundColor: '#faf7f4' }}>
          {/* Status bar simulation */}
          <div className="sticky top-0 z-40 h-12 flex items-end justify-between px-8 pb-1.5" style={{ backgroundColor: 'transparent' }}>
            <span className="font-sans-modern text-[11px] font-semibold text-[#3d3835]">9:41</span>
            <div className="flex items-center gap-1.5">
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                <rect x="0" y="7" width="3" height="4" rx="0.5" fill="#3d3835"/>
                <rect x="4" y="5" width="3" height="6" rx="0.5" fill="#3d3835"/>
                <rect x="8" y="2.5" width="3" height="8.5" rx="0.5" fill="#3d3835"/>
                <rect x="12" y="0" width="3" height="11" rx="0.5" fill="#3d3835"/>
              </svg>
              <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
                <rect x="0.5" y="0.5" width="20" height="10" rx="2" stroke="#3d3835" strokeWidth="1"/>
                <rect x="2" y="2" width="15" height="7" rx="1" fill="#3d3835"/>
                <rect x="21" y="3.5" width="2.5" height="4" rx="1" fill="#3d3835"/>
              </svg>
            </div>
          </div>

          {/* Content sections */}
          <MemorialContent />
        </div>
      </div>

      {/* Description below phone */}
      <div className="mt-10 text-center max-w-md px-4">
        <p className="font-sans-modern text-[13px] font-light text-[#8a817c] leading-relaxed">
          Esta maqueta muestra cómo se verá la página al escanear el código QR 
          desde un teléfono celular. El diseño está optimizado para desplazamiento 
          vertical con una sola mano.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#b8965a] opacity-50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#b8965a] opacity-50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#b8965a] opacity-50"></div>
        </div>
        <p className="mt-4 font-sans-modern text-[11px] font-light text-[#a09890] tracking-wider uppercase">
          Maqueta para aprobación de diseño
        </p>
      </div>
    </div>
  );
}

function MobileView() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf7f4' }}>
      <MemorialContent />
    </div>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <MobileView />;
  }

  return <PhoneMockup />;
}

export default App;
