import './App.css'

function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Ana içeriğe geç
      </a>

      <header className="site-header">
        <div className="brand">
          <h1>Kahraman Kaya – Kişisel Portföy</h1>
          <p className="subtitle">
            Web Tasarımı ve Programlama · LAB-2 · No: 230541024
          </p>
        </div>

        <nav aria-label="Ana gezinme" className="main-nav">
          <ul>
            <li>
              <a href="#hakkimda">Hakkımda</a>
            </li>
            <li>
              <a href="#projeler">Projeler</a>
            </li>
            <li>
              <a href="#iletisim">İletişim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section
          id="hakkimda"
          aria-labelledby="hakkimda-heading"
          className="section"
        >
          <h2 id="hakkimda-heading">Hakkımda</h2>
          <p>
            Merhaba, ben Kahraman Kaya. Web Tasarımı ve Programlama dersi için
            hazırladığım bu sayfada hem kendimi hem de yaptığım bazı çalışmaları
            paylaşıyorum. Modern web teknolojileriyle erişilebilir ve
            kullanıcı dostu arayüzler geliştirmeye odaklanıyorum.
          </p>
          <p>
            Özellikle HTML5, CSS ve React ile arayüz geliştirme, bileşen
            tabanlı mimari ve temel UX prensipleri alanlarında kendimi
            geliştirmeye çalışıyorum.
          </p>
        </section>

        <section
          id="projeler"
          aria-labelledby="projeler-heading"
          className="section"
        >
          <h2 id="projeler-heading">Projeler</h2>

          <article className="project">
            <h3>React ile Sayaç Uygulaması</h3>
            <p>
              Basit ama React bileşen yapısını, state kullanımını ve olay
              yönetimini gösteren bir sayaç uygulaması. Component mantığını
              kavramak ve Vite ile proje yapısını tanımak için geliştirildi.
            </p>
          </article>

          <article className="project">
            <h3>Statik Portföy Tasarımı</h3>
            <p>
              Semantik HTML5 etiketleri, heading hiyerarşisi ve temel
              erişilebilirlik (a11y) prensipleri kullanılarak hazırlanmış tek
              sayfalık bir portföy tasarımı. Bu LAB çalışmasının temelini
              oluşturuyor.
            </p>
          </article>
        </section>

        <section
          id="iletisim"
          aria-labelledby="iletisim-heading"
          className="section section-contact"
        >
          <h2 id="iletisim-heading">İletişim</h2>
          <p id="contact-help" className="section-intro">
            Aşağıdaki formu kullanarak benimle iletişime geçebilirsin. Tüm
            alanlar zorunludur ve form HTML5 doğrulama öznitelikleri ile
            desteklenmiştir.
          </p>

          <form
            className="contact-form"
            aria-describedby="contact-help"
            noValidate
          >
            <div className="form-field">
              <label htmlFor="fullName">Ad Soyad</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                minLength={3}
                aria-describedby="fullName-error"
              />
              <small
                id="fullName-error"
                role="alert"
                aria-live="polite"
                className="field-hint"
              >
                Lütfen en az 3 karakterden oluşan bir ad-soyad girin.
              </small>
            </div>

            <div className="form-field">
              <label htmlFor="email">E-posta Adresi</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-describedby="email-error"
              />
              <small
                id="email-error"
                role="alert"
                aria-live="polite"
                className="field-hint"
              >
                Geçerli bir e-posta adresi girin (ornek@domain.com).
              </small>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Konu</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                minLength={5}
                aria-describedby="subject-error"
              />
              <small
                id="subject-error"
                role="alert"
                aria-live="polite"
                className="field-hint"
              >
                Konu en az 5 karakter olmalıdır.
              </small>
            </div>

            <div className="form-field">
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={4}
                aria-describedby="message-error"
              />
              <small
                id="message-error"
                role="alert"
                aria-live="polite"
                className="field-hint"
              >
                Mesaj en az 10 karakter olmalıdır.
              </small>
            </div>

            <button type="submit" className="submit-button">
              Mesajı Gönder
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Kahraman Kaya · Web Tasarımı ve
          Programlama – LAB-2
        </p>
      </footer>
    </div>
  )
}

export default App
