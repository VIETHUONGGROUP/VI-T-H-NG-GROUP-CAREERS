const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
}

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.job-card');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(x => x.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.dataset.filter;

    cards.forEach(card => {
      const hidden =
        filterValue !== 'all' &&
        card.dataset.category !== filterValue;

      card.classList.toggle('hidden', hidden);
    });
  });
});

const jobs = {
  ecommerce: {
    title: 'Chuyên viên Vận hành Sàn TMĐT',
    summary: 'Phòng Marketing • Toàn thời gian • Tầng 4, Tòa nhà Việt Hương',
    tasks: [
      'Xây dựng lộ trình vận hành ngành hàng và chịu trách nhiệm mục tiêu kinh doanh.',
      'Quản lý Seller Center: đăng sản phẩm, cập nhật giá và quản lý tồn kho.',
      'Tối ưu SEO, hình ảnh và nội dung để tăng chuyển đổi.',
      'Thiết lập và tối ưu quảng cáo nội sàn Shopee.',
      'Theo dõi chỉ số gian hàng, lập báo cáo và đề xuất giải pháp.'
    ],
    requirements: [
      'Tốt nghiệp Đại học chuyên ngành Thương mại điện tử, Marketing hoặc Quản trị kinh doanh.',
      'Có từ 2 năm kinh nghiệm.',
      'Am hiểu Shopee và TikTok Shop.',
      'Chủ động, nhanh nhẹn và chịu được áp lực doanh số.'
    ],
    salary: 'Lương cứng 10–15 triệu; tổng thu nhập 10–20 triệu.'
  },

  tiktok: {
    title: 'Chuyên viên TikTok Ads',
    summary: 'Phòng Marketing • Toàn thời gian • Tầng 4, Tòa nhà Việt Hương',
    tasks: [
      'Thiết lập và quản lý TikTok Business.',
      'Phân bổ ngân sách, A/B testing và tối ưu quảng cáo.',
      'Theo dõi CTR, CR, ROI và CPA.',
      'Phối hợp với Media và KOC để tối ưu nội dung.',
      'Nghiên cứu xu hướng và chuẩn bị quảng cáo cho Mega Sale.'
    ],
    requirements: [
      'Có từ 2 năm kinh nghiệm thực chiến TikTok Ads.',
      'Ưu tiên kinh nghiệm ngành Beauty, Fashion hoặc FMCG.',
      'Hiểu Performance Marketing và có kiến thức Content.',
      'Nhạy bén với dữ liệu và chịu được áp lực.'
    ],
    salary: 'Lương cứng 10–15 triệu + phụ cấp và chuyên cần.'
  },
  
   'purchasing': {
    title: 'Nhân viên mua hàng',

    summary:
      'Phòng Thu mua • Toàn thời gian • Tòa nhà Việt Hương, Thanh Liệt, Hà Nội',

    tasks: [
      'Theo dõi đơn đặt hàng từ khách hàng, quản lý tồn kho và tính toán số lượng cần đặt.',
      'Tìm kiếm báo giá, đàm phán với nhà cung cấp và thực hiện đặt hàng sau khi được phê duyệt.',
      'Theo dõi, thúc đẩy tiến độ đơn hàng, bảo đảm đáp ứng kế hoạch sản xuất.',
      'Theo dõi chất lượng hàng hóa nhập kho và xử lý các vấn đề về số lượng, chất lượng.',
      'Tìm kiếm mẫu mã sản phẩm mới và đánh giá nhà cung cấp mới.',
      'Trao đổi, ký hợp đồng nguyên tắc và hợp đồng kinh tế với nhà cung cấp.',
      'Theo dõi, đối chiếu công nợ và gửi đề xuất thanh toán hàng tháng.',
      'Báo cáo và phối hợp xử lý sản phẩm bị hỏng hoặc sai quy cách.'
    ],

    requirements: [
      'Tốt nghiệp từ Cao đẳng trở lên.',
      'Ưu tiên các chuyên ngành hóa, dược, thực phẩm, công nghệ sinh học, kế toán hoặc in ấn.',
      'Có từ 6 tháng đến 1 năm kinh nghiệm.',
      'Có khả năng đọc hiểu tiếng Anh hoặc tiếng Trung.',
      'Có hiểu biết về mua hàng và xuất nhập khẩu.',
      'Sử dụng được Word, Excel và các công cụ tin học văn phòng.',
      'Có khả năng giao tiếp, thương lượng và đàm phán tốt.',
      'Nhanh nhẹn, hoạt bát và có trách nhiệm trong công việc.'
    ],
    salary: 'Thu nhập 10–15 triệu đồng + phụ cấp.'
  }
};

const dialog = document.querySelector('#jobDialog');
const content = document.querySelector('#dialogContent');
const closeButton = document.querySelector('.dialog-close');

document.querySelectorAll('.job-detail-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const jobKey = btn.dataset.job;
    const job = jobs[jobKey];

    if (!job || !dialog || !content) {
      console.error('Không tìm thấy vị trí:', jobKey);
      return;
    }

    content.innerHTML = `
      <span class="eyebrow">CHI TIẾT TUYỂN DỤNG</span>
      <h2>${job.title}</h2>
      <p>${job.summary}</p>

      <h3>Mô tả công việc</h3>
      <ul>
        ${job.tasks.map(item => `<li>${item}</li>`).join('')}
      </ul>

      <h3>Yêu cầu</h3>
      <ul>
        ${job.requirements.map(item => `<li>${item}</li>`).join('')}
      </ul>

      <h3>Thu nhập</h3>
      <p><strong>${job.salary}</strong></p>
    `;

    dialog.showModal();
  });
});

if (closeButton && dialog) {
  closeButton.addEventListener('click', () => {
    dialog.close();
  });

  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

const applyForm = document.querySelector('#applyForm');

if (applyForm) {
  applyForm.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(event.target);

    const subject = encodeURIComponent(
      `Ứng tuyển ${data.get('position')} - ${data.get('name')}`
    );

    const body = encodeURIComponent(
      `Họ và tên: ${data.get('name')}
Số điện thoại: ${data.get('phone')}
Email: ${data.get('email')}
Vị trí: ${data.get('position')}

Lời nhắn:
${data.get('message') || ''}`
    );

    window.location.href =
      `mailto:tuyendung.vhgroup@gmail.com?subject=${subject}&body=${body}`;
  });
}
