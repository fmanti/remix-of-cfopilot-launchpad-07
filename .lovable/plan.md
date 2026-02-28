

# CFO Pilot Website — Complete Implementation Plan

## Overview
A premium, single-page website for CFO Pilot that closely mirrors the pilot.com design aesthetic with rich animations, dashboard mockups, parallax effects, and professional client credibility elements. All copy follows the approved Australian CFO-focused content.

---

## Visual Design System (Pilot.com Style)

### Color Palette
| Role | Color |
|------|-------|
| Primary Green | #12B76A |
| Deep Green | #0B7A4B |
| Dark Navy Hero | #0B1220 → #1a2744 gradient |
| Dark Text | #0B1220 |
| Secondary Text | #475467 |
| Light Background | #F8FAFC |
| Card White | #FFFFFF |
| Borders | #E4E7EC |

### Typography
- **Montserrat** (Google Fonts) - Geometric sans-serif
- Headings: 600-700 weight
- Body: 400-500 weight
- Large hero text with confident spacing

---

## Website Sections

### 1. Navigation Bar (Sticky)
- "CFO Pilot" text logo (styled typography)
- Smooth scroll anchor links
- "Book a Confidential Conversation" green CTA button
- Backdrop blur on scroll

### 2. Hero Section (Dark Navy Gradient)
**Headline:** "When the business gets complex, who's actually flying the financials?"

**Subheading:** "CFO Pilot provides senior CFO leadership, bookkeeping, and tax planning for Australian businesses that need clarity, control, and confident decision-making — without hiring a full-time CFO."

**Features:**
- Email capture + "Book a confidential conversation" green CTA
- "How CFO Pilot works" secondary link with arrow
- **Animated dashboard mockup** (floating financial charts, cashflow visualization)
- Subtle parallax on scroll
- Fade-in entrance animations

### 3. Trust Context Bar
> "Supporting founder-led and board-led Australian businesses across manufacturing, infrastructure, transport, services, and complex operating environments."

### 4. Client Logo Carousel (Animated Scroll)
**14 Client Logos — Continuous smooth-scrolling banner:**

1. Chris' (Greek Dips)
2. DH Australia
3. SJ Electric
4. Pasteli Health Foods
5. Ammirati Puris Lintas
6. Pioneer Road Services
7. OFE Refrigerated Transport
8. TMA (Truck Modifications AU)
9. Medlo
10. Summit Formwork
11. Dietlicious (d. logo)
12. Expert Logistics
13. GCS
14. Arelis

### 5. Three Core Pillars Section
Scroll-triggered entrance animations for each card:

**1. Senior CFO Leadership**
> "CFO-level judgement, not outsourced admin."

Includes: Cashflow & working capital, budgeting, financial modelling, board reporting, strategic decision support, governance & risk oversight

**2. Reliable Financial Foundations**
> "Strong leadership depends on clean, dependable numbers."

Includes: Day-to-day bookkeeping, monthly reporting, payroll coordination, process improvement, systems alignment

**3. Practical Tax Planning**
> "Tax should support the business, not surprise it."

Includes: Tax planning & forecasting, structuring considerations, year-end preparation, coordination with specialists

### 6. Problem Section (Dark Background)
**Headline:** "Stop reacting. Start deciding."

**Animated problem cards sliding in on scroll:**
- Revenue is growing, but cash feels tighter
- The numbers don't fully line up
- Decisions feel risky without clear impact
- Accounting tells you what happened — not what to do next

**Closing:** "CFO Pilot closes the gap between information and judgement."

### 7. Animated Dashboard Mockup Section
Full-width visualization showing:
- Cashflow charts with animated lines
- Revenue trend graphs
- Key financial metrics cards
- Floating elements with subtle motion
- Professional "app-like" appearance

### 8. How It Works (3-Step Process)
Numbered cards with staggered entrance animations:

**1. Get Clear** — Stabilise bookkeeping, reporting, and cashflow so everyone works from the same truth

**2. Take Control** — Introduce CFO-level oversight: forecasts, scenarios, priorities, and discipline

**3. Move Forward** — Make calmer, more deliberate decisions — even when conditions change

### 9. Services Grid
Card grid with hover lift effects (11 services):
- Fractional CFO leadership
- Interim CFO support
- Bookkeeping & reconciliations
- Cashflow & working capital management
- Budgeting & forecasting
- Financial modelling & scenario planning
- Board & investor reporting
- ERP & systems advisory
- Business transformation support
- Tax planning & coordination
- Leadership coaching for finance teams

### 10. Testimonials Section
**Three testimonial cards with styled quotes:**

**1. Silvio Lenvoy** — Managing Director, Encore Vision
> "CFO Pilot has been an invaluable member of our team, guiding us through a number of transactions worth $100+ million. Frank is an incredibly thoughtful and thorough financial professional who effortlessly balances both 'CFO' and 'business advisor' roles."

**2. Sarah Fastery** — CEO, Fastery Trading
> "Frank is a calm, measured professional with a high level of technical proficiency. His ability to absorb and adapt during periods of high stress is outstanding."

**3. John** — Former CEO, OFE Group
> "I've had the pleasure of working with Frank on several major restructuring projects, some during periods of massive financial pressure. Frank possesses that calm perspective that's hard to find."

### 11. About Frank Section (Parallax)
**Photo of Frank** (professional headshot with parallax scroll effect)

**Headline:** "Built by an experienced CFO who understands real-world decisions"

**Content:**
> "CFO Pilot is led by Frank, an experienced Australian CFO who has spent decades working alongside business owners, executives, and boards in complex operating environments."
>
> "Frank's experience spans infrastructure, manufacturing, transport, services, and growth-stage businesses — helping organisations navigate financial pressure, system change, and strategic inflection points."

**Clients value:**
- Calm judgement under pressure
- Plain-English finance
- Clear priorities
- Accountability to outcomes

### 12. Final CTA Section (Green Accent Gradient)
**Headline:** "If you need steady financial leadership — not more noise — let's talk."

Large "Book a confidential conversation with CFO Pilot" button

### 13. Footer
- CFO Pilot logo/name
- Simple contact information
- Copyright notice
- Clean, minimal design

---

## Interactive Features

### Animations (Framer Motion)
- **Scroll-triggered entrances** — Elements fade/slide in as they enter viewport
- **Parallax backgrounds** — Subtle depth on hero, dashboard, and about sections
- **Floating dashboard elements** — Gentle up/down motion on chart mockups
- **Logo carousel** — Continuous smooth infinite scroll
- **Hover effects** — Cards lift with shadow on hover
- **Staggered reveals** — Service cards and pillar sections animate in sequence

### Contact Form (Modal)
- Triggered by all "Book a confidential conversation" CTAs
- Fields: Name, Email, Phone (optional), Message
- Form validation with React Hook Form
- Success toast notification on submit

---

## Assets Summary

### Client Logos (14 total)
All uploaded logos will be embedded in the trust/credibility carousel section

### Photos
- Frank's professional photo for the About section

### Dashboard Mockup
Custom-built animated financial dashboard using SVG/CSS animations to match pilot.com style

---

## Technical Implementation
- React with TypeScript
- Tailwind CSS with custom design tokens matching the color palette
- Montserrat font from Google Fonts
- Framer Motion for all scroll and entrance animations
- Intersection Observer for scroll-triggered effects
- React Hook Form for contact functionality
- Fully responsive (mobile-first approach)
- Smooth scroll navigation between sections

