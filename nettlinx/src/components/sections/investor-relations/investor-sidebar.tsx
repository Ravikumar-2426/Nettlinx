import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INVESTOR_SECTIONS } from "@/data/investor-data";
import { cn } from "@/lib/utils";

interface InvestorSidebarProps {
  selectedSection: string;
  onSectionChange: (sectionId: string) => void;
  isMobile?: boolean;
  onClose?: () => void;
}

export default function InvestorSidebar({ 
  selectedSection, 
  onSectionChange, 
  isMobile = false,
  onClose 
}: InvestorSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set([selectedSection])
  );

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    if (isMobile && onClose) {
      onClose();
    }
  };

  const groupedSections = [
    {
      title: "Financial Information",
      sections: INVESTOR_SECTIONS.filter(s => 
        ['annual-reports', 'financial-results', 'annual-returns'].includes(s.id)
      )
    },
    {
      title: "Governance & Compliance",
      sections: INVESTOR_SECTIONS.filter(s => 
        ['corporate-governance', 'shareholding-pattern', 'policies', 'ethics', 'disclosures'].includes(s.id)
      )
    },
    {
      title: "Shareholder Services",
      sections: INVESTOR_SECTIONS.filter(s => 
        ['service-request', 'tds-faqs', 'contact', 'publications'].includes(s.id)
      )
    },
    {
      title: "Meetings & Presentations",
      sections: INVESTOR_SECTIONS.filter(s => 
        ['postal-ballot', 'presentations', 'other-disclosures'].includes(s.id)
      )
    },
    {
      title: "Market Information",
      sections: INVESTOR_SECTIONS.filter(s => 
        ['share-price'].includes(s.id)
      )
    }
  ];

  return (
    <div className={cn(
      "bg-gradient-to-b from-blue-50 to-white border-r border-gray-200 h-full overflow-y-auto shadow-sm",
      isMobile ? "w-full" : "w-80"
    )}>
      <div className="p-6 border-b border-gray-200 bg-white">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Investor Relations</h2>
        <p className="text-sm text-gray-600">Select a section to view documents</p>
      </div>

      <div className="p-4">
        {groupedSections.map((group) => (
          <div key={group.title} className="mb-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider px-3 bg-gray-100/50 rounded-lg mb-2">
              {group.title}
            </h3>
            
            {group.sections.map((section) => (
              <div key={section.id} className="mb-1">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-between text-left h-auto rounded-lg mb-1 transition-all duration-200",
                    selectedSection === section.id 
                      ? "bg-primary/15 text-primary border-l-4 border-primary shadow-sm" 
                      : "text-gray-700 hover:bg-white hover:shadow-sm"
                  )}
                  onClick={() => handleSectionClick(section.id)}
                >
                  <div className="flex-1">
                    <div className="text-xs font-bold">{section.title}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {section.documents.length} documents
                    </div>
                  </div>
                  
                </Button>

              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}