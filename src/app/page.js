'use client';

import React, { useState } from 'react';
import servicesData from './data/services.json';
import { 
  Phone, 
  Truck, 
  Sparkles, 
  Clock, 
  MapPin, 
  Tag
} from 'lucide-react';

export default function Home() {
  const [tab, setTab] = useState('reguler');
  const waNumber = '628213927906';
  // Direct WA
  const waLink = `https://wa.me/${waNumber}`;

  // Deskripsi Galeri
  const galleryPhotos = [
    { src: '/outlet.png', title: 'Outlet Kami', desc: 'Bangunan outlet yang bersih, rapi, dan mudah ditemukan dari jalan utama.' },
    { src: '/outlet-2.png', title: 'Layanan Antar-Jemput', desc: 'Siap melayani penjemputan dan pengantaran pakaian secara cepat dan praktis.' },
    { src: '/outlet-3.png', title: 'Petunjuk Lokasi', desc: 'Papan petunjuk di tepi jalan utama dengan akses mudah dan area parkir luas.' },
    { src: '/mesin.png', title: 'Mesin Cuci Modern', desc: 'Menggunakan mesin cuci Sharp front-loading yang higienis.' },
    { src: '/setrika.png', title: 'Setrika Uap', desc: 'Pakaian rapi, harum, dan aman untuk bahan halus.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. FLOATING NAVBAR */}
      <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl bg-white border border-slate-200/80 rounded-2xl shadow-lg px-4 sm:px-7 py-2 transition-all">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <img 
              src="/logo.png" 
              alt="Logo Sebelas Laundry" 
              className="w-11 h-11 sm:w-14 sm:h-14 object-contain shrink-0"
            />
            <img 
              src="/name.png" 
              alt="SEBELAS LAUNDRY" 
              className="h-10 sm:h-14 md:h-16 w-auto object-contain -ml-1 sm:-ml-2 shrink-0"
            />
          </div>

          {/* Menu Navigasi */}
          <div className="hidden md:flex items-center gap-8 text-base font-bold text-slate-700">
            <a href="#keunggulan" className="hover:text-sky-600 transition">Keunggulan</a>
            <a href="#galeri" className="hover:text-sky-600 transition">Fasilitas & Galeri</a>
            <a href="#layanan" className="hover:text-sky-600 transition">Layanan & Harga</a>
            <a href="#lokasi" className="hover:text-sky-600 transition">Lokasi</a>
          </div>

        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-32 sm:pt-44 pb-20 px-4 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/outlet.png" 
            alt="Sebelas Laundry Outlet" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/50 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700 text-slate-200 text-xs font-medium px-4 py-2 rounded-md">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span>Buka Setiap Hari: 08.00 - 20.00 WIB</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Harga Minimal, <span className="text-yellow-400">Bersih Maksimal</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Pakaian bersih, wangi, rapi, dan siap antar-jemput langsung ke lokasi Anda!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-base"
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-6 object-contain shrink-0" />
              <span>Pesan via WhatsApp</span>
            </a>

            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all text-base"
            >
              <Truck className="w-5 h-5 text-slate-950" />
              <span>Minta Antar-Jemput</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. KEUNGGULAN */}
      <section id="keunggulan" className="bg-white py-16 px-4 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-12">
            Keunggulan Sebelas Laundry
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center hover:border-sky-300 transition">
              <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-4">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Antar-Jemput</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Praktis tanpa repot, cukup sebutkan lokasi Anda via WhatsApp.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center hover:border-yellow-300 transition">
              <div className="w-14 h-14 bg-yellow-100 text-yellow-700 rounded-2xl flex items-center justify-center mb-4">
                <Tag className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Harga Terjangkau</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Tarif hemat mulai Rp3.000/kg, cocok untuk kebutuhan cuci rutin harian.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center hover:border-amber-300 transition">
              <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Setrika Uap</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Hasil gosokan licin, rapi, dan aman bagi bahan pakaian halus.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center hover:border-emerald-300 transition">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Layanan Ekspres</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Cucian selesai di hari yang sama untuk kebutuhan mendesak.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALERI & FASILITAS */}
      <section id="galeri" className="bg-slate-100 py-16 px-4 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Fasilitas & Galeri Outlet</h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
            {galleryPhotos.map((photo, idx) => (
              <div 
                key={idx} 
                className="snap-start shrink-0 w-72 sm:w-80 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
              >
                <div className="h-48 w-full bg-slate-200 relative overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={photo.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-base">{photo.title}</h3>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LAYANAN & HARGA */}
      <section id="layanan" className="bg-white py-16 px-4 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">Daftar Layanan & Tarif</h2>
            
            <div className="inline-flex bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              <button 
                onClick={() => setTab('reguler')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition ${
                  tab === 'reguler' 
                    ? 'bg-yellow-400 text-slate-950 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Layanan Reguler
              </button>
              <button 
                onClick={() => setTab('ekspres')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition ${
                  tab === 'ekspres' 
                    ? 'bg-sky-500 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Layanan Ekspres
              </button>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="text-center mb-6">
              <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto bg-white border border-slate-200 px-4 py-2.5 rounded-xl inline-block shadow-2xs font-medium">
                {tab === 'reguler' 
                  ? 'Layanan reguler siap memberikan hasil cucian yang bersih, wangi, dan rapi dengan estimasi pengerjaan 1-2 hari kerja.' 
                  : 'Layanan ekspres hadir untuk kebutuhan mendesak Anda dengan estimasi pengerjaan selesai di hari yang sama.'}
              </p>
            </div>

            <div className="divide-y divide-slate-200">
              {servicesData[tab].items.map((item, idx) => (
                <div key={idx} className="py-4 flex items-center justify-between gap-4">
                  <span className="font-semibold text-slate-800 text-sm sm:text-base">{item.nama}</span>
                  <span className="font-extrabold text-sky-600 text-base sm:text-lg">{item.harga}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOKASI */}
      <section id="lokasi" className="bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            
            <div className="md:w-5/12 space-y-5 pt-1">
              <h2 className="text-2xl font-extrabold text-slate-900">Lokasi Outlet</h2>
              
              <div className="space-y-4 text-slate-600 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Alamat Lengkap:</strong>
                    Brajan, Karangdukuh, Jogonalan, Klaten, Jawa Tengah
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Kontak WhatsApp:</strong>
                    0821-3927-906
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Jam Operasional:</strong>
                    Setiap Hari (08.00 - 20.00 WIB)
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-7/12 w-full h-80 bg-slate-200 rounded-xl overflow-hidden border border-slate-300 shrink-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1792263793931!6m8!1m7!1sS7vXtbGc8w_X_2rH9N45gw!2m2!1d-7.720269620196204!2d110.5715429456049!3f272.24951657460673!4f-2.0685290137085275!5f0.7820865974627469" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-center py-6 text-xs border-t border-slate-800">
        © {new Date().getFullYear()} Sebelas Laundry. All rights reserved.
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center p-3 shrink-0"
        aria-label="Chat WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-full h-full object-contain shrink-0" />
      </a>

    </div>
  );
}