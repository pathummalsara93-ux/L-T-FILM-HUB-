const FooterSections = () => {
  return (
    <div className="footer-wrapper">
      {/* 📍 Join Categories Section */}
      <section className="group-section">
        <h2 className="section-title">📍 Join Our Categories</h2>

        <div className="group-card">
          <div className="group-info">
            <span className="category">Movie Only 🎬</span>
            <span className="title">Community Link</span>
          </div>
          <a
            href="https://chat.whatsapp.com/JbkNkthbyHVJhBdGGiPnLN?mode=wwt"
            className="join-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN US
          </a>
        </div>

        <div className="group-card">
          <div className="group-info">
            <span className="category">Movie Only 🎬</span>
            <span className="title">Group Link</span>
          </div>
          <a
            href="https://chat.whatsapp.com/J3naslGyDDyGtHHQyAVQpW"
            className="join-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN US
          </a>
        </div>

        <div className="group-card">
          <div className="group-info">
            <span className="category">TV-Series Only 📺</span>
            <span className="title">TV-Series Community</span>
          </div>
          <a
            href="https://chat.whatsapp.com/IcjVWaOg52IJaX75pAQJr2"
            className="join-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN US
          </a>
        </div>

        <div className="group-card channel-card">
          <div className="group-info">
            <span className="category">Official Channel 📢</span>
            <span className="title">Follow Our Updates</span>
          </div>
          <a
            href="https://whatsapp.com/channel/0029Vb6oAn2EquiVw3u3Y63q/184"
            className="follow-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            FOLLOW US
          </a>
        </div>
      </section>

      {/* 🛡️ Management Team Section */}
      <section className="admin-section">
        <h2 className="section-title">🛡️ Management Team</h2>

        <div className="admin-card owner">
          <div className="admin-icon">👤</div>
          <div className="admin-info">
            <span className="role">Group Owner</span>
            <span className="name">Kavindu Kaushalya</span>
          </div>
          <a
            href="https://wa.me/94760595208"
            className="wa-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            🥏 Contact
          </a>
        </div>

        <div className="admin-card">
          <div className="admin-icon">👮</div>
          <div className="admin-info">
            <span className="role">Group Admin</span>
            <span className="name">Nulanga Sathsidu</span>
          </div>
          <a
            href="https://wa.me/94762986758"
            className="wa-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            🥏 Contact
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 LT MOVIE HUB. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default FooterSections;
