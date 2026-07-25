const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.nav');menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const filters=document.querySelectorAll('.filter');const cards=document.querySelectorAll('.job-card');filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;cards.forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.category!==f))}));
'purchasing-chinese': {
  title: 'Nhân viên mua hàng tiếng Trung',

  summary: 'Bộ phận Thu mua • Toàn thời gian • Tòa nhà Việt Hương, Thanh Liệt, Hà Nội',

  tasks: [
    'Theo dõi đơn đặt hàng, quản lý tồn kho và tính toán nhu cầu đặt hàng.',
    'Tìm kiếm báo giá, đàm phán với nhà cung cấp và thực hiện đặt hàng.',
    'Theo dõi tiến độ đơn hàng, bảo đảm đáp ứng kế hoạch sản xuất.',
    'Kiểm soát số lượng và chất lượng hàng hóa nhập kho.',
    'Tìm kiếm, đánh giá nhà cung cấp mới.',
    'Theo dõi và đối chiếu công nợ hàng tháng.'
  ],

  requirements: [
    'Tốt nghiệp từ Cao đẳng trở lên.',
    'Không yêu cầu kinh nghiệm, ứng viên sẽ được đào tạo.',
    'Tiếng Trung giao tiếp từ HSK4.',
    'Sử dụng được Word và Excel.',
    'Có khả năng giao tiếp, thương lượng và đàm phán.',
    'Nhanh nhẹn, hoạt bát.'
  ],

  salary: 'Thu nhập 10–15 triệu đồng + phụ cấp, tùy kinh nghiệm.'
}
const jobs={ecommerce:{title:'Chuyên viên Vận hành Sàn TMĐT',summary:'Phòng Marketing • Toàn thời gian • Tầng 4, Tòa nhà Việt Hương',tasks:['Xây dựng lộ trình vận hành ngành hàng, chịu trách nhiệm mục tiêu doanh thu, lợi nhuận và độ phủ thương hiệu.','Quản lý Seller Center: đăng sản phẩm, cập nhật giá, quản lý tồn kho.','Nghiên cứu thị trường, từ khóa và tối ưu SEO, hình ảnh, banner để tăng traffic và chuyển đổi.','Lập kế hoạch, thiết lập và tối ưu quảng cáo nội sàn Shopee theo ROAS/ROI mục tiêu.','Theo dõi chỉ số gian hàng, xây dựng báo cáo và đề xuất giải pháp.'],requirements:['Tốt nghiệp Đại học chuyên ngành TMĐT, Marketing hoặc Quản trị kinh doanh.','Từ 2 năm kinh nghiệm; am hiểu Shopee và TikTok Shop.','Ưu tiên kinh nghiệm ngành FMCG, mỹ phẩm hoặc thời trang.','Chủ động, nhanh nhẹn, chịu áp lực doanh số và xử lý vấn đề tốt.'],salary:'Lương cứng 10–15 triệu; tổng thu nhập 10–20 triệu.'},tiktok:{title:'Chuyên viên TikTok Ads',summary:'Phòng Marketing • Toàn thời gian • Tầng 4, Tòa nhà Việt Hương',tasks:['Setup và quản lý TikTok Business; phân tách đối tượng, giá thầu, ngân sách, A/B testing.','Xây dựng chiến lược quảng cáo theo vòng đời sản phẩm và kiểm soát traffic.','Theo dõi CTR, CR, GPM, ROI, CPA; tắt hoặc scale chiến dịch theo dữ liệu.','Phối hợp Media và KOC để tối ưu hook 3 giây đầu và nội dung chuyển đổi.','Nghiên cứu xu hướng Beauty và chuẩn bị layout quảng cáo cho Mega Sale.'],requirements:['Từ 2 năm kinh nghiệm thực chiến TikTok Ads.','Ưu tiên ngành Beauty, Fashion hoặc FMCG.','Hiểu Performance Marketing, có kiến thức Content và biết chỉnh sửa video.','Nhạy bén với dữ liệu, ham học hỏi và chịu được áp lực.'],salary:'Lương cứng 10–15 triệu + phụ cấp và chuyên cần.'}};
const dialog=document.querySelector('#jobDialog');const content=document.querySelector('#dialogContent');document.querySelectorAll('.job-detail-btn').forEach(btn=>btn.addEventListener('click',()=>{const j=jobs[btn.dataset.job];content.innerHTML=`<span class="eyebrow">CHI TIẾT TUYỂN DỤNG</span><h2>${j.title}</h2><p>${j.summary}</p><h3>Mô tả công việc</h3><ul>${j.tasks.map(x=>`<li>${x}</li>`).join('')}</ul><h3>Yêu cầu</h3><ul>${j.requirements.map(x=>`<li>${x}</li>`).join('')}</ul><h3>Thu nhập</h3><p><strong>${j.salary}</strong></p><a class="btn btn-primary" href="#apply" onclick="document.querySelector('#jobDialog').close()">Ứng tuyển vị trí này</a>`;dialog.showModal()}));document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelector('#applyForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);const subject=encodeURIComponent(`Ứng tuyển ${d.get('position')} - ${d.get('name')}`);const body=encodeURIComponent(`Họ và tên: ${d.get('name')}\nSố điện thoại: ${d.get('phone')}\nEmail: ${d.get('email')}\nVị trí: ${d.get('position')}\n\nLời nhắn:\n${d.get('message')||''}\n\nLưu ý: Vui lòng đính kèm CV trước khi gửi email.`);window.location.href=`mailto:tuyendung.vhgroup@gmail.com?subject=${subject}&body=${body}`});
