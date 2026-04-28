export type NewsPost = {
  slug: string;
  date: string;
  type: string;
  title: string;
  summary: string;
  image: string;
  content: string[];
};

export const newsPosts: NewsPost[] = [
  {
    slug: "new-compliance-expectations-growing-companies",
    date: "April 23, 2026",
    type: "Blog",
    title:
      "New compliance expectations for growing companies in regulated sectors",
    summary:
      "An overview of how directors, in-house teams, and growing businesses can tighten governance practices before new enforcement trends create avoidable exposure.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Growth often exposes businesses to more complex compliance obligations long before leadership teams feel fully prepared for them. In regulated sectors especially, expansion can trigger new reporting duties, board oversight expectations, and operational controls that require early attention.",
      "For many companies, the most practical starting point is a clear internal review of governance structures, approval processes, and record-keeping habits. Boards should understand where legal responsibility sits, management should know when escalation is required, and internal documentation should show that risks are being assessed consistently rather than reactively.",
      "Cabinet Nyamugabo works with founders, directors, and management teams to identify the points where commercial growth and regulatory exposure begin to overlap. The aim is not simply technical compliance, but a defensible operating model that supports confident decision-making as the business scales.",
    ],
  },
  {
    slug: "five-legal-priorities-infrastructure-investment-projects",
    date: "April 22, 2026",
    type: "Article",
    title:
      "Five legal priorities for infrastructure, investment, and cross-border projects",
    summary:
      "A practical look at transaction structuring, regulatory coordination, and dispute planning for projects that involve multiple stakeholders and jurisdictions.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Large projects rarely fail because of a single legal issue. More often, they become vulnerable when structuring, approvals, financing, and stakeholder expectations evolve at different speeds. That is why legal planning has to begin at the earliest stages of project design rather than after major commercial decisions have already been made.",
      "Among the most important priorities are clarity around risk allocation, alignment between contract terms and regulatory requirements, and a realistic dispute strategy if performance or approvals are delayed. Cross-border matters add another layer, particularly when parties are operating under different legal cultures and enforcement realities.",
      "With disciplined legal coordination, project sponsors and investors can reduce uncertainty significantly. Our role is to help clients create durable frameworks that support execution, preserve optionality, and protect the project if commercial conditions change.",
    ],
  },
  {
    slug: "boards-prepare-for-corporate-investigations",
    date: "April 22, 2026",
    type: "Insight",
    title:
      "How boards can prepare for higher scrutiny in corporate investigations",
    summary:
      "Directors and senior executives are facing greater pressure to move quickly, document carefully, and respond to risk with a defensible internal process.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Investigations place immediate pressure on directors to balance legal exposure, business continuity, and stakeholder confidence. The quality of the board’s response often depends less on speed alone than on whether the process is structured, documented, and guided by sound legal judgment from the start.",
      "A prepared board should understand how allegations are escalated, who preserves relevant records, how internal decision-making is documented, and when outside counsel should be engaged. These steps help preserve credibility and reduce the risk of inconsistent responses at a critical moment.",
      "We advise leadership teams on investigation readiness before problems escalate, and we support active matters with a focus on defensible process, confidentiality, and strategic communication. A strong response protects more than legal position; it also protects institutional trust.",
    ],
  },
];

export function getNewsPost(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
