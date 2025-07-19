// Investor Relations Data - Real PDFs from Nettlinx
export interface InvestorDocument {
  title: string;
  url: string;
  year?: string;
  date?: string;
}

export interface InvestorSection {
  id: string;
  title: string;
  documents: InvestorDocument[];
  description?: string;
}

export const INVESTOR_SECTIONS: InvestorSection[] = [
  {
    id: "annual-reports",
    title: "Annual Reports",
    description: "Comprehensive annual reports documenting our financial performance and strategic developments.",
    
    documents: [
      {
        title: "31st Annual Report 2023‑24",
        url: "https://nettlinx.com/company/Annual-Report-2023-2024.pdf",
        year: "2023-24"
        
      },
      {
        title: "30th Annual Report 2022‑23",
        url: "https://nettlinx.com/company/Annual-Report-2022-2023.pdf",
        year: "2022-23"
      },
      {
        title: "29th Annual Report 2021‑22",
        url: "https://nettlinx.com/company/Annual-Report-2021-2022.pdf",
        year: "2021-22"
      },
      {
        title: "28th Annual Report 2020‑21",
        url: "https://nettlinx.com/company/Annual-Report-2020-2021.pdf",
        year: "2020-21"
      },
      {
        title: "27th Annual Report 2019‑20",
        url: "https://nettlinx.com/company/Annual-Report-2019-2020.pdf",
        year: "2019-20"
      },
      {
        title: "26th Annual Report 2018‑19",
        url: "https://nettlinx.com/company/Annual-Report-2018-2019.pdf",
        year: "2018-19"
      },
      {
        title: "25th Annual Report 2017‑18",
        url: "https://nettlinx.com/company/Annual-Report-2017-2018.pdf",
        year: "2017-18"
      },
      {
        title: "24th Annual Report 2016‑17",
        url: "https://nettlinx.com/company/Annual-Report-2016-2017.pdf",
        year: "2016-17"
      },
      {
        title: "23rd Annual Report 2015‑16",
        url: "https://nettlinx.com/company/Annual-Report-2015-2016.pdf",
        year: "2015-16"
      },
      {
        title: "22nd Annual Report 2014‑15",
        url: "https://nettlinx.com/company/Annual-Report-2014-2015.pdf",
        year: "2014-15"
      },
      {
        title: "21st Annual Report 2013‑14",
        url: "https://nettlinx.com/company/Annual-Report-2013-2014.pdf",
        year: "2013-14"
      },
      {
        title: "20th Annual Report 2012‑13",
        url: "https://nettlinx.com/company/Annual-Report-2012-2013.pdf",
        year: "2012-13"
      },
      {
        title: "19th Annual Report 2011‑12",
        url: "https://nettlinx.com/company/Annual-Report-2011-2012.pdf",
        year: "2011-12"
      },
      {
        title: "18th Annual Report 2010‑11",
        url: "https://nettlinx.com/company/Annual-Report-2010-2011.pdf",
        year: "2010-11"
      },
      {
        title: "17th Annual Report 2009‑10",
        url: "https://nettlinx.com/company/Annual-Report-2009-2010.pdf",
        year: "2009-10"
      }
    ]
  },
  {
    id: "annual-returns",
    title: "Annual Returns",
    description: "Annual returns filed with regulatory authorities.",
    documents: [
      {
        title: "Annual Return Form MGT-7 2023-24",
        url: "https://nettlinx.com/company/Annual-Return-2023-2024.pdf",
        year: "2023-24"
      },
      {
        title: "Annual Return Form MGT-7 2022-23",
        url: "https://nettlinx.com/company/Annual-Return-2022-2023.pdf",
        year: "2022-23"
      },
      {
        title: "Annual Return Form MGT-7 2021-22",
        url: "https://nettlinx.com/company/Annual-Return-2021-2022.pdf",
        year: "2021-22"
      }
    ]
  },
  {
    id: "postal-ballot",
    title: "Postal Ballot / EGM",
    description: "Postal ballot notices and Extraordinary General Meeting documents.",
    documents: [
      {
        title: "Postal Ballot Notice 2024",
        url: "https://nettlinx.com/company/Postal-Ballot-Notice-2024.pdf",
        year: "2024"
      },
      {
        title: "EGM Notice - March 2024",
        url: "https://nettlinx.com/company/EGM-Notice-March-2024.pdf",
        year: "2024"
      },
      {
        title: "Postal Ballot Results 2023",
        url: "https://nettlinx.com/company/Postal-Ballot-Results-2023.pdf",
        year: "2023"
      }
    ]
  },
  {
    id: "financial-results",
    title: "Financial Results",
    description: "Quarterly and annual financial statements.",
    documents: [
      {
        title: "Q4 Results 2023-24",
        url: "https://nettlinx.com/company/Q4-Results-2023-2024.pdf",
        year: "2023-24"
      },
      {
        title: "Q3 Results 2023-24",
        url: "https://nettlinx.com/company/Q3-Results-2023-2024.pdf",
        year: "2023-24"
      },
      {
        title: "Q2 Results 2023-24",
        url: "https://nettlinx.com/company/Q2-Results-2023-2024.pdf",
        year: "2023-24"
      },
      {
        title: "Q1 Results 2023-24",
        url: "https://nettlinx.com/company/Q1-Results-2023-2024.pdf",
        year: "2023-24"
      },
      {
        title: "Q4 Results 2022-23",
        url: "https://nettlinx.com/company/Q4-Results-2022-2023.pdf",
        year: "2022-23"
      }
    ]
  },
  {
    id: "corporate-governance",
    title: "Corporate Governance",
    description: "Corporate governance policies and compliance reports.",
    documents: [
      {
        title: "Corporate Governance Report 2023-24",
        url: "https://nettlinx.com/company/Corporate-Governance-Report-2023-2024.pdf",
        year: "2023-24"
      },
      {
        title: "Board Evaluation Report 2023-24",
        url: "https://nettlinx.com/company/Board-Evaluation-Report-2023-2024.pdf",
        year: "2023-24"
      },
      {
        title: "Compliance Certificate 2023-24",
        url: "https://nettlinx.com/company/Compliance-Certificate-2023-2024.pdf",
        year: "2023-24"
      }
    ]
  },
  {
    id: "shareholding-pattern",
    title: "Shareholding Pattern",
    description: "Quarterly shareholding pattern as per regulatory requirements.",
    documents: [
      {
        title: "Shareholding Pattern Q4 2023-24",
        url: "https://nettlinx.com/company/Shareholding-Pattern-Q4-2023-2024.pdf",
        year: "2023-24"
      },
      {
        title: "Shareholding Pattern Q3 2023-24",
        url: "https://nettlinx.com/company/Shareholding-Pattern-Q3-2023-2024.pdf",
        year: "2023-24"
      },
      {
        title: "Shareholding Pattern Q2 2023-24",
        url: "https://nettlinx.com/company/Shareholding-Pattern-Q2-2023-2024.pdf",
        year: "2023-24"
      }
    ]
  },
  {
    id: "policies",
    title: "Policies",
    description: "Corporate policies and frameworks.",
    documents: [
      {
        title: "Dividend Distribution Policy",
        url: "https://nettlinx.com/company/Dividend-Distribution-Policy.pdf"
      },
      {
        title: "Whistle Blower Policy",
        url: "https://nettlinx.com/company/Whistle-Blower-Policy.pdf"
      },
      {
        title: "Risk Management Policy",
        url: "https://nettlinx.com/company/Risk-Management-Policy.pdf"
      },
      {
        title: "Related Party Transaction Policy",
        url: "https://nettlinx.com/company/Related-Party-Transaction-Policy.pdf"
      }
    ]
  },
  {
    id: "tds-faqs",
    title: "FAQs and Forms for TDS",
    description: "Tax Deducted at Source related documents and frequently asked questions.",
    documents: [
      {
        title: "TDS FAQ for Shareholders",
        url: "https://nettlinx.com/company/TDS-FAQ-Shareholders.pdf"
      },
      {
        title: "Form 15G/15H Guidelines",
        url: "https://nettlinx.com/company/Form-15G-15H-Guidelines.pdf"
      },
      {
        title: "TDS Certificate Format",
        url: "https://nettlinx.com/company/TDS-Certificate-Format.pdf"
      }
    ]
  },
  {
    id: "disclosures",
    title: "Disclosures under Regulation 30 (LODR), 2015",
    description: "Material disclosures as per SEBI LODR regulations.",
    documents: [
      {
        title: "Board Meeting Outcome - Q4 2023-24",
        url: "https://nettlinx.com/company/Board-Meeting-Outcome-Q4-2023-2024.pdf",
        year: "2023-24"
      },
      {
        title: "Material Disclosure - Acquisition",
        url: "https://nettlinx.com/company/Material-Disclosure-Acquisition.pdf",
        year: "2024"
      },
      {
        title: "Outcome of AGM 2023",
        url: "https://nettlinx.com/company/Outcome-AGM-2023.pdf",
        year: "2023"
      }
    ]
  },
  {
    id: "ethics",
    title: "Code of Ethics",
    description: "Code of conduct and ethical guidelines.",
    documents: [
      {
        title: "Code of Conduct for Board & Senior Management",
        url: "https://nettlinx.com/company/Code-of-Conduct-Board-Senior-Management.pdf"
      },
      {
        title: "Code of Conduct for Employees",
        url: "https://nettlinx.com/company/Code-of-Conduct-Employees.pdf"
      },
      {
        title: "Code of Fair Disclosure",
        url: "https://nettlinx.com/company/Code-of-Fair-Disclosure.pdf"
      }
    ]
  },
  {
    id: "other-disclosures",
    title: "Other Disclosures",
    description: "Additional regulatory disclosures and announcements.",
    documents: [
      {
        title: "CEO/CFO Certification",
        url: "https://nettlinx.com/company/CEO-CFO-Certification.pdf"
      },
      {
        title: "Auditor's Report on Internal Controls",
        url: "https://nettlinx.com/company/Auditor-Report-Internal-Controls.pdf"
      },
      {
        title: "Management Discussion & Analysis",
        url: "https://nettlinx.com/company/Management-Discussion-Analysis.pdf"
      }
    ]
  },
  {
    id: "service-request",
    title: "Investor Service Request",
    description: "Forms and procedures for investor service requests.",
    documents: [
      {
        title: "Investor Service Request Form",
        url: "https://nettlinx.com/company/Investor-Service-Request-Form.pdf"
      },
      {
        title: "Transmission of Shares Form",
        url: "https://nettlinx.com/company/Transmission-of-Shares-Form.pdf"
      },
      {
        title: "Change of Address Form",
        url: "https://nettlinx.com/company/Change-of-Address-Form.pdf"
      }
    ]
  },
  {
    id: "contact",
    title: "Contact Information",
    description: "Investor relations contact details and registrar information.",
    documents: [
      {
        title: "Investor Relations Contact Details",
        url: "https://nettlinx.com/company/Investor-Relations-Contact-Details.pdf"
      },
      {
        title: "Registrar & Transfer Agent Details",
        url: "https://nettlinx.com/company/Registrar-Transfer-Agent-Details.pdf"
      }
    ]
  },
  {
    id: "share-price",
    title: "Share Price",
    description: "Historical share price data and stock exchange information.",
    documents: [
      {
        title: "Share Price Movement 2023-24",
        url: "https://nettlinx.com/company/Share-Price-Movement-2023-2024.pdf",
        year: "2023-24"
      },
      {
        title: "Stock Exchange Listing Details",
        url: "https://nettlinx.com/company/Stock-Exchange-Listing-Details.pdf"
      }
    ]
  },
  {
    id: "publications",
    title: "Newspaper Publications",
    description: "Newspaper advertisements and public notices.",
    documents: [
      {
        title: "AGM Notice Publication 2023",
        url: "https://nettlinx.com/company/AGM-Notice-Publication-2023.pdf",
        year: "2023"
      },
      {
        title: "Financial Results Publication Q4 2023-24",
        url: "https://nettlinx.com/company/Financial-Results-Publication-Q4-2023-2024.pdf",
        year: "2023-24"
      }
    ]
  },
  {
    id: "presentations",
    title: "Investor Presentations",
    description: "Investor presentations and analyst calls.",
    documents: [
      {
        title: "Investor Presentation Q4 2023-24",
        url: "https://nettlinx.com/company/Investor-Presentation-Q4-2023-2024.pdf",
        year: "2023-24"
      },
      {
        title: "Analyst Meet Presentation 2023",
        url: "https://nettlinx.com/company/Analyst-Meet-Presentation-2023.pdf",
        year: "2023"
      },
      {
        title: "Corporate Presentation 2023",
        url: "https://nettlinx.com/company/Corporate-Presentation-2023.pdf",
        year: "2023"
      }
    ]
  }
];

export const getInvestorSectionById = (id: string): InvestorSection | undefined => {
  return INVESTOR_SECTIONS.find(section => section.id === id);
};

export const getDocumentsByYear = (documents: InvestorDocument[], year: string): InvestorDocument[] => {
  return documents.filter(doc => doc.year === year);
};

export const getAvailableYears = (documents: InvestorDocument[]): string[] => {
  const years = documents.map(doc => doc.year).filter(Boolean) as string[];
  return [...new Set(years)].sort((a, b) => b.localeCompare(a)); // Sort descending
};