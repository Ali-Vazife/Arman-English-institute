const $ = document
const template = $.createElement("template")
template.innerHTML = `
<link
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.rtl.min.css"
integrity="sha384-+qdLaIRZfNu4cVPK/PxJJEy0B0f3Ugv8i482AKY7gwXwhaCroABd086ybrVKTa0q"
crossorigin="anonymous"
/>
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="components/MainHomePage/main.css">
<link rel="stylesheet" href="queries.css" />

<main>
<div class="container-fluid bg-image home-container position-relative">
  <h3
    class="position-absolute text-motto top-50 start-50 translate-middle text-center mt-1"
  >
    از آکادمی ما، به تمامی کشورها خوشامد میگویم، و با هم در جهانی بی مرز
    گفتگو میکنیم.
  </h3>
</div>
<div class="container-fluid second-home-container">
  <div class="container-fluid header-second-container">
    <h4 class="h4-second-header pt-2">
      دوره های آموزشی آکادمی زبان انگلیسی آرمان
    </h4>
    <p class="p-second-header">شروع یادگیری و پیشرفت</p>
  </div>
  <div
    class="container-fluid row row-cols-1 row-cols-md-3 g-4 justify-content-center align-items-center card-maincontainer"
    style="max-width: 84rem"
  >
    <div class="col">
      <div class="card shadow rounded border">
        <img
          src="images/1.jpg"
          class="card-img-top img-fluid"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">دوره مناسب برای کودکان</h5>
          <a href="#" class="btn btn-end btn-primary mt-3 btn-lg"
            >اطلاعات بیشتر</a
          >
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow rounded">
        <img
          src="images/2 (3).jpg"
          class="card-img-top img-fluid"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">دوره مناسب برای نوجوانان</h5>
          <a href="#" class="btn btn-primary mt-3 btn-lg"
            >اطلاعات بیشتر</a
          >
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow rounded">
        <img
          src="images/5.jpg"
          class="card-img-top img-fluid"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">دوره مناسب برای بزرگسالان</h5>
          <a href="#" class="btn btn-primary mt-3 btn-lg"
            >اطلاعات بیشتر</a
          >
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow rounded">
        <img
          src="images/4.jpg"
          class="card-img-top img-fluid"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">دوره مناسب برای تربیت معلم</h5>
          <a href="#" class="btn btn-primary mt-3 btn-lg"
            >اطلاعات بیشتر</a
          >
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow rounded">
        <img
          src="images/3.jpg"
          class="card-img-top img-fluid"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">دوره مناسب برای کارمندان شرکت ها</h5>
          <a href="#" class="btn btn-primary mt-3 btn-lg"
            >اطلاعات بیشتر</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="infotext-second-container">
    <p>
      برای جزییات بیشتر در مورد هر دوره روی "اطلاعات بیشتر" کلیک کنید.
    </p>
  </div>
</div>
<div class="container third-home-container pt-5">
  <div
    class="first-info-elements d-flex justify justify-content-center align-items-center p-2 bd-highlight gap-1"
  >
    <div class="px-3 text-information">
      <h3>چرا یادگیری زبان انگلیسی؟</h3>
      <p>
        “انگلیسی به عنوان زبان جهانی ارتباطات، افراد را از فرهنگ‌ها،
        کشورها و زمینه‌های مختلف به هم متصل می‌کند. به عنوان یک پل برای
        فراتر از مرزها عمل می‌کند و درک بین‌المللی را تسهیل می‌کند. تسلط
        بر زبان انگلیسی دسترسی به فرصت‌های بی‌نظیری را در دنیایی پیش روی
        ما فراهم می‌سازد، هم در بُعد شخصی و هم حرفه‌ای. این امکان را به
        افراد می‌دهد که در گفت‌وگوهای بین‌فرهنگی شرکت کنند، در خارج از
        کشور تحصیل کنند، در مؤسسات برتر تحصیلات تکمیلی رشد کنند و به
        فرصت‌های شغلی مختلفی دست یابند. با یادگیری زبان انگلیسی، آماده
        شوید تا به گستره‌ی وسیعی از امکانات دست یابید و در جوانب مختلف
        زندگی، از سفر و تجارت تا تحصیلات و پیوستن به دنیایی گسترده‌تر، به
        قدرت این زبان بزرگ پی ببرید.”
      </p>
    </div>
  </div>
  <div
    class="container second-info-elements d-flex justify justify-content-center align-items-center p-2 bd-highlight"
  >
    <div class="text-information" style="width: 50%">
      <h3>زبان انگلیسی برای کودکان؟</h3>
      <p>
        "زبان انگلیسی، کلیدی برای آیندهٔ روشن کودکان است. امروزه این زبان،
        دریچه‌ای به جهانی از فرصت‌ها و ارتباطات است. با یادگیری زبان
        انگلیسی، کودکان قدرت برقراری ارتباط با افراد مختلف را خواهند داشت
        و به دنیایی از منابع علمی و فرهنگی جهانی نیز خواهند دسترسی یافت.
        همچنین، این زبان مسیری روشن برای رشد و داشتن فرصت های شغلی مختلف
        خواهد بود. یادگیری زبان انگلیسی، پلی است به آینده‌ای درخشان برای
        کودکان."
      </p>
    </div>
    <div class="img-info" style="width: 50%">
      <img
        class="img-fluid"
        src="images/Enjoy these Teacher Day Vectors for Free.jpg"
        alt=""
      />
    </div>
  </div>
</div>
<div class="container fourth-home-container">
  <div class="card" dir="ltr">
    <div class="card-body text-center shadow-sm">
      <blockquote
        class="blockquote mb-0 justify-content-center align-items-center"
      >
        <p class="quote-text">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_104_207)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M100 100C100 100 112.5 66.5265 112.5 42.8571C112.5 19.1878 106.904 0 100 0C93.0964 0 87.5 19.1878 87.5 42.8571C87.5 66.5265 100 100 100 100ZM100 100C100 100 133.474 87.5 157.143 87.5C180.812 87.5 200 93.0964 200 100C200 106.904 180.812 112.5 157.143 112.5C133.495 112.5 100.062 100.023 100 100L100 100ZM100 100C100 100 87.5 133.474 87.5 157.143C87.5 180.812 93.0964 200 100 200C106.904 200 112.5 180.812 112.5 157.143C112.5 133.495 100.023 100.062 100 100ZM100 100C100 100 66.5265 112.5 42.8571 112.5C19.1878 112.5 0 106.904 0 100C0 93.0964 19.1878 87.5 42.8571 87.5C66.5265 87.5 100 100 100 100Z"
                fill="url(#paint0_linear_104_207)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_104_207"
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A7B5FF" />
                <stop offset="1" stop-color="#F3ACFF" />
              </linearGradient>
              <clipPath id="clip0_104_207">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>
          "A different language is a different vision of life."
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_104_207)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M100 100C100 100 112.5 66.5265 112.5 42.8571C112.5 19.1878 106.904 0 100 0C93.0964 0 87.5 19.1878 87.5 42.8571C87.5 66.5265 100 100 100 100ZM100 100C100 100 133.474 87.5 157.143 87.5C180.812 87.5 200 93.0964 200 100C200 106.904 180.812 112.5 157.143 112.5C133.495 112.5 100.062 100.023 100 100L100 100ZM100 100C100 100 87.5 133.474 87.5 157.143C87.5 180.812 93.0964 200 100 200C106.904 200 112.5 180.812 112.5 157.143C112.5 133.495 100.023 100.062 100 100ZM100 100C100 100 66.5265 112.5 42.8571 112.5C19.1878 112.5 0 106.904 0 100C0 93.0964 19.1878 87.5 42.8571 87.5C66.5265 87.5 100 100 100 100Z"
                fill="url(#paint0_linear_104_207)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_104_207"
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A7B5FF" />
                <stop offset="1" stop-color="#F3ACFF" />
              </linearGradient>
              <clipPath id="clip0_104_207">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </p>
        <footer class="blockquote-footer">Federico Fellini</footer>
      </blockquote>
    </div>
  </div>
</div>
</main>
`
class MainHomePage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

export { MainHomePage }