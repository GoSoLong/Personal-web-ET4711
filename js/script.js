const profile = {
  name: '[HỌ VÀ TÊN]',
  dateOfBirth: '[NGÀY SINH]',
  studentId: '[MSSV]',
  major: '[NGÀNH]',
  school: '[TRƯỜNG]',
  cohort: '[KHÓA]',
  email: '[EMAIL]',
  github: '[GITHUB]',
  linkedin: '[LINKEDIN]'
};

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const profileNodes = document.querySelectorAll('[data-profile]');
profileNodes.forEach((node) => {
  const key = node.dataset.profile;
  if (profile[key]) {
    node.textContent = profile[key];
  }
});

const emailLinks = document.querySelectorAll('a[data-profile="email"]');
emailLinks.forEach((link) => {
  const email = profile.email !== '[EMAIL]' ? profile.email : '[EMAIL]';
  link.textContent = email;
  link.setAttribute('href', `mailto:${email}`);
});

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');
if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Vui lòng điền đầy đủ thông tin trước khi gửi.';
      formStatus.style.color = '#b91c1c';
      return;
    }

    formStatus.textContent = 'Cảm ơn bạn! Form đang ở trạng thái demo và chưa gửi dữ liệu thật.';
    formStatus.style.color = '#0e8a5b';
    contactForm.reset();
  });
}
