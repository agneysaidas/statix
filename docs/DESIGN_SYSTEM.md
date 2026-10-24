# Statix Design Specification ("markets, decoded")

## Platform Scope: Desktop Web Architecture

**statix** (*"markets, decoded"*) is a high-density, institutional-grade financial web platform (desktop-first Next.js web application) engineered for active equity traders, quantitative investors, and mutual fund analysts.

\---

## 1\. Typography System

The interface pairs an ultra-clean geometric sans-serif for UI structure and natural prose with an institutional monospace engine font for quantitative precision.

### Manrope (Primary Brand \& UI Typeface)

Handles all natural language, brand presence, global navigation chrome, and structural web layout hierarchy.

* **Brand Wordmark (`statix`):** Lowercase `statix`, Manrope ExtraBold (800), tight letter-spacing (`-0.04em`), accented electric mint/emerald `x`.
* **Web Navigation \& Header Chrome:** Top desktop navigation bar links, sticky sidebar groups, command palette search (`⌘K`), and dropdown menus.
* **Page Titles \& Section Headers (H1–H4):** Dashboard headers (*"Pre-Market Briefing"*, *"Verified PnL Calendar"*, *"Mutual Fund Deep Dive"*, *"Nifty 50 Post-Market Debrief"*).
* **Prose, Articles \& Research Notes:** Market analysis commentary, trade rationales, AI summaries, and fundamental notes.
* **Interactive UI Elements:** Action buttons, filter chips, input forms, tooltips, tab group controllers, and modal dialogs.

### JetBrains Mono (Telemetry \& Quantitative Engine)

Reserved for fixed-width tabular figures (`tnum`) ensuring vertical alignment across dense tabular rows during real-time updates.

* **Tagline Lockup:** `MARKETS, DECODED` (All-caps, Medium/SemiBold, wide tracking `+0.32em`).
* **System Status Badges:** Mode updates and radar nodes (e.g., `DARK THEME`, `SYSTEM LIVE`, `MARKET OPEN`).
* **Live Price Tickers \& Indices:** Spot quotes, index levels (`₹24,850.40`), and delta shifts (`+1.42%`, `▲ +348.20 pts`).
* **Trade Log \& Execution Metrics:** Realized/Unrealized PnL figures (`+₹18,450.00`), orders (`NIFTY 24800 CE`), lot sizes, target levels (`SL: 142.50 | TGT: 185.00`), and timestamps (`09:18:24 IST`).
* **Mutual Fund Quants \& Risk Ratios:** NAV values (`NAV: ₹124.62`), Alpha, Beta, Sharpe Ratio, Expense Ratio (`0.65%`), and annualized trailing returns (`1Y: 24.8%`).
* **Option Chain Matrix \& Calculators:** Max Pain strike ladder, Put-Call Ratio (PCR), lot calculations, and SIP compound tables.

### Core Typography Rule

* Prose, context, navigation, editorial, or instruction → **Manrope**
* Number, price, mathematical metric, code, timestamp, or live market telemetry → **JetBrains Mono**

\---

## 2\. Core Brand Accents (Signature Colors)

* **Bull / Momentum Vector (Electric Mint):** `#00E599` *(Gradient: `#24FFAA` → `#00E599` → `#00B87A`)*. Appends positive PnL (`+`), upward vectors, brand lettermark `x`, active pulse radar beacons, and primary interactive action glows.
* **Institutional Anchor (Cobalt Blue):** `#0052FF` *(Gradient: `#2979FF` → `#0052FF` → `#0035B3`)*. Appends downward vectors, primary actionable CTA buttons, verified badges, active sidebar tabs, and active focus boundaries.

\---

## 3\. Theme Specifications

### A. Dark Theme: Obsidian Terminal (Primary Default Web UI)

Engineered for low eye strain in high-density multi-monitor desktop trading workstations:

* **Background / Canvas:** `#080C14` (Deep Obsidian)
* **Base Containers / Cards:** `#0F131C`
* **Container Low / Table Rows / Alternate Fill:** `#141C2B`
* **Container High / Elevated Modals / Flyout Drawers:** `#1B2436`
* **Card Borders / Dividers:** `#182338` (Crisp 1px border stroke)
* **Primary Text (Headings/Values):** `#FFFFFF`
* **Secondary Text (Labels/Subtitles):** `#94A3B8` (Slate 400)
* **Muted / Inactive Text:** `#64748B` (Slate 500)
* **Functional Gains:** `#00E599` (Electric Mint)
* **Functional Losses:** `#FF4B55` (Risk Red)
* **Ambient Highlights / Brand:** `#0052FF` (Institutional Cobalt Blue)
* **Warning / F\&O Ban:** `#F59E0B` (Amber Warning)

### B. Light Theme: Crisp Chalk (Executive \& Compliance Review Mode)

Engineered for daylight reading, executive reporting, and institutional compliance reviews:

* **Background / Canvas:** `#F8FAFC` (Crisp Slate White)
* **Surface Containers / Cards:** `#FFFFFF` (Pure White Card Surface)
* **Surface Dim / Hover Fill / Alternate Rows:** `#F1F5F9`
* **Elevated Modals / Popovers:** `#FFFFFF` with tactile soft shadow (`0 10px 25px -5px rgba(15, 23, 42, 0.08)`)
* **Card Borders / Dividers:** `#E2E8F0`
* **Primary Text (Headings/Values):** `#0F172A` (Deep Slate Obsidian)
* **Secondary Text (Labels/Subtitles):** `#475569` (Slate 600)
* **Muted / Inactive Text:** `#94A3B8` (Slate 400)
* **Functional Gains:** `#00B87A` (Daylight Emerald for contrast against white)
* **Functional Losses:** `#E11D48` (Crimson Rose)
* **Ambient Highlights / Brand:** `#0052FF` (Cobalt Blue)
* **Warning / Neutral:** `#D97706` (Amber Ochre)

\---

## 4\. Component \& UI Principles

* **Layout \& Density:** Desktop-first 12-column responsive grid with collapsible navigation sidebar, persistent global market ticker strip, and multi-pane workspace panels.
* **Corner Radius:** 8px–12px (`rounded-lg` to `rounded-xl`) for structural cards, data blocks, and chart modules; pill-shaped (`rounded-full`) for status badges, filter chips, and live telemetry indicators.
* **Elevation:** Minimalist flat layers. Dark mode leverages soft accent glows on mint/cobalt accents; Light mode implements crisp 1px borders with ambient drop shadows (`rgba(15, 23, 42, 0.08)`).

