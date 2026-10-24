# Statix Product Feature Map & Scope

## Core Architecture Runtime
*   **Backend:** Django (with Django REST Framework) handles business logic, JWT/session authentication, and Admin CMS workflows.
*   **Frontend:** Next.js handles dark-mode first UI systems, fast page state loads, and aggressive SEO optimization.
*   **Database:** PostgreSQL stores structured user data, trade records, PnL logs, and mutual fund metrics.
*   **Asynchronous Processing:** Celery + Redis manage background stock data fetching schedules and automated mail tasks.
*   **Visual Engine:** TradingView Lightweight Charts handles interactive user setups and analytics.

---

## PHASE 1: CORE FUNCTIONAL ENGINE

### 1. Daily Market Workflow Features
*   **Pre-Market Briefing Dashboard:**
    *   *Global Market Snapshot:* Near-real-time updates tracking GIFT Nifty, Nasdaq/S&P 500, Asian indices, Crude oil, and US 10-year yields.
    *   *Support & Resistance Levels:* Dynamic pivot matrices for Nifty, Bank Nifty, and critical sectors.
    *   *Institutional Flows:* Visual representation tracking daily net FII/DII activities.
    *   *Market Risk Vectors:* Monitoring upcoming corporate earnings calendars and stocks inside active F&O ban locks.
*   **Post-Market Wrap-Up & Market Summary:**
    *   *Sectoral Heatmaps:* Structural grids classifying top industry gainers and losers.
    *   *Daily Chart Analysis:* Embedded layout templates highlighting technical candle setups and clean breakouts.
    *   *Option Chain Insights:* Analytical snapshots monitoring Max Pain thresholds, PCR ratios, and open interest accumulations.

### 2. Transparency & Verified Execution (PnL & Trade Logs)
*   **Verified Trade Logbook:**
    *   *Trade Entry/Exit Cards:* High-density cards mapping entry/exit pricing points, target levels, R:R metrics, and execution rationale text block inputs.
    *   *Chart Annotations:* Clean before-and-after image slots for target evaluation.
*   **Interactive PnL Calendar & Performance Dashboard:**
    *   *Calendar View:* High-visibility monthly tracking calendar color-coding trading output (Green/Red vectors).
    *   *Performance Matrix:* Mathematical readouts for system win rates, profit factors, drawdowns, and extreme trade ranges.
*   **Strategy Tagging:**
    *   Categorized filtering parameters (e.g., Breakout, Retest, Options Selling, Momentum) to identify competitive edge distributions.

### 3. Deep Analysis Hub (Mutual Funds & Equities)
*   **Mutual Fund Deep Dives:**
    *   *Fund Comparison Tool:* Matrix mapping rolling returns, Sharpe, Alpha, Beta, expense structures, and exit loads side-by-side.
    *   *Portfolio Overlap Checker:* Calculator engine determining overlap percentages among selected funds.
    *   *Category Ratings:* Segmented breakdowns tracking performance classifications (Small Cap, Mid Cap, Flexi Cap).
*   **Equity Stock Screener & Research Notes:**
    *   *Curated Watchlists:* Thematic screen definitions tracking specialized technical setups.
    *   *Scorecard Synthesizer:* Financial report cards evaluating debt-to-equity levels, cash flow cycles, and chart acceleration vectors.

### 4. User Engagement & Interactive Utilities
*   **Position Sizing & Risk Calculator:** Instant UI tracking inputs (Account Size, Risk %, Entry, SL) to resolve specific allocation allocations.
*   **SIP & Compound Interest Calculator:** Computational tools determining wealth extensions and target step-up thresholds.
*   **Dark Mode UI Core:** Embedded interactive dark-mode interfaces displaying custom drawing indicator scripts via TradingView primitives.
*   **Watchlist & Subscriptions:** Automated morning email dispatches broadcasted at 8:15 AM IST alongside browser push updates.

---

## PHASE 2: AI INTELLIGENCE LAYER

### 1. Automated Market & Content Intelligence
*   **AI Pre-Market & Post-Market Summarizer:**
    *   *Execution:* Scheduled Celery tasks capture raw morning metrics and stream them to the Gemini API to assemble automated 30-second bulleted narrative briefs.
    *   *Value:* Eliminates manual news compilation delays.
*   **Chart Pattern & Setup Interpreter:**
    *   *Execution:* Processes user-uploaded chart images via Gemini Multimodal Vision parameters to detect structural geometry (e.g., Head & Shoulders, Ascending Triangles).
    *   *Value:* Institutional-grade technical breakdown generation.
*   **AI Earnings Call Digest:**
    *   *Execution:* Background script parses incoming corporate PDF transcripts, generating 3-bullet core outputs tracking revenue, operating margins, and guidance changes.

### 2. Smart Mutual Fund & Stock Analysis Tools
*   **AI Mutual Fund Portfolio Overlap & Risk Analyzer:**
    *   *Execution:* Evaluates underlying base security concentration across user portfolios via LLM parsing models to map hidden sector exposures and trigger advice blocks.
*   **"Ask Statix" Natural Language Stock Screener:**
    *   *Execution:* Converts English plain-text prompts (e.g., "Show me mid-cap stocks forming a breakout with rising volume") into optimized SQL queries against the local Postgres instance.
*   **AI Fundamental & Sentiment Scorecard:**
    *   *Execution:* Dynamically indexes tracking news streams, financial ratios, and macro variables into a centralized score calculation (1-100).

### 3. Interactive User & Trading AI Features
*   **Interactive "Statix Assistant" (Financial & Market Copilot):**
    *   *Execution:* Customs-wrapped, guardrailed system bot isolated to system parameters and financial training principles. Enforces a mandatory disclaimer output layout across all processing actions.
*   **Automated Trade Rationale & Journaling Assistant:**
    *   *Execution:* Takes raw transactional properties entered in Django admin dashboards and outputs stylized journal records for public consumption.
*   **Personalized AI Market Digest:**
    *   *Execution:* Automatically curates weekly email digests optimized against private user watchlist telemetry.
