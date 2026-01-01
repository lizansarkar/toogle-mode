# Portfolio Website - Technology Showcase

## Where Each Technology Works

### 1. TAILWIND CSS - Styling & Responsive Design
**Location: Every component's `className` attributes**

**Visible in:**
- **Hero Section**: `bg-white dark:bg-black` (background colors), `text-5xl md:text-7xl` (responsive text sizing), `px-6 py-24` (spacing)
- **Projects Cards**: `border border-gray-300 dark:border-gray-700` (borders), `rounded-xl` (border radius), `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (responsive grid)
- **Skills Section**: `grid-cols-1 md:grid-cols-3` (3-column layout), `hover:shadow-lg` (hover effects)
- **Dark Mode**: All `dark:` prefixed classes switch colors when dark mode is enabled
- **Responsive**: `md:` and `lg:` breakpoints adjust layout for mobile, tablet, desktop
- **Animations**: `transition-all duration-300`, `hover:opacity-80` (smooth transitions)

**Try it:**
- Resize browser → responsive grid adjusts
- Toggle dark mode button → all colors switch instantly
- Hover over cards → colors and shadows change

---

### 2. FRAMER MOTION - Interactive Animations
**Location: `<motion.>` wrapped components**

**Visible in:**

#### Hero Section
- **Text Fade-In**: Title, subtitle, and stats fade in with stagger effect on page load
- **Button Interactions**: 
  - `whileHover={{ scale: 1.05 }}` → buttons grow when you hover
  - `whileTap={{ scale: 0.95 }}` → buttons shrink when clicked
- **Bouncing Chevron**: `animate={{ y: [0, 8, 0] }}` → down arrow bounces continuously

#### Projects Section
- **Card Hover**: `whileHover={{ y: -8 }}` → cards lift up on hover
- **Staggered Entry**: Cards fade in one after another with `staggerChildren: 0.15`

#### About Section  
- **Feature Cards**: Fade in from left/right with `whileInView` → triggers when scrolling into view
- **Hover Scale**: `whileHover={{ y: -8 }}` → cards lift on hover

#### Skills Section
- **Card Slide-In**: `variants={cardVariants}` with `hidden: { x: -30 }` → slides in from left
- **Grouped Hover**: Icons scale up on hover with `group-hover/skill:scale-125`

**Try it:**
- Load page → watch text fade in smoothly with stagger
- Hover over buttons → they scale up
- Hover over project cards → they lift up
- Scroll to About section → cards animate in with direction

---

### 3. GSAP - Advanced Scroll Effects
**Location: `useEffect` hooks with `gsap.from()` and `ScrollTrigger`**

**Visible in:**

#### Hero Section
- **Number Counter Animation**: 
  - Stats (15+, 3+, 20+) start at 0 and count up when they scroll into view
  - Uses GSAP `snap: { textContent: 1 }` for smooth number transitions
  - `ease: 'power2.out'` for easing curve

#### Projects Section
- **Parallax Scroll Effect**: 
  - Each project card animates in as you scroll past
  - `scrub: 1` creates smooth, scroll-synced animation
  - Cards fade in and slide up together

#### About Section
- **Staggered Scroll Animation**:
  - Each feature card animates from left or right alternately
  - `toggleActions: 'play none none none'` triggers only once on scroll

**Try it:**
- Scroll down to Hero stats → numbers animate from 0 to 15, 3, 20
- Scroll to Projects → each card fades in from bottom
- Scroll to About → cards slide in from alternating sides

---

## Feature Checklist ✅

### Styling
✅ Tailwind CSS classes on all elements
✅ Dark/Light mode toggle (class-based)
✅ Responsive breakpoints (mobile, tablet, desktop)
✅ Smooth color transitions on dark mode toggle
✅ Hover effects on all interactive elements

### Animations
✅ Framer Motion on page load (Hero text)
✅ Framer Motion on scroll (About, Projects sections)
✅ Framer Motion on hover (buttons, cards)
✅ GSAP number counter (Hero stats)
✅ GSAP scroll parallax (Projects cards)
✅ GSAP staggered scroll (About cards)

### Components
✅ Hero with CTA buttons and stats
✅ About with feature cards
✅ Projects with images, tech badges, links
✅ Skills with icons and categories
✅ Experience with timeline
✅ Contact form with validation + phone input + toast
✅ Footer with links and social icons

### Interactions
✅ Dark/Light toggle with localStorage persistence
✅ Form validation (name, email required)
✅ Phone input with country selection
✅ Toast notifications on form submit
✅ Smooth scrolling to sections
✅ Sticky header navigation

---

## How to See Everything

1. **Load the page** → Hero text fades in with stagger (Framer Motion)
2. **Scroll down slowly** → See GSAP number counters animate in Hero stats
3. **Scroll to Projects** → Cards fade in as they come into view (GSAP parallax)
4. **Hover over any card** → Lifts up and changes colors (Framer Motion + Tailwind)
5. **Scroll to About** → Cards slide in from sides (GSAP + Framer Motion)
6. **Toggle dark mode** → All colors switch smoothly (Tailwind + Framer Motion transition)
7. **Scroll to Contact** → Form appears with validation
8. **Hover over buttons** → Scale up and change opacity (Framer Motion)
9. **Fill contact form** → Toast notification on submit (React Toastify)

---

## Tech Stack Summary

| Technology | Purpose | Visible Effect |
|---|---|---|
| **Tailwind CSS** | Styling, spacing, colors, responsive | Colors, layout, dark mode |
| **Framer Motion** | Interactive element animations | Text fade-in, button hover, card lift, scale effects |
| **GSAP + ScrollTrigger** | Scroll-synced animations | Number counters, parallax, staggered entry |
| **React Toastify** | Toast notifications | Submit form → notification appears |
| **React Phone Input 2** | International phone input | Contact form phone field |
| **Lucide React** | Icons | Section headers, social links, buttons |
| **React Icons** | Brand icons | Skill section icons |

