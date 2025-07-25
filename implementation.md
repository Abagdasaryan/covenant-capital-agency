You are an expert web developer tasked with generating the complete code for a modern, responsive landing page for a capital consulting firm called "Covenant Capital Consulting". The page must closely mirror the design, layout, styling, and components of the Fey investment platform landing page (as described below), but adapted to promote consulting services in financial automation, integrations, and business optimization instead of financial tools.

### Key Requirements:
- **Framework**: Build this as a Next.js application (version 14+), suitable for deployment to Vercel. Include all necessary files: pages/index.js (for the landing page), a global CSS file (styles/globals.css), and any component files if needed. Use Tailwind CSS for styling to make it easy to replicate the design. Install Tailwind via npm in the setup instructions.
- **Deployment**: Ensure the code is ready for Vercel deployment. Include a vercel.json file if needed for any configurations, but keep it minimal.
- **Theme Adaptation**: Replace financial/investment themes with capital consulting themes focused on automation. For example:
  - Tagline: "Covenant Capital Consulting: Optimize your business with intelligent automations."
  - Focus on services like workflow automation, data integration, cloud orchestration, financial consulting, and custom solutions using specific tools: Boomi, Celigo, AWS, Snowflake, Azure, n8n, Zapier, Netsuite, and Salesforce.
  - Use placeholders for screenshots/images (e.g., via Unsplash or describe them; assume stock images of dashboards showing integrations with the listed tools).
- **Incorporating Tools**: Prominently feature the tools in sections like features, integrations sync, and highlights. For example, show logos for Boomi, Celigo, AWS, etc., in a "Integrations in Sync" section, and mention them in feature descriptions (e.g., "Seamless Boomi and Celigo integrations for enterprise workflows").
- **Responsiveness**: Make it fully responsive for mobile, tablet, and desktop using Tailwind's responsive utilities. Use a max-width of ~1200px for content centering.

### Detailed Design Mirror from Fey.com:
Mirror the structure, styling, and components as closely as possible based on this analysis of Fey.com:

