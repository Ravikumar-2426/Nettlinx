import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { INVESTOR_SECTIONS, getInvestorSectionById } from "@/data/investor-data";
import InvestorSidebar from "./investor-sidebar";
import DocumentDisplay from "./document-display";
import PDFViewer from "./pdf-viewer";
import { cn } from "@/lib/utils";

interface InvestorRelationsMainProps {
  initialSection?: string;
}

export default function InvestorRelationsMain({ initialSection = "annual-reports" }: InvestorRelationsMainProps) {
  const [selectedSection, setSelectedSection] = useState(initialSection);
  const [selectedPDF, setSelectedPDF] = useState<{ title: string; url: string } | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentSection = getInvestorSectionById(selectedSection);

  const handleSectionChange = (sectionId: string) => {
    setSelectedSection(sectionId);
    setSelectedPDF(null);
  };

  const handlePDFView = (title: string, url: string) => {
    setSelectedPDF({ title, url });
  };

  const handleBackToDocuments = () => {
    setSelectedPDF(null);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  // If PDF viewer is active, show it
  if (selectedPDF) {
    return (
      <PDFViewer
        title={selectedPDF.title}
        pdfUrl={selectedPDF.url}
        onBack={handleBackToDocuments}
      />
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 mt-16">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="flex items-center justify-between px-4 py-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="p-2"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex h-screen lg:h-auto">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <InvestorSidebar
            selectedSection={selectedSection}
            onSectionChange={handleSectionChange}
          />
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-black/50" onClick={handleSidebarClose} />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative w-80 max-w-sm"
            >
              <div className="absolute top-4 right-4 z-10">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSidebarClose}
                  className="p-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <InvestorSidebar
                selectedSection={selectedSection}
                onSectionChange={handleSectionChange}
                isMobile={true}
                onClose={handleSidebarClose}
              />
            </motion.div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:h-screen">
          {currentSection ? (
            <DocumentDisplay
              section={currentSection}
              onDocumentView={handlePDFView}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Section Not Found
                </h2>
                <p className="text-gray-600 mb-6">
                  The requested investor relations section could not be found.
                </p>
                <Button
                  onClick={() => setSelectedSection("annual-reports")}
                  className="bg-primary hover:bg-primary/90"
                >
                  Go to Annual Reports
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}