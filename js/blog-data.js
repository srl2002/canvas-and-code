/* ================================================================
   blog-data.js  —  SURABHI LAMBE PORTFOLIO
   ================================================================

   ✏️  HOW TO ADD A NEW BLOG POST
   ──────────────────────────────
   1. Copy the template at the bottom of this file
   2. Paste it at the TOP of the BLOGS array (so newest shows first)
   3. Fill in your details
   4. Save the file — done! No other file needs to be touched.

   FIELDS EXPLAINED
   ────────────────
   title       : Headline of your post
   tag         : Category shown as filter tab.
                 Use one of: "Finance", "Art", "Tech", "Personal"
                 Or combine:  "Art · Personal"
   emoji       : Icon shown on the card banner (any emoji)
   bannerColor : CSS gradient for the card background.
                 Pick any from the examples below, or write your own.
   date        : Display date, e.g.  "February 2025"
   readTime    : e.g.  "5 min read"
   excerpt     : 1–2 sentences shown on the card preview
   content     : Full post in HTML. Use these tags:
                   <p>paragraph</p>
                   <h3>section heading</h3>
                   <blockquote>a quote</blockquote>
                   <ul><li>bullet point</li></ul>

   BANNER COLOUR PRESETS (copy-paste any of these)
   ─────────────────────────────────────────────────
   Slate Blue  : "linear-gradient(135deg,#b8c4d8 0%,#d0cce8 100%)"
   Sage Green  : "linear-gradient(135deg,#c8d4c0 0%,#d8c4b0 100%)"
   Dusty Rose  : "linear-gradient(135deg,#d4b8c8 0%,#e8d4c8 100%)"
   Warm Amber  : "linear-gradient(135deg,#e8d4a8 0%,#d8c4a0 100%)"
   Lavender    : "linear-gradient(135deg,#c4b8d8 0%,#d8c8e8 100%)"
   Warm Cream  : "linear-gradient(135deg,#e8e0d0 0%,#d8d0c0 100%)"
   ================================================================ */

const BLOGS = [

  /* ── POST 1 ─────────────────────────────────────────────── */
  {
    title: "What Painting Taught Me About Risk",
    tag: "Art · Finance",
    emoji: "🎨",
    bannerColor: "linear-gradient(135deg,#c8c0d4 0%,#d4c8b0 100%)",
    date: "February 2025",
    readTime: "6 min read",
    excerpt: "A canvas doesn't forgive recklessness — and neither does a financial model. The surprising overlap between standing in front of a blank canvas and validating a credit risk model.",
    content: `
      <p>People find it odd when I say my two worlds — risk modelling and canvas painting — feel more similar than different. But the longer I spend in both, the more convinced I am that the same instincts that make a good painter also make a good model validator.</p>

      <h3>The Blank Canvas Problem</h3>
      <p>Every painting begins with uncertainty. You have pigment, a surface, and a vague intention. What happens between that moment and a finished piece is a constant negotiation between what you planned and what the canvas tells you. You apply a stroke. You assess. You adjust. The painting evolves.</p>
      <p>Model validation works the same way. You receive a model, a methodology document, and a set of outputs. You don't start knowing the answer — you start with hypotheses. Is the modelling assumption justified? Does the data support this parameterisation? You probe, test, find weaknesses, and adjust your view. The "painting" is the validation report; the strokes are your statistical tests.</p>

      <blockquote>"The best risk analysts I've met treat models the way painters treat references — with deep respect, but also the confidence to question what they see."</blockquote>

      <h3>Composition vs. Model Structure</h3>
      <p>In painting, composition is everything. Where you place your focal point, how you balance light and shadow, whether the eye moves naturally through the frame — these decisions determine whether a painting feels coherent or chaotic. A technically perfect brushstroke in the wrong place ruins the whole.</p>
      <p>Model structure is composition. You can have beautiful econometrics inside a PPNR model, but if the variable selection doesn't reflect economic intuition, or if the stress scenario assumptions break down under tail conditions, the model fails — not because the math is wrong, but because the architecture is. SR 11-7 cares about this deeply. So do I.</p>

      <h3>Learning to See What's Missing</h3>
      <p>The hardest skill in painting isn't blending colours — it's learning to see negative space. The shapes that aren't there. The gaps that define the object as much as the object itself.</p>
      <p>In model risk, this maps to what we call "model limitations." Not just what the model does, but what it doesn't capture. A residential real estate LGD model might perform beautifully in-sample but completely miss collateral haircut dynamics during a rapid rate-rise scenario. The gap is the story.</p>
      <p>Both skills — negative space in painting, model limitations in risk — are learned. They require you to stop looking at what's there and start asking: <em>what's absent, and does it matter?</em></p>

      <h3>The Discipline of Finishing</h3>
      <p>Every painter knows the feeling of a painting that is "almost done" but keeps getting reworked into something worse. There's a point where more intervention is damage, not improvement. Knowing when to stop is a skill.</p>
      <p>Validation findings work similarly. An inexperienced validator over-documents, raises marginal issues, and buries the key risk in noise. A seasoned one knows which findings are material, which are informational, and which don't need to be raised at all. The discipline isn't in finding everything — it's in knowing what matters.</p>
      <p>I think about this every time I'm at a canvas. And every time I'm writing up a validation conclusion. The best work isn't the most exhaustive — it's the most precise.</p>
    `
  },

  /* ── ADD YOUR NEXT POST ABOVE THIS LINE ─────────────────
  {
    title: "Your Post Title Here",
    tag: "Finance",
    emoji: "📊",
    bannerColor: "linear-gradient(135deg,#b8c4d8 0%,#d0cce8 100%)",
    date: "March 2025",
    readTime: "4 min read",
    excerpt: "A short 1–2 sentence teaser that appears on the blog card.",
    content: `
      <p>Your first paragraph goes here.</p>
      <h3>A Section Heading</h3>
      <p>More content...</p>
      <blockquote>A meaningful quote from your post.</blockquote>
      <ul>
        <li>A bullet point</li>
        <li>Another bullet point</li>
      </ul>
    `
  },
  ── */

];
