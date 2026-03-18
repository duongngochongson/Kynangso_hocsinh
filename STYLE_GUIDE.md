# PIXELVERSE — STYLE GUIDE & NGUYÊN TẮC THỐNG NHẤT

> Tài liệu này là **luật chung** cho toàn bộ dự án PIXELVERSE.
> Mọi app mới, mọi sửa đổi đều phải tuân theo tài liệu này.

---

## MỤC LỤC

1. [Triết lý thiết kế](#1-triết-lý-thiết-kế)
2. [Cấu trúc thư mục](#2-cấu-trúc-thư-mục)
3. [Bảng màu & CSS Variables](#3-bảng-màu--css-variables)
4. [Typography](#4-typography)
5. [Nút bấm (Buttons)](#5-nút-bấm-buttons)
6. [Card & Container](#6-card--container)
7. [Navigation — Di chuyển giữa các trang](#7-navigation--di-chuyển-giữa-các-trang)
8. [Layout & Responsive](#8-layout--responsive)
9. [Animation & Hiệu ứng](#9-animation--hiệu-ứng)
10. [Âm thanh (SFX)](#10-âm-thanh-sfx)
11. [Lưu trữ dữ liệu (Save/Load)](#11-lưu-trữ-dữ-liệu-saveload)
12. [Logic game — Mẫu chung](#12-logic-game--mẫu-chung)
13. [Code template — HTML App mới](#13-code-template--html-app-mới)
14. [Quy tắc đặt tên](#14-quy-tắc-đặt-tên)
15. [Trạng thái & Phản hồi người dùng](#15-trạng-thái--phản-hồi-người-dùng)
16. [Accessibility & Touch](#16-accessibility--touch)
17. [Admin & Quản lý nội dung](#17-admin--quản-lý-nội-dung)
18. [Hiệu năng](#18-hiệu-năng)
19. [Checklist khi tạo app mới](#19-checklist-khi-tạo-app-mới)
20. [Đề xuất cấu trúc thư mục tối giản](#20-đề-xuất-cấu-trúc-thư-mục-tối-giản)

---

## 1. TRIẾT LÝ THIẾT KẾ

| Nguyên tắc | Mô tả |
|---|---|
| **Zero dependency** | Không framework, không npm, không build tool. Vanilla HTML/CSS/JS thuần. |
| **Single-file app** | Mỗi app = 1 file `index.html` duy nhất (CSS + JS inline). |
| **Retro pixel + Neon cyberpunk** | Aesthetic xuyên suốt: nền tối, viền neon, font pixel, glow effect. |
| **Offline-first** | localStorage là nguồn ưu tiên, JSON là fallback. |
| **Tối giản** | Chỉ code cái cần. Không over-engineer. 3 dòng lặp tốt hơn 1 abstraction thừa. |

---

## 2. CẤU TRÚC THƯ MỤC

### Hiện tại (vấn đề)

```
vibecode_apps/
├── css/style.css
├── js/utils.js, sfx.js, games-popup.js, game-visibility.js, admin-auth.js
├── data/admin_content.json
├── apps/
│   ├── admin/index.html
│   ├── calculator/index.html
│   ├── pros-cons/index.html
│   ├── mind-map/index.html
│   ├── matching/index.html
│   ├── file-naming/index.html
│   ├── mece/index.html
│   ├── prompt-order/index.html
│   └── noticeboard/index.html
└── index.html
```

**Vấn đề:** 9 thư mục con trong `apps/`, mỗi thư mục chỉ có 1 file. Quá nhiều folder cho quá ít file.

### Đề xuất: Cấu trúc phẳng a.b.c (xem mục 20)

---

## 3. BẢNG MÀU & CSS VARIABLES

### Nguyên tắc màu

| Variable | Hex | Vai trò | Khi nào dùng |
|---|---|---|---|
| `--bg-dark` | `#05050f` | Nền chính | `body`, nền trang |
| `--bg-card` | `#0d0d2b` | Nền card | Card, popup, modal, banner |
| `--bg-card2` | `#12122e` | Nền card phụ | Input field, nested card |
| `--cyan` | `#00fff5` | Màu chủ đạo | Link, viền mặc định, logo, trạng thái active |
| `--magenta` | `#ff00cc` | Màu nhấn | Badge, trạng thái sai, card accent |
| `--yellow` | `#ffe600` | Màu cảnh báo/admin | Section title, admin modal, toast |
| `--green` | `#39ff14` | Màu thành công | Nút check, đáp án đúng, result banner |
| `--orange` | `#ff6b00` | Màu lỗi | Error text, trạng thái sai (phụ) |
| `--white` | `#e8e8ff` | Màu chữ | Text body, tiêu đề |
| `--grey` | `#3a3a6e` | Màu mờ | Disabled, divider, viền không active |

### Quy tắc phân bổ màu cho card

Luân phiên theo thứ tự: `cyan → magenta → green → yellow → cyan → ...`

Mỗi app có 1 màu cố định. Không thay đổi.

### Quy tắc glow

```css
/* Glow nhẹ (resting state) */
box-shadow: 0 0 8px var(--color), 0 0 20px rgba(r,g,b,0.2);

/* Glow mạnh (hover/active) */
box-shadow: 8px 8px 0 var(--color), 0 0 30px rgba(r,g,b,0.3);
```

---

## 4. TYPOGRAPHY

### Font stack

| Variable | Font | Dùng cho |
|---|---|---|
| `--font-pixel` | `'Press Start 2P'` | Nút bấm, label, badge, score, tag, toast |
| `--font-vi-heading` | `'Merriweather'` | Tiêu đề tiếng Việt (h1, h2, h3 trong card) |
| `--font-vi-body` | `'Montserrat'` | Nội dung tiếng Việt, mô tả, paragraph |

### Quy tắc kích thước

| Phần tử | Font-size | Font-family |
|---|---|---|
| Logo navbar | `clamp(9px, 2vw, 12px)` | `--font-pixel` |
| Hero title | `clamp(18px, 4vw, 36px)` | `--font-pixel` |
| Page h1 | `clamp(18px, 4vw, 28px)` | `--font-vi-heading` |
| Card title | `clamp(15px, 3vw, 18px)` | `--font-vi-heading` |
| Body text | `13-16px` | `--font-vi-body` |
| Button text | `8-10px` | `--font-pixel` |
| Badge/tag | `6-8px` | `--font-pixel` |
| Toast | `9px` | `--font-pixel` |
| Score chip | `8px` | `--font-pixel` |

### Nguyên tắc

- **letter-spacing:** pixel font = `1-2px`, Việt body = `0`, badge = `2-4px`
- **line-height:** body = `1.8`, card desc = `1.7`, heading = `1.4-1.5`
- **Luôn dùng `clamp()`** cho text responsive, không dùng media query cho font-size

---

## 5. NÚT BẤM (BUTTONS)

### Phân loại nút

| Class | Vai trò | Màu | Ví dụ |
|---|---|---|---|
| `.hero__cta` | CTA chính (trang chủ) | cyan bg, magenta shadow | `▶ EXPLORE` |
| `.app-card__btn` | Nút trong card | Theo màu card | `▶ PLAY` |
| `.action-btn--check` | Kiểm tra đáp án | green | `✓ CHECK` |
| `.action-btn--reset` | Reset game | grey → white | `↺ RESET` |
| `.action-btn--play-again` | Chơi lại | cyan | `▶ PLAY AGAIN` |
| `.action-btn--continue` | Tiếp tục | cyan | `→ NEXT` |
| `.page-header__back` | Quay về home | cyan | `◁ HOME` |
| `.fn-nav-btn` | Prev/Next câu hỏi | grey → cyan | `◀` `▶` |
| `.admin-modal__btn` | Nút trong modal admin | yellow | `ENTER` |
| `.navbar__grid-btn` | Mở popup games | trắng mờ → cyan | 9 dot grid |
| `.navbar__admin-btn` | Mở admin | trắng mờ → cyan | `⚙` |

### Nguyên tắc chung cho nút

```css
/* BẮT BUỘC cho mọi nút */
font-family: var(--font-pixel);
font-size: 8px;                    /* 8-10px */
letter-spacing: 1px;
border: 2px solid;
background: transparent;
cursor: pointer;
transition: all 0.1s steps(1);     /* Retro feel: dùng steps(), không dùng ease */
padding: 6px 14px;                 /* Tối thiểu */
min-height: 44px;                  /* Touch target (nếu là nút chính) */
```

### Hover pattern

```css
/* Pattern 1: Fill (cho action button) */
.btn:hover {
  background: currentColor;
  color: var(--bg-dark);
  box-shadow: 4px 4px 0 var(--accent-color);
}

/* Pattern 2: Shift (cho card button) */
.btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px var(--accent-color);
}

/* Pattern 3: Glow (cho nav button) */
.btn:hover {
  color: var(--cyan);
  text-shadow: 0 0 8px var(--cyan);
}
```

### Icon trong nút

Luôn dùng Unicode symbol, KHÔNG dùng icon library:
- Play: `▶`
- Back: `◁`
- Check: `✓`
- Reset: `↺`
- Next: `→`
- Close: `✕`
- Home: `◈`

---

## 6. CARD & CONTAINER

### `.pixel-box` — Viền cơ bản

```css
/* Mặc định: cyan */
.pixel-box {
  border: 3px solid var(--cyan);
  box-shadow: 0 0 8px var(--cyan), 0 0 20px rgba(0,255,245,0.2),
              inset 0 0 12px rgba(0,255,245,0.05);
}

/* Biến thể: --magenta, --yellow, --green */
.pixel-box--magenta { ... }
.pixel-box--yellow  { ... }
.pixel-box--green   { ... }
```

### Nguyên tắc card

| Thuộc tính | Giá trị |
|---|---|
| Background | `var(--bg-card)` |
| Padding | `28px 24px` (desktop), `20px 16px` (mobile), `16px 12px` (ultra-small) |
| Gap giữa phần tử | `16px` (desktop), `12px` (mobile) |
| Border | Dùng `.pixel-box` + color variant |
| Hover | `transform: translate(-4px, -4px)` + pixel shadow |
| Coming soon | `opacity: 0.45`, `cursor: not-allowed` |

### Khi nào dùng card nào

| Loại | Class | Dùng cho |
|---|---|---|
| App card (home) | `.app-card.pixel-box.app-card--{color}` | Hiển thị app trên trang chủ |
| Topic card (game) | `.topic-card` | Mỗi topic/câu hỏi trong game |
| Score chip | `.score-chip.pixel-box` | Hiển thị điểm số |
| Result banner | `.result-banner` | Kết quả cuối game |
| Modal | `.admin-modal` | Dialog overlay |
| Toast | `.toast` | Thông báo tạm thời |

---

## 7. NAVIGATION — DI CHUYỂN GIỮA CÁC TRANG

### Cấu trúc navbar (bắt buộc trên mọi trang)

```html
<nav class="navbar">
  <a href="{path-to-home}" class="navbar__logo">◈ PIXELVERSE</a>
  <ul class="navbar__links">
    <li><a href="{path-to-home}" title="Home">◈</a></li>
    <li>
      <button class="navbar__grid-btn" id="gamesBtn" title="Games">
        <span class="navbar__grid-btn__dots">
          <!-- 9 dot spans -->
        </span>
      </button>
    </li>
    <li><a class="navbar__admin-btn" href="{path-to-admin}">⚙</a></li>
  </ul>
</nav>
```

### Games popup (bắt buộc trên mọi trang)

```html
<div class="navbar__games-popup" id="gamesPopup">
  <div class="navbar__games-list">
    <a href="{path}/pros-cons/"   class="navbar__game-item" data-game="pros-cons">🐺</a>
    <a href="{path}/mind-map/"    class="navbar__game-item" data-game="mind-map">🐙</a>
    <!-- ... tất cả app ... -->
  </div>
</div>
```

### Nguyên tắc navigation

| Quy tắc | Chi tiết |
|---|---|
| **Sticky navbar** | `position: sticky; top: 0; z-index: 100` |
| **Games popup** | `position: fixed; z-index: 200`, toggle class `.open` |
| **Back button** | Mỗi app page có `.page-header__back` link về home |
| **Relative paths** | Từ `apps/xxx/` → dùng `../../` để về root |
| **SFX khi navigate** | Gọi `SFX.navigate()` khi click link chuyển trang |
| **Active state** | Trang hiện tại có class `.active` hoặc `.navbar__game-item--active` |
| **Click card = navigate** | Card trên home dùng `onclick="SFX.navigate();location.href='...'"` |

### Di chuyển trong game (giữa các câu hỏi)

```html
<!-- Dot navigation -->
<div class="fn-dots">
  <button class="fn-dot active" data-idx="0"></button>
  <button class="fn-dot" data-idx="1"></button>
  <!-- ... -->
</div>

<!-- Arrow buttons -->
<div class="fn-q-nav">
  <button class="fn-nav-btn" id="prevBtn">◀</button>
  <div class="fn-dots" id="dots"></div>
  <button class="fn-nav-btn" id="nextBtn">▶</button>
</div>
```

### Trạng thái dot

| Class | Màu | Ý nghĩa |
|---|---|---|
| `.active` | yellow + glow | Đang xem |
| `.drafted` | cyan mờ | Đã tương tác nhưng chưa submit |
| `.answered` | green + glow | Đã trả lời đúng |
| `.wrong-q` | magenta | Đã trả lời sai |
| (mặc định) | grey | Chưa làm |

---

## 8. LAYOUT & RESPONSIVE

### Breakpoint chuẩn

| Breakpoint | Target | Thay đổi chính |
|---|---|---|
| `> 640px` | Desktop/Tablet | Grid nhiều cột, padding lớn |
| `≤ 640px` | Phone trung bình | Grid 1 cột, padding giảm, font nhỏ hơn |
| `≤ 480px` | Phone nhỏ | Popup full-width, ẩn bớt particle |
| `≤ 360px` | Ultra-small | Padding tối thiểu, font nhỏ nhất |

### Grid pattern

```css
/* Apps grid: auto-fill responsive */
.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 28px;
}

/* Games popup: cố định 3x3 */
.navbar__games-list {
  display: grid;
  grid-template-columns: repeat(3, 48px);
  gap: 6px;
}

/* Navbar: 3 cột */
.navbar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
}
```

### Nguyên tắc layout

- **Game page container:** `max-width: 1200px; margin: 0 auto; padding: 32px 1.5rem 60px`
- **z-index hierarchy:** content=2, navbar=100, popup=200, modal=500, toast=9999
- **Luôn có `position: relative; z-index: 2`** trên content để nằm trên starfield background
- **Dùng `clamp()`** thay vì media query cho kích thước fluid

---

## 9. ANIMATION & HIỆU ỨNG

### Danh sách animation chuẩn

| Animation | Dùng cho | Duration |
|---|---|---|
| `rainbow-shift` | Hero title gradient | `4s linear infinite` |
| `flicker` | Logo navbar | `4s infinite` |
| `pulse-magenta` | Badge glow | `2s infinite` |
| `blink` | Cursor/indicator | quick on/off |
| `space-drift` | Hero background parallax | `30s ease-in-out infinite alternate` |
| `grid-scroll` | Background grid | `8s linear infinite` |
| `float-up` | Pixel particles | `6-11s linear infinite` |
| `node-shake` | Feedback sai (trong game) | App-specific |

### Nguyên tắc animation

| Quy tắc | Chi tiết |
|---|---|
| **Transition timing** | `steps(1)` hoặc `steps(2)` cho retro feel. KHÔNG dùng `ease` trên interactive element |
| **Duration** | Interaction: `0.1s`, UI feedback: `0.15s`, Decorative: `2-30s` |
| **Hover transform** | Card: `translate(-4px, -4px)`, CTA: `translate(-2px, -2px)` |
| **Active transform** | `translate(2px, 2px)` (nhấn xuống) |
| **Glow pulse** | Chỉ cho decorative element, không cho interactive |
| **Particle** | Tối đa 6 particle, ẩn bớt trên mobile (≤480px ẩn 50%) |

---

## 10. ÂM THANH (SFX)

### Danh sách SFX

| Method | Khi nào dùng | Mô tả |
|---|---|---|
| `SFX.click()` | Click nút thường | Beep ngắn 440Hz |
| `SFX.select()` | Chọn item, toggle | Beep cao 660Hz |
| `SFX.place()` | Thả item vào đúng vị trí | Beep cao 880Hz |
| `SFX.navigate()` | Chuyển trang, mở app | 3 nốt tăng dần |
| `SFX.correct()` | Đáp án đúng | Hợp âm C-E-G vui |
| `SFX.wrong()` | Đáp án sai | Buzzer sawtooth giảm dần |

### Nguyên tắc âm thanh

- **Luôn import `sfx.js`** trên mọi trang
- **Volume tối đa:** `0.1` (rất nhỏ, không gây khó chịu)
- **Try-catch:** Mọi SFX method đều bọc trong try-catch
- **Web Audio API:** Không dùng file mp3/wav, tất cả tạo bằng oscillator
- **Khi nào KHÔNG phát âm:** Scroll, resize, load page, background operation

---

## 11. LƯU TRỮ DỮ LIỆU (SAVE/LOAD)

### Kiến trúc lưu trữ

```
admin_content.json (source of truth ban đầu)
        ↓ fetch
    localStorage (cache + user edits)
        ↓ read
      App UI (hiển thị)
```

### Quy tắc localStorage key

| Key | Kiểu | Mô tả |
|---|---|---|
| `prosCons` | `Array<Object>` | Dữ liệu game Pros-Cons |
| `mindMap` | `Array<Object>` | Dữ liệu game Mind Map |
| `matching` | `Array<Object>` | Dữ liệu game Matching |
| `fileNaming` | `Array<Object>` | Dữ liệu game File Naming |
| `promptOrder` | `Array<Object>` | Dữ liệu game Prompt Order |
| `mece` | `Array<Object>` | Dữ liệu game MECE |
| `noticeboard` | `Array<Object>` | Dữ liệu Noticeboard |
| `enabledGames` | `Object<string, boolean>` | Bật/tắt từng game |
| `adminLoggedIn` | `string ("1")` | Flag admin đã login |
| `pv_start` | `number (timestamp)` | Session timer (sessionStorage) |

### Pattern load data chuẩn

```javascript
// BẮT BUỘC dùng PV.loadData()
let data = [];
async function loadData() {
  data = await PV.loadData('keyName') || [];
}
```

### Pattern save data

```javascript
// Chỉ save khi user chủ động hành động (không auto-save liên tục)
function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
```

### Nguyên tắc lưu trữ

| Quy tắc | Chi tiết |
|---|---|
| **localStorage first** | Đọc localStorage trước, nếu trống thì fetch JSON |
| **camelCase key** | Tên key = camelCase của folder name: `pros-cons` → `prosCons` |
| **Không dùng sessionStorage** | Ngoại trừ `pv_start` (session timer) |
| **Không dùng IndexedDB** | Quá phức tạp cho nhu cầu hiện tại |
| **JSON.parse/stringify** | Luôn bọc trong try-catch |
| **Admin là nguồn chỉnh sửa** | User chỉ chơi game, admin mới sửa data |
| **Không sync server** | 100% client-side, không có backend |

---

## 12. LOGIC GAME — MẪU CHUNG

### Các loại game hiện có

| Loại | Mechanic | Apps dùng |
|---|---|---|
| **Drag & Drop** | Kéo item vào đúng zone | Pros-Cons, Mind Map |
| **Matching/Nối** | Nối cặp đúng giữa 2 cột | Matching |
| **Ordering** | Sắp xếp đúng thứ tự | Prompt Order |
| **Fill-in** | Điền đáp án vào ô trống | File Naming |
| **Classify** | Phân loại đúng/sai | MECE |
| **Tool** | Công cụ tính toán | Calculator |
| **Display** | Chỉ hiển thị nội dung | Noticeboard |

### Flow game chuẩn

```
1. Load data    → PV.loadData(key)
2. Shuffle      → PV.shuffle(items)
3. Render UI    → render()
4. User tương tác → event listeners
5. Check answer → validate() → SFX.correct() / SFX.wrong()
6. Show result  → cập nhật score, đổi màu viền
7. Next/Finish  → chuyển câu hoặc hiện result-banner
```

### State management pattern

```javascript
// State đơn giản, KHÔNG dùng class/store
let questions = [];
let currentIdx = 0;
let score = 0;
let answered = [];   // track câu đã trả lời

function render() {
  // Luôn render lại toàn bộ UI từ state
  // KHÔNG manipulate DOM trực tiếp ngoài render()
}
```

### Event delegation pattern (bắt buộc)

```javascript
// ĐÚNG: Event delegation trên container
document.getElementById('container').addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  SFX.click();
  handleAction(btn.dataset.action);
});

// SAI: Gắn listener lên từng phần tử
document.querySelectorAll('.btn').forEach(b => b.addEventListener(...));
```

### Drag & Drop pattern

```javascript
// Mouse/Touch events
el.addEventListener('mousedown', startDrag);
el.addEventListener('touchstart', startDrag, { passive: false });

function startDrag(e) {
  e.preventDefault();
  // Track position, add .dragging class
}

// Drop zone
zone.addEventListener('dragover', e => {
  e.preventDefault();
  zone.classList.add('drag-over');   // Visual feedback
});

zone.addEventListener('drop', e => {
  zone.classList.remove('drag-over');
  validateDrop(e);
});
```

### Scoring pattern

```javascript
function updateScore() {
  const el = document.getElementById('scoreDisplay');
  el.textContent = `${score} / ${total}`;
}

function showResult() {
  const banner = document.getElementById('resultBanner');
  banner.style.display = 'block';
  banner.querySelector('.result-banner__score').textContent =
    `SCORE: ${score}/${total}`;

  const pct = score / total;
  if (pct === 1) {
    banner.querySelector('.result-banner__msg').textContent = 'Hoàn hảo!';
    SFX.correct();
  } else {
    banner.querySelector('.result-banner__msg').textContent = 'Cố gắng thêm!';
  }
}
```

---

## 13. CODE TEMPLATE — HTML APP MỚI

### Template chuẩn (copy/paste khi tạo app mới)

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🐾 App Name — PIXELVERSE</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' fill='%2300fff5'>◈</text></svg>">
  <link rel="stylesheet" href="../../css/style.css">
  <script src="../../js/sfx.js"></script>
  <script src="../../js/utils.js"></script>
  <script src="../../js/games-popup.js"></script>
  <script src="../../js/game-visibility.js" data-json="../../data/admin_content.json"></script>
  <style>
    /* ===== APP-SPECIFIC STYLES ===== */
  </style>
</head>
<body>

  <!-- ===== NAVBAR ===== -->
  <nav class="navbar">
    <a href="../../index.html" class="navbar__logo">◈ PIXELVERSE</a>
    <ul class="navbar__links">
      <li><a href="../../index.html" title="Home">◈</a></li>
      <li>
        <button class="navbar__grid-btn" id="gamesBtn" title="Games">
          <span class="navbar__grid-btn__dots">
            <span class="navbar__grid-dot"></span><span class="navbar__grid-dot"></span><span class="navbar__grid-dot"></span>
            <span class="navbar__grid-dot"></span><span class="navbar__grid-dot"></span><span class="navbar__grid-dot"></span>
            <span class="navbar__grid-dot"></span><span class="navbar__grid-dot"></span><span class="navbar__grid-dot"></span>
          </span>
        </button>
      </li>
      <li><a class="navbar__admin-btn" href="../admin/">⚙</a></li>
    </ul>
  </nav>

  <!-- ===== GAMES POPUP ===== -->
  <div class="navbar__games-popup" id="gamesPopup">
    <div class="navbar__games-list">
      <a href="../pros-cons/"   class="navbar__game-item" data-game="pros-cons">🐺</a>
      <a href="../mind-map/"    class="navbar__game-item" data-game="mind-map">🐙</a>
      <a href="../matching/"    class="navbar__game-item" data-game="matching">🐿️</a>
      <a href="../file-naming/" class="navbar__game-item" data-game="file-naming">🐟</a>
      <a href="../prompt-order/" class="navbar__game-item" data-game="prompt-order">🐜</a>
      <a href="../calculator/"  class="navbar__game-item" data-game="calculator">🐬</a>
      <a href="../mece/"        class="navbar__game-item" data-game="mece">🦊</a>
      <a href="../noticeboard/" class="navbar__game-item" data-game="noticeboard">🐝</a>
    </div>
  </div>

  <!-- ===== PAGE CONTENT ===== -->
  <main class="game-page">
    <div class="page-header">
      <a href="../../index.html" class="page-header__back" onclick="SFX.navigate()">◁ HOME</a>
      <h1 class="font-vi-h">Tên App</h1>
      <p class="page-header__sub font-vi">Mô tả ngắn gọn</p>
    </div>

    <!-- Score bar -->
    <div class="score-bar">
      <div class="score-chip pixel-box">SCORE: <span id="score">0/0</span></div>
    </div>

    <!-- Game content -->
    <div id="gameArea">
      <!-- App-specific content here -->
    </div>

    <!-- Action buttons -->
    <div style="display:flex; gap:10px; justify-content:center; margin-top:20px; flex-wrap:wrap;">
      <button class="action-btn action-btn--check" onclick="SFX.click(); checkAnswer()">✓ CHECK</button>
      <button class="action-btn action-btn--reset" onclick="SFX.click(); resetGame()">↺ RESET</button>
    </div>

    <!-- Result banner -->
    <div class="result-banner" id="resultBanner">
      <div class="result-banner__score" id="resultScore"></div>
      <div class="result-banner__msg" id="resultMsg"></div>
      <button class="action-btn action-btn--play-again" onclick="SFX.navigate(); playAgain()" style="margin-top:14px">
        ▶ PLAY AGAIN
      </button>
    </div>
  </main>

  <script>
    // ===== DATA & STATE =====
    let data = [], currentIdx = 0, score = 0;

    // ===== LOAD =====
    async function init() {
      data = await PV.loadData('keyName') || [];
      if (!data.length) return;
      data = PV.shuffle(data);
      render();
    }

    // ===== RENDER =====
    function render() {
      const area = document.getElementById('gameArea');
      // Build UI from state
    }

    // ===== CHECK =====
    function checkAnswer() {
      // Validate, update score, SFX
    }

    // ===== RESET =====
    function resetGame() {
      currentIdx = 0; score = 0;
      data = PV.shuffle(data);
      document.getElementById('resultBanner').style.display = 'none';
      render();
    }

    function playAgain() { resetGame(); }

    init();
  </script>
</body>
</html>
```

---

## 14. QUY TẮC ĐẶT TÊN

### File & Folder

| Đối tượng | Convention | Ví dụ |
|---|---|---|
| Folder name | `kebab-case` | `pros-cons`, `mind-map` |
| HTML file | Luôn `index.html` | `apps/calculator/index.html` |
| CSS file | `kebab-case` | `style.css` |
| JS file | `kebab-case` | `games-popup.js`, `admin-auth.js` |
| JSON file | `snake_case` | `admin_content.json` |

### CSS

| Đối tượng | Convention | Ví dụ |
|---|---|---|
| Block | `.block-name` | `.app-card`, `.score-bar` |
| Element | `.block__element` | `.app-card__title`, `.navbar__logo` |
| Modifier | `.block--modifier` | `.pixel-box--magenta`, `.app-card--soon` |
| Variant | `.block--variant` | `.action-btn--check`, `.action-btn--reset` |
| Utility | `.util-name` | `.font-vi`, `.font-vi-h` |
| State | `.state` | `.active`, `.open`, `.hidden`, `.show` |

**Quy tắc BEM:** Dùng BEM đơn giản (Block__Element--Modifier). Không lồng quá 2 level.

### JavaScript

| Đối tượng | Convention | Ví dụ |
|---|---|---|
| Global object | `PascalCase` | `PV`, `SFX` |
| Function | `camelCase` | `loadData()`, `showToast()` |
| Variable | `camelCase` | `currentIdx`, `gameData` |
| Constant | `UPPER_SNAKE` | `QUOTES`, `MAX_SCORE` |
| localStorage key | `camelCase` | `prosCons`, `mindMap` |
| data attribute | `kebab-case` | `data-game`, `data-action`, `data-idx` |
| Private/internal | `_prefix` | `_ctx`, `_qi`, `_beep()` |

### Emoji cho mỗi app

| App | Emoji | Con vật |
|---|---|---|
| Pros-Cons | 🐺 | Sói |
| Mind Map | 🐙 | Bạch tuộc |
| Matching | 🐿️ | Sóc |
| File Naming | 🐟 | Cá |
| Prompt Order | 🐜 | Kiến |
| Calculator | 🐬 | Cá heo |
| MECE | 🦊 | Cáo |
| Noticeboard | 🐝 | Ong |
| Admin | ⚙ | (gear icon) |

**Nguyên tắc:** Mỗi app mới phải chọn 1 emoji con vật chưa dùng.

---

## 15. TRẠNG THÁI & PHẢN HỒI NGƯỜI DÙNG

### Bảng trạng thái

| Trạng thái | Màu viền | Màu text | Shadow/Glow | SFX |
|---|---|---|---|---|
| Default/Idle | `--grey` hoặc `--cyan` | `--white` | Nhẹ | — |
| Hover | `--cyan` | `--cyan` | Sáng hơn | — |
| Active/Selected | `--yellow` | `--yellow` | `0 0 5px --yellow` | `SFX.select()` |
| Correct | `--green` | `--green` | `0 0 8px --green` | `SFX.correct()` |
| Wrong | `--magenta` | `--magenta` | `0 0 8px --magenta` | `SFX.wrong()` |
| Disabled | `--grey` | `--grey` | Không | — |
| Coming soon | opacity `0.45` | giữ nguyên | Không | — |
| Dragging | `--cyan` | — | Glow mạnh | `SFX.select()` |
| Drop target | `--cyan` dash | — | — | — |

### Feedback patterns

```javascript
// Toast notification
PV.showToast('Đã lưu!', 2500);

// Visual: đổi viền
el.style.borderColor = 'var(--green)';
el.style.boxShadow = '0 0 12px var(--green)';

// Shake animation (sai)
el.style.animation = 'node-shake 0.4s';
setTimeout(() => el.style.animation = '', 400);

// Result banner
document.getElementById('resultBanner').style.display = 'block';
```

---

## 16. ACCESSIBILITY & TOUCH

### Nguyên tắc bắt buộc

| Quy tắc | Chi tiết |
|---|---|
| **Touch target 44px** | Mọi nút/link tối thiểu `44px` (width hoặc height). Dùng padding để tăng. |
| **Focus visible** | Mọi interactive element phải có focus state khác biệt (glow/color). |
| **Keyboard support** | Enter = submit, Escape = cancel/close, Arrow = navigate. |
| **lang="vi"** | Luôn khai báo trên `<html>`. |
| **XSS prevention** | Luôn dùng `PV.escHtml()` khi render user data. |
| **No motion preference** | Tương lai: thêm `@media (prefers-reduced-motion)`. |

---

## 17. ADMIN & QUẢN LÝ NỘI DUNG

### Authentication

```javascript
// Password cố định (thay đổi khi deploy production)
const ADMIN_PASS = 'admin123';
// Flag: localStorage.setItem('adminLoggedIn', '1')
```

### Data flow

```
Admin nhập data → Save localStorage → Tất cả app đọc từ localStorage
                → Export JSON → Cập nhật admin_content.json (manual)
```

### Game visibility

```javascript
// data attribute trên mỗi card/link
<article data-game="pros-cons">

// game-visibility.js tự ẩn/hiện dựa trên enabledGames object
// enabledGames = { "pros-cons": true, "calculator": false, ... }
```

### Nguyên tắc admin

| Quy tắc | Chi tiết |
|---|---|
| **Accordion layout** | Mỗi game = 1 section collapse/expand |
| **Entry card** | Mỗi mục dữ liệu = 1 card có nút xóa |
| **Add button** | Nút thêm entry ở cuối mỗi section |
| **Copy JSON** | Nút copy toàn bộ data dạng JSON |
| **Download** | Nút download file JSON |
| **Không auto-save** | User phải bấm Save thủ công |

---

## 18. HIỆU NĂNG

### Nguyên tắc tốc độ

| Quy tắc | Chi tiết |
|---|---|
| **Không external dependency** | Load tức thì, không chờ CDN (trừ Google Fonts) |
| **Inline CSS/JS** | Mỗi app = 1 HTTP request (ngoài shared files) |
| **Tổng shared files** | 5 files: `style.css` + 4 JS files ≈ 20KB |
| **LocalStorage cache** | Không fetch JSON nếu đã có localStorage |
| **Không lazy load** | App đủ nhỏ, load hết 1 lần |
| **Không image** | Dùng CSS gradient, Unicode emoji, SVG inline thay image |
| **steps() timing** | Nhanh hơn ease animation, phù hợp retro style |

---

## 19. CHECKLIST KHI TẠO APP MỚI

- [ ] Copy template từ mục 13
- [ ] Chọn emoji con vật chưa dùng
- [ ] Chọn màu (cyan/magenta/green/yellow) luân phiên
- [ ] Thêm data vào `admin_content.json`
- [ ] Thêm entry trong admin panel
- [ ] Thêm card vào `index.html` (trang chủ)
- [ ] Thêm link vào games popup (tất cả các trang)
- [ ] Thêm `data-game="app-name"` attribute
- [ ] Thêm `enabledGames` entry
- [ ] Test responsive (640px, 480px, 360px)
- [ ] Test SFX đúng context
- [ ] Test load data (localStorage + JSON fallback)
- [ ] Test navigation (home → app → home, popup → app)

---

## 20. ĐỀ XUẤT CẤU TRÚC THƯ MỤC TỐI GIẢN

### Triết lý: "Flat is better than nested"

Dùng dấu chấm (`.`) trong tên file thay cho thư mục con. Từ lớn đến bé: `namespace.category.name.ext`

### Cấu trúc đề xuất

```
vibecode_apps/
├── index.html                          ← Trang chủ (giữ nguyên)
├── data.json                           ← admin_content.json → đổi tên ngắn
├── core.style.css                      ← css/style.css
├── core.utils.js                       ← js/utils.js
├── core.sfx.js                         ← js/sfx.js
├── core.games-popup.js                 ← js/games-popup.js
├── core.game-visibility.js             ← js/game-visibility.js
├── core.admin-auth.js                  ← js/admin-auth.js
├── app.admin.html                      ← apps/admin/index.html
├── app.calculator.html                 ← apps/calculator/index.html
├── app.pros-cons.html                  ← apps/pros-cons/index.html
├── app.mind-map.html                   ← apps/mind-map/index.html
├── app.matching.html                   ← apps/matching/index.html
├── app.file-naming.html                ← apps/file-naming/index.html
├── app.mece.html                       ← apps/mece/index.html
├── app.prompt-order.html               ← apps/prompt-order/index.html
├── app.noticeboard.html                ← apps/noticeboard/index.html
├── .github/workflows/pages.yml         ← Giữ nguyên
└── README.md
```

### Lợi ích

| Trước | Sau |
|---|---|
| 5 thư mục + 9 thư mục con | 0 thư mục con (ngoài `.github`) |
| `apps/pros-cons/index.html` | `app.pros-cons.html` |
| Path: `../../css/style.css` | Path: `core.style.css` (cùng thư mục) |
| 14 thư mục tổng cộng | 1 thư mục (root) |
| Phải cập nhật relative path | Mọi file cùng level, path đơn giản |

### Quy tắc đặt tên a.b.c

| Pattern | Ý nghĩa | Ví dụ |
|---|---|---|
| `index.html` | Entry point duy nhất | Trang chủ |
| `core.{name}.{ext}` | File shared/hạ tầng | `core.style.css`, `core.sfx.js` |
| `app.{name}.html` | Mỗi app/game | `app.calculator.html` |
| `data.json` | Data duy nhất | Source of truth |

### Nếu cần thêm asset (tương lai)

```
asset.{app}.{name}.{ext}
Ví dụ: asset.mind-map.icon.svg
        asset.shared.favicon.svg
```

### Migration path (nếu thực hiện)

1. Flatten file ra root
2. Đổi tên theo convention `a.b.c`
3. Update tất cả `href`, `src` paths (đơn giản hơn vì cùng level)
4. Update `pages.yml` nếu cần
5. Test tất cả navigation

### Lưu ý

> **Không bắt buộc migrate ngay.** Cấu trúc hiện tại vẫn hoạt động tốt.
> Đây là đề xuất cho khi dự án scale lên hoặc khi refactor lớn.
> Nếu migrate, nên làm 1 lần dứt điểm, không làm nửa vời.

---

## TÓM TẮT NGUYÊN TẮC VÀNG

1. **Vanilla only** — Không framework, không build tool
2. **1 file = 1 app** — Self-contained HTML
3. **Pixel + Neon** — `steps()` transition, glow border, dark background
4. **localStorage first** — Offline-capable
5. **Event delegation** — Không gắn listener lên từng element
6. **44px touch target** — Accessibility
7. **BEM naming** — `.block__element--modifier`
8. **SFX cho mọi interaction** — Nhưng volume thấp
9. **`clamp()` cho responsive** — Không media query cho font-size
10. **Unicode icons** — Không icon library

---

*Cập nhật lần cuối: 2026-03-18*
*Version: 1.0*
