"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  CheckCircle2,
  Calendar,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  ExternalLink,
  Search,
  Filter,
  Star,
  Users,
  DollarSign,
  Clock,
  Check,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function ProjectManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [filterBy, setFilterBy] = useState("Reviews");
  const [sortBy, setSortBy] = useState("Featured");
  const [itemsPerPage, setItemsPerPage] = useState("10 per page");
  const [expandedSections, setExpandedSections] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [openItems, setOpenItems] = useState({});
  const [tableOfContents, setTableOfContents] = useState([
    {
      id: "comparison-chart",
      title: "Mailchimp Alternatives comparison chart",
      active: false,
    },
    {
      id: "tools",
      title: "Mailchimp Alternatives Tools",
      active: false,
    },
    {
      id: "newsletter-tools",
      title: "What Creators, agencies, and small businesses each need from newsletter tools",
      active: false,
    },
    {
      id: "features-to-look-and-ignore",
      title: "Top features to look for (and to ignore) in an email and newsletter solution",
      active: false,
    },
     {
      id: "common-mistakes",
      title: "Most Common Mistakes First-Time Buyers Make When Picking an Email Automation Provider",
      active: false,
    },

    {
      id: "faqs",
      title: "Frequently Asked Questions (FAQ)",
      active: false,
    },
  ]);

  const toggleSection = (sectionKey, labelKey = null) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));

    if (labelKey) {
      setActiveSection((prev) => (prev === sectionKey ? null : sectionKey));
      setOpenSection((prev) => (prev === labelKey ? null : labelKey));
    }

    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setTableOfContents((prev) =>
            prev.map((item) => ({
              ...item,
              active: item.id === sectionId,
            }))
          );
        }
      });
    };

    // Set initial active state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toolsContent = {
    Brevo: {
      title: "Brevo: Best overall",
      logo: "/images/Brevo.png",
      button: {
        text: "Visit Website",
        link: "#",
      },

      pros: [
        "Powerful automation workflows for personalized customer engagement",
        "Multi-channel messaging including email, SMS, and WhatsApp",
        "Flexible pay-as-you-go pricing option for varying send volumes",
        "High deliverability rates and GDPR compliance",
        "Built-in CRM and landing page tools",
      ],
      cons: [
        "Some advanced features require higher-tier plans",
        "Pay-as-you-go pricing can be confusing for beginners",
        "Enterprise pricing is custom and may be costly for small businesses",
      ],
      why : {
        intro: `Brevo stands out as the best overall alternative to Mailchimp because it combines advanced automation capabilities with multi-channel communication options in one platform. Unlike providers like Constant Contact that focus solely on email, Brevo lets marketers integrate SMS and WhatsApp campaigns seamlessly. Its flexible pricing — including a pay-as-you-go option — caters well to businesses of all sizes, from startups to enterprises. While Mailchimp offers solid basics, Brevo’s broader feature set and AI-powered tools provide more value for those ready to scale their email marketing efforts.`,

        extras: {
          "Key Features": (
            <>
              <h4 className="text-lg font-bold mb-2">
                Email & SMS Marketing:{" "}
              </h4>
              <p className="text-black mb-4">
                Create campaigns with a drag-and-drop editor, personalize
                content, and send via email, SMS, or WhatsApp.
              </p>
              <h4 className="text-lg font-bold mb-2">Automation Workflows: </h4>
              <p className="text-black mb-4">
                Build automated customer journeys triggered by behavior like
                sign-ups and purchases.
              </p>

              <h4 className="text-lg font-bold mb-2">
                CRM & Contact Management:{" "}
              </h4>
              <p className="text-black">
                Segment and manage contacts with real-time updates inside a
                built-in CRM.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Landing Pages & Forms:{" "}
              </h4>
              <p className="text-black">
                Design landing pages and signup forms that integrate directly
                with campaigns.
              </p>
              <h4 className="text-lg font-bold mb-2">Advanced Reporting: </h4>
              <p className="text-black">
                Track campaign performance with detailed analytics, including
                open rates, click maps, and A/B test results.
              </p>
              <h4 className="text-lg font-bold mb-2">
                Multichannel Integration:{" "}
              </h4>
              <p className="text-black">
                Connect campaigns with platforms like Google Ads and Facebook
                for a cohesive marketing approach.
              </p>
              <h4 className="text-lg font-bold mb-2">Transactional Emails: </h4>
              <p className="text-black">
                Send order confirmations and receipts with high deliverability.
              </p>
              <h4 className="text-lg font-bold mb-2">GDPR Compliance: </h4>
              <p className="text-black">
                Ensure privacy and data security with built-in GDPR support.
              </p>
              <h4 className="text-lg font-bold mb-2">AI-Powered Tools: </h4>
              <p className="text-black">
                Leverage AI to generate content, optimize send times, and
                enhance customer support.
              </p>
            </>
          ),
          Pricing: (
            <>
              <h4 className="text-lg font-bold mb-2">Free plan</h4>
              <p className="font-bold  text-black mb-4">
                Price: <span classname="font-light">$0/month</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>300 emails/day</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Starter Plan:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light"> $9/month</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>From 5,000 emails/monthNo daily sending limit</li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Business Plan:</h4>
              <p className="font-bold  text-black mb-4">
                Price:
                <span classname="font-light"> $18/month</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features: </h6>
              <ul className="list-disc pl-5 text-black">
                <li>
                  From 5,000 emails/monthMarketing automationAI predictive
                  sending
                </li>
              </ul>
              <h4 className="text-lg font-bold mb-2">Enterprise Plan:</h4>
              <p className="font-bold  text-black mb-4">
                Price: <span classname="font-light">Custom pricing</span>
              </p>
              <h6 className="text-lg font-bold mb-2">Features:</h6>
              <ul className="list-disc pl-5 text-black">
                <li>Unlimited contactsSub-account management</li>
              </ul>
            </>
          ),
        },
      },
    },
  };

  // Convert toolsContent object to array for mapping
  const toolsArray = Object.entries(toolsContent).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const faqData = [
    {
      question: "Do I actually need newsletter software?",
      answer:
        "If you want to grow and engage an audience professionally, yes. Newsletter software offers automation, analytics, and list management that manual methods can’t match.",
    },
    {
      question: "Can’t I just use Gmail to send newsletters?",
      answer:
        "Gmail isn’t designed for mass email campaigns and risks your account being flagged as spam. Dedicated tools ensure higher deliverability and compliance with email laws.",
    },
    {
      question: "How much does a newsletter service cost?",
      answer:
        "Prices vary widely, from free plans with basic features to premium plans costing $50+ per month for advanced tools. Most vendors offer scalable pricing based on list size and features.",
    },
    {
      question:
        "What’s the difference between email marketing and email automation?",
      answer:
        "Email marketing is the broader strategy of sending emails to promote or engage. Email automation uses triggered workflows to send targeted messages without manual effort.",
    },
    {
      question: "Can I switch newsletter providers easily?",
      answer: `Yes, most services allow you to export your subscriber list and migrate campaigns, but some manual tweaking is usually needed to adapt templates and automations.`,
    },
  ];

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = "Best Project Management Software for 2025";

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`,
      "_blank"
    );
  };

 const mailchimpData = [
  {
    id: 1,
    name: "Brevo",
    image: "/images/Brevo.png",
    alt: "Brevo",
    StartingPrice: "$9/month",
    visitUrl: "Brevo",
    keyFeatures: [
      "Free plan available",
      "Flexible payment options",
      "GDPR compliance tools",
    ],
  },
  {
    id: 2,
    name: "Constant Contact",
    image: "/images/Constant_Contact.png",
    alt: "Constant Contact",
    StartingPrice: "$12/month",
    visitUrl: "Constant_Contact",
    keyFeatures: [
      "Event management tools",
      "Social media integration",
      "Robust contact management",
    ],
  },
];


  const renderStars = (score) => {
    const stars = [];
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      );
    }

    return stars;
  };

  return (
    <>
      <Head>
        <title>
          Mailchimp Alternatives: The Best Email Marketing Tools of 2025 |
          Complete Guide
        </title>
        <meta
          name="description"
          content="Looking for Mailchimp alternatives? Discover the best-reviewed email marketing tools with detailed features, pricing, and comparisons to help you choose the right software for your business needs."
        />

        {/* Open Graph (Facebook + LinkedIn) */}
        <meta
          property="og:title"
          content="Best Email Marketing Tools of 2025 | Complete Guide"
        />
        <meta
          property="og:description"
          content="Comprehensive guide to choosing the best email marketing software for your business needs, including comparisons and reviews of top tools."
        />
        <meta
          property="og:image"
          content="https://blogs.compare-bazaar.com/images/blog3.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          property="og:url"
          content="https://technology-advice.vercel.app/software-reviews/project-management"
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Technology Advice" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Email Marketing Tools of 2025 | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Comprehensive guide to choosing the best email marketing software for your business needs, including comparisons and reviews of top tools."
        />
        <meta
          name="twitter:image"
          content="https://blogs.compare-bazaar.com/images/blog3.webp"
        />

        <link
          rel="canonical"
          href="https://technology-advice.vercel.app/software-reviews/project-management"
        />
      </Head>

      <div className="min-h-screen bg-[#0E1F1C] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border border-white/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-white/5 rounded-full"></div>

        {/* Main content container */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Breadcrumb Navigation */}
          <nav
            className="pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-8 lg:pb-10"
            aria-label="Breadcrumb"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm lg:text-base">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors group"
                aria-label="Go to homepage"
              >
                <Home className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Go to homepage"
              >
                <span>Home</span>
              </Link>
              <span className="text-white/60">›</span>
              <Link
                href="/blog"
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <span>Blog</span>
              </Link>
              <span className="text-white/60">›</span>
              <span className="text-white font-medium">
                Mailchimp Alternatives: The Best Email Marketing Tools of 2025
              </span>
            </div>
          </nav>

          {/* Main Heading */}
          <div className="max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 sm:mb-12 lg:mb-16">
              Mailchimp Alternatives: The Best Email Marketing Tools of 2025
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 lg:mb-10 max-w-3xl">
              Looking for Mailchimp alternatives? Discover the best-reviewed
              email marketing tools with detailed features, pricing, and user
              ratings to help you decide.
            </p>
          </div>

          {/* Author and Reviewer Section */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-8 lg:space-x-12 space-y-6 sm:space-y-0 mb-8 sm:mb-12 lg:mb-16">
            {/* Author */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image
                  src="/images/it1.png"
                  alt="Stephen Porritt-Writer"
                  fill
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-1">
                  Written by
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-semibold">
                  Stephen Porritt
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-1">
                  Writer
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="max-w-4xl xl:max-w-5xl">
            <div className="flex items-start space-x-3 sm:space-x-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-400 flex-shrink-0 mt-0.5 sm:mt-1" />
              <div className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90">
                <p>
                  <span className="font-semibold text-white">
                    Technology Advice
                  </span>{" "}
                  is able to offer our services for free because some vendors
                  may pay us for web traffic or other sales opportunities. Our
                  mission is to help technology buyers make better purchasing
                  decisions, so we provide you with information for all vendors
                  — even those that don't pay us.
                </p>
              </div>
            </div>
          </div>

          {/* Publication Date */}
          <div className="mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12 lg:pb-16">
            <div className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg text-white/70">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <span>Published Date: June 27, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents - Left Sidebar */}

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents - Left Sidebar */}
            <div className="lg:w-80 lg:sticky lg:top-24 lg:self-start">
              <div
                className="bg-white rounded-4xl shadow-sm border border-gray-200 p-6"
                style={{ scrollBehavior: "smooth" }}
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of contents
                </h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className={`block py-2 px-3 rounded-md text-sm transition-colors duration-200 ${
                        item.active
                          ? "bg-green-50 text-green-700 border-l-4 border-green-500 font-medium"
                          : "text-gray-600 hover:text-black hover:bg-gray-100"
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                {/* Share Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Share this article
                  </h3>
                  <div className="flex space-x-3">
                    <button
                      onClick={shareOnFacebook}
                      className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                      aria-label="Share on Facebook"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnLinkedIn}
                      className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                      aria-label="Share on LinkedIn"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    <button
                      onClick={shareOnTwitter}
                      className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}

            <div className="flex-1 max-w-4xl">
             
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg mt-4 transition-shadow duration-300 overflow-hidden p-6 sm:p-8">
                  {/* Header */}
                  <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                      Mailchimp for your email marketing
                    </h1>
                  </header>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      If you’ve ever used Mailchimp for your email marketing,
                      you probably know it’s a popular tool — but it’s not the
                      perfect fit for everyone. Whether you’re feeling limited
                      by its pricing, craving more advanced automation, or
                      simply looking for a fresh approach, plenty of other
                      options are worth exploring.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      I’ve put together this guide to help you navigate some of
                      the best alternatives to Mailchimp so you can find the
                      right tool for your unique needs and goals. We’ll walk
                      through each alternative, pointing out its strengths and
                      ideal use cases. By the end, you should have a clearer
                      picture of which platform feels right for your business or
                      project.
                    </p>

                    {/* Recommendations List */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Brevo:
                          </a>{" "}
                          Best Overall
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Constant Contact:
                          </a>{" "}
                          Best for event-based campaigns
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Hostinger:
                          </a>{" "}
                          Best budget bundle
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            Proton:
                          </a>{" "}
                          Best for privacy and security
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            ScalaHosting:
                          </a>{" "}
                          Best for web hosting with premium email
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">
                          <a
                            href="#"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            ClickFunnels:
                          </a>{" "}
                          Best for sales synergy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              

              <section id="comparison-chart" className="mt-8">
                <div className="bg-white rounded-2xl sm:rounded-3xl border mt-4  border-gray-200  p-6 mb-8">
                  <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                      Mailchimp Alternatives comparison chart
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                  </div>

                  {/* Unified Table Layout for All Screen Sizes */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-full">
                        <thead>
                          <tr className="border-b border-gray-200 bg-gray-50">
                            <th className="text-left py-3 sm:py-6 px-2 sm:px-8 font-semibold text-gray-700 text-sm sm:text-lg"></th>
                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                              Starting Price
                            </th>

                            <th className="text-center py-3 sm:py-6 px-2 sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">
                              Key Features
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {mailchimpData.map((mailchimp, index) => (
                            <tr
                              key={mailchimp.id}
                              className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                              }`}
                            >
                              <td className="py-4 sm:py-8 px-2 sm:px-8">
                                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                                  <div className="w-16 h-8 sm:w-32 sm:h-12 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img
                                      src={mailchimp.image}
                                      alt={mailchimp.alt}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <div className="text-center sm:text-left">
                                    <span className="font-medium text-gray-800 text-xs sm:text-base">
                                      {mailchimp.name}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 sm:py-8 px-2 sm:px-6 text-center">
                                <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                                  <span className="text-lg sm:text-2xl font-bold text-gray-800">
                                    {mailchimp.StartingPrice}
                                  </span>
                                  <div className="flex space-x-1 scale-75 sm:scale-100">
                                    {renderStars(mailchimp.StartingPrice)}
                                  </div>
                                </div>
                              </td>

                              <td className="py-4 sm:py-8 px-2 sm:px-6">
                                <ul className="space-y-1 sm:space-y-2">
                                  {mailchimp.keyFeatures.map((feature, idx) => (
                                    <li
                                      key={idx}
                                      className="text-xs sm:text-sm text-gray-600 flex items-start sm:items-center"
                                    >
                                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5 sm:mt-0"></div>
                                      <span className="leading-tight sm:leading-normal">
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </td>

                              <td className="py-4 sm:py-8 px-2 sm:px-8">
                                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-2 px-3 sm:py-3 sm:px-6 rounded-lg transition-all duration-200 flex items-center space-x-1 sm:space-x-2 mx-auto text-xs sm:text-sm">
                                  <span>Visit Website</span>
                                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
              {/* what are best project management tools */}

              {/* Common Heading

                <h1 className="text-3xl font-bold mt-4 text-black mb-2">
                  What is the best project management software?
                </h1>
                <p className="text-gray-700 mt-2">
                  Here are our top recommendations for project management
                  software in 2025.
                </p> */}

              {/* Map through the tools array */}
              <section id="tools">
              {toolsArray.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white rounded-2xl sm:rounded-3xl border mt-4  border-gray-200  p-6 mb-8"
                >
                  {/* Tool Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Image
                          src={tool.logo}
                          alt={`${tool.title} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h2 className="text-2xl font-bold text-black">
                        {tool.title}
                      </h2>
                    </div>
                    <a
                      href={tool.button.link}
                      className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700"
                    >
                      {tool.button.text}
                    </a>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid md:grid-cols-2 text-black gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Pros</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {tool.pros.map((pro, index) => (
                          <li key={index}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Cons</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {tool.cons.map((con, index) => (
                          <li key={index}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Why I Chose Section */}
                  <div className="mb-6 text-black">
                    <h3 className="text-lg font-semibold mb-2">
                      Why I chose {tool.title.split(":")[0]}
                    </h3>
                    <p className="mb-4">{tool.why.intro}</p>
                  </div>

                  {/* Expandable Sections */}
                  {tool.why.extras &&
                    Object.entries(tool.why.extras).map(([label, content]) => {
                      const sectionKey = `${tool.id}-${label}`;
                      return (
                        <div
                          key={sectionKey}
                          className="border-t text-black pt-4 mb-4"
                        >
                          <button
                            onClick={() => toggleSection(sectionKey)}
                            className="w-full flex justify-between items-center font-medium"
                          >
                            <span>{label}</span>
                            <span className="text-green-600">
                              {openSections[sectionKey] ? (
                                <Minus className="w-5 h-5" />
                              ) : (
                                <Plus className="w-5 h-5" />
                              )}
                            </span>
                          </button>
                          {openSections[sectionKey] && (
                            <div className="mt-2 text-gray-700">
                              {typeof content === "string" ? (
                                <p>{content}</p>
                              ) : (
                                content
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              ))}
              </section>

              {/* What Creators, agencies, and small businesses each need from newsletter tools */}

              <section id="newsletter-tools" className="mt-8 max-w-7xl mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    What Creators, agencies, and small businesses each need from
                    newsletter tools
                  </h1>

                  {/* Creators Section */}
                
                  <div>
                    {/* Creators Heading */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Creators
                    </h2>

                    {/* Creators Paragraph */}
                    <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      For individual creators — such as bloggers, YouTubers, or
                      podcasters — newsletter tools need to offer simple,
                      easy-to-use interfaces with strong content personalization
                      features. Creators often want to build direct
                      relationships with their audience, so tools that support
                      seamless integration with social media, easy automation,
                      and subscriber segmentation are key. Affordability and
                      scalability also matter as their audiences grow.
                    </p>
                  </div>
                </div>
                {/* Agencies Section */}
                <div>
                  {/* Agencies Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Agencies
                  </h2>

                  {/* Agencies Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Agencies managing multiple client accounts require robust
                    multi-user management, white-label options, and detailed
                    analytics. They need advanced automation capabilities and
                    collaboration features to streamline workflows across teams.
                    Security, compliance, and deliverability are especially
                    critical for agencies handling diverse client bases.
                  </p>
                </div>
                {/* Small Businessest Section */}
                <div>
                  {/* Small Businesses Heading */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    Small Businesses
                  </h2>

                  {/* Small Businesses Paragraph */}
                  <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    Small businesses look for solutions that balance
                    functionality and cost. Essential features include CRM
                    integration, e-commerce capabilities, and reliable
                    automation workflows to nurture leads and boost sales.
                    User-friendly interfaces and solid customer support help
                    small teams maximize their marketing efforts without a steep
                    learning curve.
                  </p>
                </div>
              </section>

              {/* Top features to look for (and to ignore) in an email and newsletter solution */}

              <section id="features-to-look-and-ignore" className="mt-8 max-w-7xl mx-auto text-black">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Top features to look for (and to ignore) in an email and
                    newsletter solution
                  </h1>

                  {/* Features to look for: */}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Features to look for:
                    </h2>

                    <h4 className="text-lg font-bold mb-2">
                      Automation and Personalization:{" "}
                    </h4>
                    <p className="text-black mb-4">
                      Look for flexible automation workflows and dynamic content
                      to engage subscribers effectively.
                    </p>
                    <h4 className="text-lg font-bold mb-2">
                      Segmentation and Targeting:{" "}
                    </h4>
                    <p className="text-black mb-4">
                      The ability to segment lists based on behavior,
                      demographics, or purchase history is vital.
                    </p>

                    <h4 className="text-lg font-bold mb-2">Deliverability: </h4>
                    <p className="text-black">
                      High inbox placement rates ensure your messages reach your
                      audience, not spam folders.
                    </p>
                    <h4 className="text-lg font-bold mb-2">Integrations: </h4>
                    <p className="text-black">
                      Seamless connections with ecommerce platforms, CRMs, and
                      other marketing tools can save time and boost results.
                    </p>
                    <h4 className="text-lg font-bold mb-2">
                      Analytics and Reporting{" "}
                    </h4>
                    <p className="text-black">
                      Real-time insights help optimize campaigns and measure
                      ROI.
                    </p>
                  </div>

                  {/* Features to ignore:*/}
                  <div classname="max-w-none">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mt-4 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                      Features to ignore:
                    </h2>

                    <h4 className="text-lg font-bold mb-2">
                      Overly Complex Drag-and-Drop Editors:{" "}
                    </h4>
                    <p className="text-black mb-4">
                      Sometimes these add unnecessary complexity — simplicity
                      can be better.
                    </p>
                    <h4 className="text-lg font-bold mb-2">
                      Unused Social Sharing Features:{" "}
                    </h4>
                    <p className="text-black mb-4">
                      If your audience doesn’t engage via social media, this
                      feature adds little value.
                    </p>
                  </div>
                </div>
              </section>

              {/* Most Common Mistakes First-Time Buyers Make When Picking an Email Automation Provider */}

              <section id="common-mistakes" className="mt-8 max-w-7xl text-black mx-auto">
                {" "}
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Most Common Mistakes First-Time Buyers Make When Picking an
                    Email Automation Provider
                  </h1>

                 
                  <div>
                    <h4 className="text-lg font-bold mb-2">
                      Choosing Based on Price Alone:{" "}
                    </h4>
                    <p className="text-black mb-4">
                      The cheapest option may lack essential features or suffer
                      from poor deliverability.
                    </p>
                    <h4 className="text-lg font-bold mb-2">
                      Ignoring Scalability{" "}
                    </h4>
                    <p className="text-black mb-4">
                      A tool that works for 100 subscribers might not serve you
                      well when your list grows to 10,000+.
                    </p>

                    <h4 className="text-lg font-bold mb-2">
                      Overlooking Deliverability Rates:{" "}
                    </h4>
                    <p className="text-black">
                      Without good inbox placement, even the best emails won’t
                      be seen.
                    </p>
                    <h4 className="text-lg font-bold mb-2">
                      Not Testing Automation Workflows:{" "}
                    </h4>
                    <p className="text-black">
                      Skipping thorough testing can lead to broken sequences or
                      unintended subscriber experiences.
                    </p>
                    <h4 className="text-lg font-bold mb-2">
                      Neglecting Integration Needs:{" "}
                    </h4>
                    <p className="text-black">
                      Make sure your email tool fits smoothly with your existing
                      tech stack from day one.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mt-8 max-w-7xl mx-auto">
                <div className="max-w-none">
                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    Frequently Asked Questions (FAQ)
                  </h1>

                  {/* FAQ Accordion */}
                  <div className="space-y-0 -mt-8">
                    {faqData.map((item, index) => (
                      <div key={index} className="border-b border-gray-200">
                        {/* Question Button */}
                        <button
                          onClick={() => toggleItem(index)}
                          className="w-full flex items-center justify-between py-6 sm:py-7 md:py-8 lg:py-9 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-700 leading-relaxed pr-4 sm:pr-6 md:pr-8">
                            {item.question}
                          </h3>

                          {/* Plus/Minus Icon */}
                          <div
                            className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-md flex items-center justify-center transition-all duration-200 ${
                              openItems[index]
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-green-600 hover:bg-green-700"
                            }`}
                          >
                            {openItems[index] ? (
                              <Minus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                            ) : (
                              <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                            )}
                          </div>
                        </button>

                        {/* Answer Content */}
                        {openItems[index] && (
                          <div className="pb-6 sm:pb-7 md:pb-8 lg:pb-9 pr-12 sm:pr-16 md:pr-20 lg:pr-24 animate-in slide-in-from-top-2 duration-300">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
