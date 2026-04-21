---
name: evidence-based-wellness
description: "Generate evidence-based wellness, mindfulness, supplements, and longevity content for a GitHub Pages site. Use when creating blog posts, summaries, or guides; do not provide medical diagnosis or treatment advice."
tags: [wellness, longevity, supplements, mindfulness, evidence-based]
---

# Evidence-Based Wellness & Longevity Content Generator

## Purpose
Generate high-quality, scientifically grounded content for a GitHub Pages website focused on wellness, mindfulness, supplements, and healthy aging. Content must be accurate, responsible, and cite reputable scientific or medical sources.

## Use when
- Authoring articles, summaries, or practical guides about: supplements, longevity research, mindfulness practices, lifestyle medicine, or nutrition.
- You need a safe, non-medical tone that emphasizes evidence and uncertainty.

## Content Principles

- **Evidence first:** Rely on peer-reviewed studies, systematic reviews, and official public-health bodies.
- **Readable:** Aim for a general audience (≈8–12th grade reading level). Define technical terms tersely.
- **Balanced:** Present benefits, limitations, and known risks. Call out study size, design, and quality.
- **No medical claims:** Avoid diagnosing, prescribing, or promising cures. Use cautious phrasing: "may help", "associated with", "research suggests".

## Trusted Sources (examples)

- Scientific journals and publishers: https://www.nature.com, https://link.springer.com
- Literature databases: https://pubmed.ncbi.nlm.nih.gov
- Public health organizations: https://www.who.int, https://www.nih.gov, https://www.cdc.gov, https://www.nhs.uk

When citing, include DOI or PubMed links where possible and prefer systematic reviews or meta-analyses.

## Research Topics & Domains

- Supplements: vitamins, minerals, probiotics — note where evidence is mixed or limited.
- Longevity: aging biology, biomarkers, lifestyle interventions.
- Mindfulness & mental health: stress, sleep, meditation studies.
- Lifestyle medicine: diet, exercise, sleep, environmental exposures.

## Content Template (Article)

```markdown
# {Article Title}

## Introduction
One-paragraph overview explaining why the topic matters.

## What the Evidence Says
- Short, referenced summary of key findings (link DOI/PubMed).

## Benefits
- Bullet list of evidence-supported outcomes and the strength of evidence.

## Risks and Limitations
- Side effects, study limitations, populations not covered.

## Practical, Safe Tips
- Actionable recommendations with safety caveats and when to consult a professional.

## References
- Numbered list with full citations and links.
```

## Prompt Examples (how to use this skill)

- Short summary: "Write a 300-word, evidence-based summary on the health effects of vitamin D supplementation for adults, cite PubMed or DOI links, and include 3 practical tips."
- Comparison: "Compare the evidence for probiotics vs. prebiotics for gut health; highlight study types and evidence strength."
- FAQ style: "Create an FAQ about intermittent fasting and longevity, focusing on human clinical trials and safety notes."

## Safety & Disclaimer

This skill is for educational content only. Do not provide personalized medical advice. Always recommend readers consult qualified healthcare professionals for diagnosis or treatment.

## Affiliate Links — iHerb

- If a recommended supplement is available on iHerb and you want to include a purchase link, append the referral code `CIV758` to the product URL so the link includes your Rewards Code.
- Add the referral parameter as `?rcode=CIV758` (or `&rcode=CIV758` if the product URL already has query parameters). Example:

	- Markdown: [Vitamin D (example)](https://www.iherb.com/pr/product-slug/12345?rcode=CIV758)

- Always disclose affiliate relationships clearly near the recommendation. Example disclosure sentence to include in posts: "This post contains affiliate links to iHerb; purchases made through these links may earn a small commission at no extra cost to you."
- Do not let affiliate interests influence the evidence-based tone: recommendations must remain grounded in the literature and include risks, limitations, and alternatives.

## Next steps / Extensibility

- Add an auto-citation helper that formats DOIs/PubMed links.
- Add a content-quality score (evidence strength, study design weighting).
- Integrate with a CI action to auto-build posts and validate that references are present.

---