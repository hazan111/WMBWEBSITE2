import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, Clock, Menu, X, ChevronDown, Facebook, Instagram, Twitter, Linkedin, Phone, Mail, Star, Utensils, ChefHat } from 'lucide-react';
import './RetroDiner.css';

const RetroDinerCafe = () => {
  const [language, setLanguage] = useState('en');
  const [showMenuPage, setShowMenuPage] = useState(false);
  const [activeCategory, setActiveCategory] = useState('grills');
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [neonFlicker, setNeonFlicker] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Neon flicker effect
    const flickerInterval = setInterval(() => {
      setNeonFlicker(prev => !prev);
      setTimeout(() => setNeonFlicker(true), 100);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(flickerInterval);
    };
  }, []);

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      branches: 'Locations',
      menu: 'Menu',
      social: 'Social',
      contact: 'Contact',
      heroTitle: "Deva Çorba",
      heroSubtitle: 'Serving joy since 1961',
      viewMenu: 'CHECK OUT THE MENU',
      ourStory: 'Our Story',
      storySubtitle: 'A Trabzon tradition meets retro style',
      aboutText1: "Welcome to Deva Çorba, where Turkish classics meet 50's American diner vibes! The tea is always brewing, the kebabs are sizzling, and the ayran is ice cold! Step into our nostalgic world where East meets West in the most delicious way.",
      aboutText2: "Since 1961, we've been serving authentic Black Sea cuisine with a retro twist. From our famous Trabzon pide to our legendary Akçaabat köfte, every dish tells a story. Pull up a chair, order some meze, and let the good times roll Turkish style!",
      ourLocations: 'Find Your Nearest Deva Çorba',
      findUs: 'Three amazing locations to serve you!',
      connectWithUs: 'Stay Connected',
      followJourney: 'Join our fantastic family',
      getInTouch: 'Drop Us a Line',
      loveToHear: "Don't be shy, say merhaba!",
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourMessage: 'Your Message',
      sendMessage: 'SEND IT!',
      headOffice: 'Main Location',
      businessHours: 'When We\'re Open',
      weekdays: 'Monday - Friday: 6am - 11pm',
      weekends: 'Saturday - Sunday: 24 Hours!',
      backToHome: '← Back to Counter',
      ourMenu: 'The Good Stuff',
      menuSubtitle: 'Made fresh, served with love',
      grills: 'Grills',
      pides: 'Pides',
      breakfast: 'Breakfast',
      drinks: 'Drinks',
      grillsMenu: 'Mangal Heaven',
      pidesMenu: 'Pide Paradise',
      breakfastMenu: 'Morning Feast',
      drinksMenu: 'Refreshments',
      special: "TODAY'S SPECIAL",
      open24: 'OPEN 24/7',
      established: 'EST. 1961'
    },
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      branches: 'Şubeler',
      menu: 'Menü',
      social: 'Sosyal',
      contact: 'İletişim',
      heroTitle: " Deva Çorba",
      heroSubtitle: '1961\'den beri neşe servis ediyoruz',
      viewMenu: 'MENÜYE GÖZ AT',
      ourStory: 'Hikayemiz',
      storySubtitle: 'Trabzon geleneği retro tarzla buluşuyor',
      aboutText1: "Deva Çorba'ya hoş geldiniz! Türk klasikleri 50'lerin Amerikan diner havasıyla buluşuyor! Çay her zaman demde, kebaplar cızırdıyor ve ayran buz gibi! Doğu'nun Batı'yla en lezzetli şekilde buluştuğu nostaljik dünyamıza adım atın.",
      aboutText2: "1961'den beri otantik Karadeniz mutfağını retro bir dokunuşla servis ediyoruz. Meşhur Trabzon pidemizden efsanevi Akçaabat köftemize, her yemek bir hikaye anlatıyor. Çekin sandalyenizi, meze söyleyin ve güzel zamanlar Türk usulü başlasın!",
      ourLocations: 'Size En Yakın Şubemizi Bulun',
      findUs: 'Sizlere hizmet için üç harika lokasyon!',
      connectWithUs: 'Bağlantıda Kalın',
      followJourney: 'Muhteşem ailemize katılın',
      getInTouch: 'Bize Ulaşın',
      loveToHear: 'Çekinmeyin, merhaba deyin!',
      yourName: 'Adınız',
      yourEmail: 'E-postanız',
      yourMessage: 'Mesajınız',
      sendMessage: 'GÖNDER!',
      headOffice: 'Ana Mekan',
      businessHours: 'Açık Saatler',
      weekdays: 'Pazartesi - Cuma: 6:00 - 23:00',
      weekends: 'Cumartesi - Pazar: 24 Saat!',
      backToHome: '← Geri Dön',
      ourMenu: 'Nefis Lezzetler',
      menuSubtitle: 'Taze hazırlanır, sevgiyle servis edilir',
      grills: 'Mangal',
      pides: 'Pideler',
      breakfast: 'Kahvaltı',
      drinks: 'İçecekler',
      grillsMenu: 'Mangal Cenneti',
      pidesMenu: 'Pide Cenneti',
      breakfastMenu: 'Sabah Ziyafeti',
      drinksMenu: 'Serinletici İçecekler',
      special: 'GÜNÜN ÖZEL',
      open24: '7/24 AÇIK',
      established: 'KURULUŞ 1961'
    }
  };

  const t = translations[language];

  const menuItems = {
    grills: [
      { name: { en: 'Adana Kebab Special', tr: 'Özel Adana Kebap' }, desc: { en: 'Spicy minced lamb, grilled peppers, lavash bread', tr: 'Baharatlı kıyma, közlenmiş biber, lavaş' }, price: '₺189' },
      { name: { en: 'Akçaabat Köfte', tr: 'Akçaabat Köfte' }, desc: { en: 'Famous Trabzon meatballs with piyaz', tr: 'Meşhur Trabzon köftesi, piyaz ile' }, price: '₺159' },
      { name: { en: 'Mixed Grill Platter', tr: 'Karışık Izgara' }, desc: { en: 'Adana, chicken shish, lamb chops, köfte', tr: 'Adana, tavuk şiş, pirzola, köfte' }, price: '₺289' },
      { name: { en: 'Iskender Deluxe', tr: 'İskender Deluxe' }, desc: { en: 'Döner on pide, yogurt, tomato sauce, butter', tr: 'Pide üstü döner, yoğurt, domates sos, tereyağı' }, price: '₺179' },
      { name: { en: 'Lamb Shish', tr: 'Kuzu Şiş' }, desc: { en: 'Tender lamb cubes, rice, grilled vegetables', tr: 'Yumuşak kuzu, pilav, közlenmiş sebze' }, price: '₺199' }
    ],
    pides: [
      { name: { en: 'Trabzon Pide', tr: 'Trabzon Pidesi' }, desc: { en: 'Closed pide with cheese and egg', tr: 'Kapalı pide, peynir ve yumurta' }, price: '₺89' },
      { name: { en: 'Minced Meat Pide', tr: 'Kıymalı Pide' }, desc: { en: 'Open pide with seasoned ground beef', tr: 'Açık pide, baharatlı kıyma' }, price: '₺99' },
      { name: { en: 'Kuşbaşılı Pide', tr: 'Kuşbaşılı Pide' }, desc: { en: 'Diced beef with peppers and tomatoes', tr: 'Kuşbaşı et, biber ve domates' }, price: '₺119' },
      { name: { en: 'Lahmacun Set', tr: 'Lahmacun Set' }, desc: { en: '3 pieces with ayran and salad', tr: '3 adet, ayran ve salata ile' }, price: '₺79' },
      { name: { en: 'Cheese & Sucuk Pide', tr: 'Kaşarlı Sucuklu' }, desc: { en: 'Melted cheese with spicy Turkish sausage', tr: 'Erimiş kaşar ve baharatlı sucuk' }, price: '₺109' }
    ],
    breakfast: [
      { name: { en: 'Turkish Breakfast Plate', tr: 'Serpme Kahvaltı' }, desc: { en: 'Cheese, olives, tomatoes, cucumber, simit, jam, honey', tr: 'Peynir, zeytin, domates, salatalık, simit, reçel, bal' }, price: '₺149' },
      { name: { en: 'Menemen Special', tr: 'Özel Menemen' }, desc: { en: 'Scrambled eggs with tomatoes, peppers, cheese', tr: 'Domatesli, biberli, peynirli' }, price: '₺69' },
      { name: { en: 'Black Sea Morning', tr: 'Karadeniz Sabahı' }, desc: { en: 'Muhlama, corn bread, tea service', tr: 'Muhlama, mısır ekmeği, çay servisi' }, price: '₺119' },
      { name: { en: 'Börek Platter', tr: 'Börek Tabağı' }, desc: { en: 'Cheese, spinach, and potato börek selection', tr: 'Peynirli, ıspanaklı ve patatesli börek' }, price: '₺89' }
    ],
    drinks: [
      { name: { en: 'Ayran', tr: 'Ayran' }, desc: { en: 'Traditional yogurt drink, ice cold', tr: 'Geleneksel yoğurt içeceği, buz gibi' }, price: '₺19' },
      { name: { en: 'Turkish Tea Service', tr: 'Çay Servisi' }, desc: { en: 'Unlimited refills in traditional glasses', tr: 'İnce belli bardakta limitsiz' }, price: '₺25' },
      { name: { en: 'Turkish Coffee', tr: 'Türk Kahvesi' }, desc: { en: 'Traditional coffee with Turkish delight', tr: 'Lokumlu geleneksel kahve' }, price: '₺35' },
      { name: { en: 'Fresh Juice Mix', tr: 'Taze Meyve Suyu' }, desc: { en: 'Orange, pomegranate, or mixed', tr: 'Portakal, nar veya karışık' }, price: '₺39' },
      { name: { en: 'Raki', tr: 'Rakı' }, desc: { en: 'Traditional anise spirit (double)', tr: 'Geleneksel anason içkisi (duble)' }, price: '₺89' }
    ]
  };

  const branches = [
    { 
      name: { en: 'Trabzon Original', tr: 'Trabzon Orijinal' },
      address: 'Uzun Sokak 61, Trabzon',
      hours: { en: 'Open 24/7!', tr: '7/24 Açık!' },
      phone: '0462-321-6161',
      special: true
    },
    {
      name: { en: 'Bosphorus View', tr: 'Boğaz Manzaralı' },
      address: 'Beşiktaş Marina, İstanbul',
      hours: { en: 'Mon-Sun: 6am-2am', tr: 'Pzt-Paz: 6:00-02:00' },
      phone: '0212-555-6161'
    },
    {
      name: { en: 'Kordon Branch', tr: 'Kordon Şubesi' },
      address: 'Alsancak Kordon, İzmir',
      hours: { en: 'Daily: 6am-Midnight', tr: 'Her gün: 6:00-00:00' },
      phone: '0232-777-6161'
    }
  ];

  const handleNavClick = (sectionId) => {
    if (sectionId === 'menu') {
      setShowMenuPage(true);
    } else {
      setShowMenuPage(false);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileNavOpen(false);
  };

  if (showMenuPage) {
    return (
      <div className="menu-page">
        <header className={`retro-header ${scrolled ? 'scrolled' : ''}`}>
          <div className="header-content">
            <h1 className="retro-logo">Deva Çorba</h1>
            <div className="menu-header-actions">
              <button
                onClick={() => setShowMenuPage(false)}
                className="retro-back-button"
              >
                {t.backToHome}
              </button>
              <div className="retro-lang-switcher">
                <button
                  onClick={() => setLanguage('en')}
                  className={`retro-lang-btn ${language === 'en' ? 'active' : ''}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('tr')}
                  className={`retro-lang-btn ${language === 'tr' ? 'active' : ''}`}
                >
                  TR
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="retro-menu-content">
          <div className="retro-menu-hero">
            <div className="neon-sign">
              <h1>{t.ourMenu}</h1>
              <p>{t.menuSubtitle}</p>
            </div>
          </div>

          <div className="retro-category-tabs">
            {['grills', 'pides', 'breakfast', 'drinks'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`retro-category-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                <span>{t[cat]}</span>
              </button>
            ))}
          </div>

          <div className="retro-menu-board">
            <div className="menu-board-header">
              <Star className="star-icon" />
              <h3>
                {activeCategory === 'grills' && t.grillsMenu}
                {activeCategory === 'pides' && t.pidesMenu}
                {activeCategory === 'breakfast' && t.breakfastMenu}
                {activeCategory === 'drinks' && t.drinksMenu}
              </h3>
              <Star className="star-icon" />
            </div>
            <div className="retro-items-list">
              {menuItems[activeCategory]?.map((item, index) => (
                <div key={index} className="retro-menu-item">
                  <div className="item-info">
                    <h4>{item.name[language]}</h4>
                    <p>{item.desc[language]}</p>
                  </div>
                  <div className="price-tag">
                    <span>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="retro-app">
      <header className={`retro-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <h1 className="retro-logo">Deva Çorba</h1>
          
          <nav className="retro-desktop-nav">
            <ul>
              {['home', 'about', 'branches', 'social', 'contact', 'menu'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="retro-nav-link"
                  >
                    {t[item]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="retro-lang-switcher">
            <button
              onClick={() => setLanguage('en')}
              className={`retro-lang-btn ${language === 'en' ? 'active' : ''}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('tr')}
              className={`retro-lang-btn ${language === 'tr' ? 'active' : ''}`}
            >
              TR
            </button>
          </div>

          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="retro-mobile-menu-btn"
          >
            {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileNavOpen && (
          <nav className="retro-mobile-nav">
            <ul>
              {['home', 'about', 'branches', 'social', 'contact', 'menu'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="retro-nav-link"
                  >
                    {t[item]}
                  </button>
                </li>
              ))}
            </ul>
            <div className="retro-mobile-lang">
              <button
                onClick={() => setLanguage('en')}
                className={`retro-lang-btn ${language === 'en' ? 'active' : ''}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('tr')}
                className={`retro-lang-btn ${language === 'tr' ? 'active' : ''}`}
              >
                Türkçe
              </button>
            </div>
          </nav>
        )}
      </header>

      <section id="home" className="retro-hero">
        <div className="checkerboard-pattern"></div>
        <div className={`neon-wrapper ${neonFlicker ? 'flicker' : ''}`}>
          <h1 className="neon-text">{t.heroTitle}</h1>
          <div className="retro-badge">{t.established}</div>
        </div>
        <p className="retro-subtitle">{t.heroSubtitle}</p>
        <button
          onClick={() => setShowMenuPage(true)}
          className="retro-cta-button"
        >
          <span>{t.viewMenu}</span>
        </button>
        <div className="jukebox-icon">
          <Coffee size={40} />
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={24} />
        </div>
      </section>

      <section id="about" className="retro-about">
        <div className="retro-container">
          <div className="section-header">
            <h2>{t.ourStory}</h2>
            <div className="retro-divider">★ ★ ★</div>
            <p className="retro-subtitle">{t.storySubtitle}</p>
          </div>
          
          <div className="retro-about-content">
            <div className="about-text-box">
              <p>{t.aboutText1}</p>
              <p>{t.aboutText2}</p>
              <div className="retro-badge-row">
                <span className="mini-badge">{t.open24}</span>
                <span className="mini-badge">{t.established}</span>
              </div>
            </div>
            <div className="about-image-box">
              <div className="retro-frame">
                <Utensils size={80} />
                <p>Good Food, Good Times!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="branches" className="retro-branches">
        <div className="retro-container">
          <div className="section-header">
            <h2>{t.ourLocations}</h2>
            <div className="retro-divider">★ ★ ★</div>
            <p className="retro-subtitle">{t.findUs}</p>
          </div>
          
          <div className="branches-grid">
            {branches.map((branch, index) => (
              <div key={index} className="retro-branch-card">
                {branch.special && <div className="special-badge">ORIGINAL!</div>}
                <div className="branch-header">
                  <MapPin size={24} />
                  <h3>{branch.name[language]}</h3>
                </div>
                <div className="branch-details">
                  <p className="address">{branch.address}</p>
                  <p className="hours">{branch.hours[language]}</p>
                  <p className="phone">
                    <Phone size={16} />
                    {branch.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="social" className="retro-social">
        <div className="retro-container">
          <div className="section-header">
            <h2>{t.connectWithUs}</h2>
            <div className="retro-divider">★ ★ ★</div>
            <p className="retro-subtitle">{t.followJourney}</p>
          </div>
          
          <div className="retro-social-links">
            <a href="#" className="retro-social-link">
              <Facebook size={24} />
            </a>
            <a href="#" className="retro-social-link">
              <Instagram size={24} />
            </a>
            <a href="#" className="retro-social-link">
              <Twitter size={24} />
            </a>
            <a href="#" className="retro-social-link">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="retro-contact">
        <div className="retro-container">
          <div className="section-header">
            <h2>{t.getInTouch}</h2>
            <div className="retro-divider">★ ★ ★</div>
            <p className="retro-subtitle">{t.loveToHear}</p>
          </div>
          
          <div className="retro-contact-content">
            <div className="retro-contact-form">
              <input
                type="text"
                placeholder={t.yourName}
                className="retro-input"
              />
              <input
                type="email"
                placeholder={t.yourEmail}
                className="retro-input"
              />
              <textarea
                rows="5"
                placeholder={t.yourMessage}
                className="retro-textarea"
              ></textarea>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert(language === 'en' ? 'Thanks for reaching out, pal!' : 'Mesajınız alındı, teşekkürler!');
                }}
                className="retro-submit-btn"
              >
                {t.sendMessage}
              </button>
            </div>
            
            <div className="retro-contact-info">
              <div className="info-card">
                <h3>
                  <MapPin size={20} />
                  {t.headOffice}
                </h3>
                <p>Uzun Sokak 61, Trabzon</p>
                <p>merhaba@devaçorba.com</p>
                <p>0462-321-6161</p>
              </div>
              
              <div className="info-card">
                <h3>
                  <Clock size={20} />
                  {t.businessHours}
                </h3>
                <p>{t.weekdays}</p>
                <p className="highlight">{t.weekends}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetroDinerCafe;