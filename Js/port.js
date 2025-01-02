// JavaScript Document
var typed = new Typed(".element", {
  strings: ["Leo", "Content Creator", "Graphic Designer"],
  typeSpeed: 30,
  backSpeed: 20,
  loop: true,
});

/*counterbox*/
// Kích hoạt countup khi trang cuộn đến phần tử
$(document).ready(function () {
    const statsSection = $('.stats-section');
    const counters = $('.counter');
    let triggered = false;

    const checkIfInView = () => {
        const sectionOffset = statsSection.offset().top - $(window).height();
        if ($(window).scrollTop() > sectionOffset && !triggered) {
            counters.each(function () {
                const $this = $(this);
                $this.countUp({
                    delay: 10, // Tốc độ đếm (ms)
                    time: 2000 // Thời gian đếm (ms)
                });
            });
            triggered = true;
        }
    };

    // Gọi hàm khi trang được tải
    checkIfInView();

    // Gọi hàm khi người dùng cuộn
    $(window).scroll(checkIfInView);
});


/*project*/
document.querySelectorAll('.category-list li a').forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all tabs and content
    document.querySelectorAll('.category-list li').forEach((li) => li.classList.remove('active'));
    document.querySelectorAll('.project-content').forEach((content) => content.classList.remove('active'));

    // Add active class to the clicked tab and corresponding content
    const target = e.target.getAttribute('data-target');
    e.target.parentElement.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});

/*video*/
$(document).ready(function () {
  $('.category-list li a').click(function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định
    const target = $(this).data('target'); // Lấy ID của tab được chọn

    // Ẩn tất cả nội dung tab
    $('.project-content').removeClass('active');

    // Hiển thị tab được chọn
    $('#' + target).addClass('active');

    // Đổi trạng thái "active" cho danh sách tab
    $('.category-list li').removeClass('active');
    $(this).parent().addClass('active');
  });
});


// Hiệu ứng Sparkling
document.addEventListener("mousemove", (e) => {
  // Tạo một phần tử "sparkle"
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  // Đặt vị trí của đốm sáng
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;

  // Thêm vào body
  document.body.appendChild(sparkle);

  // Xóa đốm sáng sau 1 giây để tránh quá tải
  setTimeout(() => {
    sparkle.remove();
  }, 1000);
});

// Hiệu ứng Navbar
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section"); // Lấy tất cả các section
  const navLinks = document.querySelectorAll(".nav-link"); // Lấy tất cả các link trong navbar

  window.addEventListener("scroll", () => {
    let currentSection = "";

    // Kiểm tra section nào đang trong viewport
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    // Thêm class 'active' vào nav-link tương ứng
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
});

// HIệu ứng typing About
document.addEventListener("DOMContentLoaded", () => {
  const waveText = document.querySelector(".wave-text");
  const text = waveText.getAttribute("data-text");

  // Tách text thành các từ
  waveText.innerHTML = text
    .split(" ") // Chia text theo khoảng trắng giữa các từ
    .map((word) =>
      // Mỗi từ được bọc trong một span
      `<span>${word
        .split("") // Chia từ thành từng ký tự
        .map(
          (char, i) =>
            `<span style="animation-delay:${i * 0.1}s">${char}</span>`
        )
        .join("")}</span>`
    )
    .join(" "); // Giữ khoảng trắng giữa các từ
});

// HIệu ứng audiio
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-audio");

  // Khi audio kết thúc, không phát lại
  audio.addEventListener("ended", () => {
    console.log("Audio has finished playing");
  });
});

// Lấy phần tử nút "Back to Top"
let mybutton = document.getElementById("btn-back-to-top");

// Hiển thị nút khi người dùng cuộn xuống
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 || // Cuộn xuống 20px
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block"; // Hiển thị nút
  } else {
    mybutton.style.display = "none"; // Ẩn nút
  }
}

// Cuộn lên đầu trang khi nhấn nút
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0; // Với Safari
  document.documentElement.scrollTop = 0; // Với Chrome, Firefox, IE, và Opera
}

// Chuyển tab project
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".category-list a");
  const contents = document.querySelectorAll(".project-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault(); // Ngăn hành động mặc định của thẻ <a>

      // Xóa class "active" khỏi tất cả các tab và nội dung
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      // Thêm class "active" cho tab được nhấn
      this.classList.add("active");

      // Hiển thị nội dung tương ứng
      const targetId = this.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
    });
  });
});