#### Overall Aesthetic:
- **Color Scheme**: Dark background (#000000 or black) with white/light text (#FFFFFF) for high contrast. Accents in blues (#007BFF for buttons/links) and greens (#00FF00 for positive highlights, e.g., success metrics). Neutrals: Grays (#A9A9A9) for secondary text. Use gradients or subtle textures (e.g., abstract patterns) for brand elements.
- **Typography**: Sans-serif font (use 'Inter' from Google Fonts). Headlines: 48-64px bold; Subheadlines: 24-36px; Body: 16px; Small text: 12-14px. Line height: 1.5-1.8. Bold for key metrics, italics for quotes.
- **Layout and Spacing**: Vertical scrolling sections with generous padding (40-80px between sections). Use flexbox/grid for alignment. Content centered with max-width: 1200px. Airy, minimalist feel with white space.
- **Animations/Interactivity**: Add subtle fade-in/slide animations on section load (use Framer Motion). Hover effects on buttons (scale 1.05, color shift). Smooth scrolling. Lazy load images.
- **Components**:
  - Buttons: Rounded (border-radius: 8px), solid blue background (#007BFF), white text, padding 12px 24px, hover: brighter blue.
  - Images/Screenshots: High-res with shadows (box-shadow: 0 4px 6px rgba(0,0,0,0.1)). Use alt text.
  - Icons: Simple SVGs (e.g., from Heroicons) for features like checkmarks or gears for automation.
  - Cards: Bordered or shadowed containers for features/news.

#### Section-by-Section Structure:
Build the page with these sections, adapting Fey's content to capital consulting with automation:

1. **Header/Hero Section**:
   - Full-width dark background.
   - Logo (text: "Covenant Capital Consulting" in bold white, or placeholder image).
   - Tagline: "Covenant Capital Consulting: Optimize your business with intelligent automations." in large headline.
   - Screenshot placeholder: Dashboard showing automation workflows (e.g., integrations with AWS and Snowflake).
   - Stats: e.g., "Efficiency Boost: +45%", "Processes Automated: 250+".
   - CTA Button: "Get Started for Free" linking to #signup.

2. **Daily Automation Recap Section** (Mirror Morning Recap):
   - Headline: "Daily Automation Insights" at "1:13PM".
   - News-like blocks: e.g., "Boomi releases new API for faster integrations. Celigo partners with Netsuite for e-commerce automation."
   - Include tool logos (AWS, Azure) with updates: e.g., "AWS: New Lambda features for serverless automation."
   - "Read more" links.

3. **Highlights/Features Section** (Mirror Highlights):
   - Headline: "Covenant Capital Consulting turns complex workflows, siloed tools, and fragmented data into seamless automations, clear dashboards, and intuitive interfaces—so any business can optimize without overwhelm."
   - Grid of features with icons: 
     - Beautiful workflow dashboards
     - Real-time integration monitoring
     - Tool comparisons (e.g., Zapier vs. n8n)
     - Advanced metrics (e.g., ROI from Salesforce automations)
     - Instant alerts for failures
     - Custom watchlists
     - Secure API syncs with Boomi, Celigo, etc.
     - Automation calendar
     - Proprietary tools and real-time data
     - Integrations with AWS, Snowflake, Azure, n8n, Zapier, Netsuite, Salesforce.

4. **News and Automation Overview Section** (Mirror News and Market Overview):
   - Headline: "From chaotic to automated."
   - Subheadline: "News and automation overview"
   - Description: "See your personalized feed with curated updates, daily recaps, and performance metrics for your tools. Updated continuously."
   - Abstract texture image (e.g., gears or circuits).
   - "Learn more" button to "/features/integrations".

5. **Real-Time Alerts Section** (Mirror Earnings in Real Time):
   - Headline: "Automations in real time."
   - Description: "Covenant Capital Consulting alerts you the second workflows trigger and delivers clear summaries. Monitor live or catch up instantly."
   - Screenshot: Real-time dashboard with e.g., "Salesforce sync complete" alert.
   - "Learn more" button.

6. **Workflow Finder Section** (Mirror Screener Reimagined):
   - Headline: "Workflow finder reimagined."
   - Description: "Quickly discover automations by typing what you need, no complex setups. Covenant Capital Consulting turns your words into precise solutions."
   - Screenshot: Search input e.g., "Integrate Netsuite with Snowflake".
   - "Learn more" button.

7. **Integrations in Sync Section** (Mirror Portfolio in Sync):
   - Headline: "Integrations in sync."
   - Description: "Automatically connect all your tools like Boomi, Celigo, AWS, Snowflake, Azure, n8n, Zapier, Netsuite, and Salesforce. Track performance in one place."
   - Logos grid for the tools (use placeholder images or URLs from their official sites).
   - "Learn more" button.

8. **Tool Pages Section** (Mirror Stock Pages):
   - Headline: "Tool pages that delight."
   - Description: "Covenant Capital Consulting's tool pages deliver key integration data in a beautiful layout—from basics to advanced metrics."
   - Screenshot: Page for e.g., "AWS" with metrics like uptime, cost savings.
   - "Learn more" button.

9. **Comparison Tools Section** (Mirror Comparison Tools):
   - Headline: "Compare with ease."
   - Description: "Effortlessly compare tools like Zapier vs. n8n or entire workflows with interactive charts."
   - Screenshot: Comparison chart e.g., Boomi vs. Celigo.
   - "Learn more" button.

10. **Automation Calendar Section** (Mirror Economic Calendar):
    - Headline: "Automation calendar."
    - Description: "Track key events, deployments, and results—all updated in real time."
    - Screenshot: Calendar with e.g., "Azure Update Release".
    - "Learn more" button.

11. **CTA Section**:
    - Headline: "Get started with Covenant Capital Consulting."
    - Description: "Join businesses consulting smarter."
    - Button: "Sign up for free".

12. **Footer**:
    - Links: Home, Features, Pricing, Blog, About.
    - Social icons (Twitter, LinkedIn).
    - Copyright: "© 2025 Covenant Capital Consulting. All rights reserved."
    - Privacy/Terms links.

### Additional Instructions:
- Use Google Fonts for 'Inter'.
- Include a navigation bar at top: Logo left, links (Features, Pricing, Blog, Login/Signup) right.
- Add a floating CTA button if it fits.
- For images: Use placeholder URLs like https://via.placeholder.com/800x600 with descriptions, or Unsplash for tech/automation themes.
- Ensure SEO: Add meta tags in _document.js or page head.
- No backend; static site only.
- Output the code in a structured format: List all files with their content in code blocks.

Generate the complete code now.