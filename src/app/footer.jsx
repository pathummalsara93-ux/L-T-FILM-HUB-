

const FooterSections = () => {
  return (
    <div className="footer-sections mt-6 px-4 md:px-8">
      {/* 🌟 Group / Categories Section */}
      <section className="group-section mb-8">
        <h2 className="section-title text-lg font-bold mb-4 text-indigo-400">
          📍 Join Our Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Movie Community */}
          <div className="group-card p-4 bg-gray-800/70 dark:bg-gray-900/70 rounded-xl shadow-lg flex justify-between items-center">
            <div className="group-info">
              <span className="category block text-sm text-blue-300">Movie Only 🎬</span>
              <span className="title block font-semibold text-white">Community Link</span>
            </div>
            <a
              href="https://chat.whatsapp.com/JbkNkthbyHVJhBdGGiPnLN?mode=wwt"
              className="join-btn px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN US
            </a>
          </div>

          {/* Movie Group */}
          <div className="group-card p-4 bg-gray-800/70 dark:bg-gray-900/70 rounded-xl shadow-lg flex justify-between items-center">
            <div className="group-info">
              <span className="category block text-sm text-blue-300">Movie Only 🎬</span>
              <span className="title block font-semibold text-white">Group Link</span>
            </div>
            <a
              href="https://chat.whatsapp.com/J3naslGyDDyGtHHQyAVQpW"
              className="join-btn px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN US
            </a>
          </div>

          {/* TV-Series Community */}
          <div className="group-card p-4 bg-gray-800/70 dark:bg-gray-900/70 rounded-xl shadow-lg flex justify-between items-center">
            <div className="group-info">
              <span className="category block text-sm text-blue-300">TV-Series Only 📺</span>
              <span className="title block font-semibold text-white">TV-Series Community</span>
            </div>
            <a
              href="https://chat.whatsapp.com/IcjVWaOg52IJaX75pAQJr2"
              className="join-btn px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN US
            </a>
          </div>

          {/* Official Channel */}
          <div className="group-card channel-card p-4 bg-gray-800/70 dark:bg-gray-900/70 rounded-xl shadow-lg flex justify-between items-center">
            <div className="group-info">
              <span className="category block text-sm text-blue-300">Official Channel 📢</span>
              <span className="title block font-semibold text-white">Follow Our Updates</span>
            </div>
            <a
              href="https://whatsapp.com/channel/0029Vb6oAn2EquiVw3u3Y63q/184"
              className="follow-btn px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              FOLLOW US
            </a>
          </div>
        </div>
      </section>

      {/* 🛡️ Admin Section */}
      <section className="admin-section mb-6">
        <h2 className="section-title text-lg font-bold mb-4 text-indigo-400">
          🛡️ Management Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Owner */}
          <div className="admin-card owner p-4 bg-gray-800/70 dark:bg-gray-900/70 rounded-xl shadow-lg flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="admin-icon text-3xl">👤</div>
              <div className="admin-info">
                <span className="role block text-sm text-blue-300">Group Owner</span>
                <span className="name block font-semibold text-white">Pathum Malsara</span>
              </div>
            </div>
            <a
              href="https://wa.me/94773416478"
              className="wa-btn px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              🥏 Contact
            </a>
          </div>

          {/* Admin */}
          <div className="admin-card p-4 bg-gray-800/70 dark:bg-gray-900/70 rounded-xl shadow-lg flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="admin-icon text-3xl">👮</div>
              <div className="admin-info">
                <span className="role block text-sm text-blue-300">Group Admin</span>
                <span className="name block font-semibold text-white">Pathum Malsara</span>
              </div>
            </div>
            <a
              href="https://wa.me/94773416478"
              className="wa-btn px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              🥏 Contact
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-gray-400">
        <p>© 2026 LT MOVIE HUB. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default FooterSections;export default FooterSections;
