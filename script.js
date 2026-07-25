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
  },

   'purchasing-manager': {
    title: 'Trưởng phòng Mua hàng',

    summary:
      'Bộ phận Mua hàng • Toàn thời gian • Tòa nhà Việt Hương',

    tasks: [
      'Xây dựng và triển khai chiến lược mua hàng theo kế hoạch sản xuất – kinh doanh.',
      'Lập kế hoạch mua hàng theo tháng, quý và năm.',
      'Xây dựng chiến lược sourcing nội địa, nhập khẩu và đa dạng hóa nhà cung cấp.',
      'Tìm kiếm, đánh giá, lựa chọn và phát triển nhà cung cấp.',
      'Đàm phán giá, điều khoản hợp đồng và xây dựng KPI đánh giá nhà cung cấp.',
      'Theo dõi biến động giá thị trường và quản lý ngân sách mua hàng.',
      'Đề xuất phương án tối ưu chi phí, hạn chế thất thoát và lãng phí.',
      'Phối hợp với sản xuất, kho và QC/QA để bảo đảm nguyên vật liệu sẵn sàng.',
      'Kiểm soát thời gian đặt hàng, giao hàng và xử lý thiếu hàng hoặc trễ hàng.',
      'Quản lý đội ngũ mua hàng, phân công công việc, đào tạo và đánh giá hiệu suất.',
      'Chuẩn hóa quy trình mua hàng từ đề nghị mua đến thanh toán.',
      'Báo cáo chi phí, hiệu quả mua hàng và tham mưu cho Ban lãnh đạo.'
    ],

    requirements: [
      'Tốt nghiệp Đại học trở lên.',
      'Có kiến thức về ngành, đối thủ, nhà cung cấp và vật tư hàng hóa.',
      'Có kiến thức về hải quan và xuất nhập khẩu.',
      'Có ít nhất 3 năm kinh nghiệm quản lý ở vị trí tương đương.',
      'Thành thạo các phần mềm văn phòng.',
      'Thành thạo tiếng Anh hoặc tiếng Trung ở cả bốn kỹ năng.',
      'Có kỹ năng lập kế hoạch, tổ chức và điều phối.',
      'Có kỹ năng quản lý, giám sát và ra quyết định.',
      'Có khả năng đàm phán, giải quyết vấn đề và xử lý khiếu nại.',
      'Có kỹ năng lãnh đạo, đào tạo và phát triển nhân sự.'
    ],

    salary:
      'Thu nhập từ 30–35 triệu đồng, tùy theo kinh nghiệm và năng lực.'
  },

   'sales-executive': {
    title: 'Nhân viên Kinh doanh',

    summary:
      'Phòng Kinh doanh • Toàn thời gian • Tòa nhà Việt Hương, Thanh Liệt, Hà Nội',

    tasks: [
      'Phát triển và mở rộng hệ thống khách hàng trong nước và quốc tế.',
      'Làm việc trực tiếp với chủ doanh nghiệp, đối tác chiến lược và các thương hiệu mỹ phẩm.',
      'Tư vấn giải pháp sản xuất và gia công mỹ phẩm phù hợp với từng phân khúc thị trường.',
      'Đồng hành cùng khách hàng trong quá trình xây dựng và mở rộng thương hiệu.',
      'Thực hiện các công việc theo kế hoạch kinh doanh và yêu cầu của công ty.'
    ],

    requirements: [
      'Tốt nghiệp Đại học.',
      'Phong thái chuyên nghiệp và có khả năng giao tiếp tốt.',
      'Tư duy chủ động, linh hoạt và có tinh thần trách nhiệm cao.',
      'Nhanh nhẹn, cầu tiến, trung thực và bền bỉ.',
      'Thành thạo tin học văn phòng.',
      'Có khả năng thuyết trình, đào tạo và thuyết phục.',
      'Có kỹ năng giải quyết vấn đề và chủ động đề xuất giải pháp.',
      'Có kỹ năng làm việc nhóm tốt.',
      'Ứng viên mới tốt nghiệp có tố chất sẽ được đào tạo và mentoring 1–1.'
    ],

    salary:
      'Thu nhập 10–30 triệu đồng/tháng; lương cứng 8–10 triệu đồng, cộng phụ cấp, chuyên cần và thưởng.'
  },

   'hr-director': {
    title: 'Giám đốc Nhân sự (CHRO)',

    summary:
      'Bộ phận Nhân sự • Toàn thời gian • Tòa nhà Việt Hương Building',

   tasks: [
      'Xây dựng chiến lược nhân sự ngắn hạn, trung hạn và dài hạn phù hợp với chiến lược kinh doanh.',
      'Xây dựng mô hình tổ chức phục vụ mục tiêu mở rộng quy mô trên 1.000 nhân sự.',
      'Thiết kế và tối ưu cơ cấu tổ chức, chức năng và nhiệm vụ của từng phòng ban.',
      'Chuẩn hóa hệ thống JD, khung năng lực, cấp bậc, chức danh và hệ thống phân quyền.',
      'Thiết kế hệ thống BSC, KPI và OKRs.',
      'Xây dựng chính sách lương 3P, cơ chế thưởng và hệ thống đánh giá hiệu suất.',
      'Kiểm soát ngân sách nhân sự.',
      'Quản trị lực lượng lao động sản xuất, ca kíp và năng suất lao động.',
      'Giải quyết tranh chấp lao động và kiểm soát tuân thủ luật lao động.',
      'Triển khai văn hóa doanh nghiệp và truyền thông nội bộ.',
      'Thực hiện chuyển đổi số và quản trị dữ liệu nhân sự.',
      'Làm việc và tham mưu trực tiếp cho Tổng giám đốc và Ban lãnh đạo.'
   ],

    requirements: [
      'Tốt nghiệp Đại học trở lên các chuyên ngành Quản trị nhân sự, Luật, Kinh tế hoặc Quản trị kinh doanh.',
      'Có ít nhất 3–5 năm kinh nghiệm ở vị trí Giám đốc Nhân sự hoặc tương đương.',
      'Ưu tiên ứng viên có kinh nghiệm trong ngành mỹ phẩm, dược hoặc thực phẩm chức năng.',
      'Ưu tiên kinh nghiệm tại doanh nghiệp có quy mô nhà máy trên 500 nhân sự.',
      'Có kinh nghiệm scale tổ chức từ SME lên Tập đoàn, xây dựng hệ thống từ đầu hoặc tái cấu trúc.',
      'Am hiểu sâu hệ thống KPI, OKRs, BSC, luật lao động và quan hệ lao động.',
      'Có tư duy chiến lược và business mindset.',
      'Có kỹ năng lãnh đạo, phát triển đội ngũ và quản trị khủng hoảng nhân sự.',
      'Có khả năng làm việc với CEO và Hội đồng quản trị.',
      'Ưu tiên thành thạo tiếng Anh.'
   ],

    salary:
      'Thu nhập thỏa thuận theo kinh nghiệm và năng lực; có thưởng ESOP, tháng lương thứ 13 và các chế độ phúc lợi.'
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
