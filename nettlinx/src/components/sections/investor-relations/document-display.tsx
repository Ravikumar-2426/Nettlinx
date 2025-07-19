import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { 
  Eye, 
  Download, 
  FileText, 
  Search, 
  Calendar,
  Filter 
} from "lucide-react";
import { InvestorSection, InvestorDocument, getAvailableYears } from "@/data/investor-data";
import { cn } from "@/lib/utils";

interface DocumentDisplayProps {
  section: InvestorSection;
  onDocumentView: (title: string, url: string) => void;
}

export default function DocumentDisplay({ section, onDocumentView }: DocumentDisplayProps) {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  const availableYears = getAvailableYears(section.documents);
  
  const filteredDocuments = section.documents.filter(doc => {
    const matchesYear = selectedYear === "all" || doc.year === selectedYear;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesYear && matchesSearch;
  });

  const handleView = (doc: InvestorDocument) => {
    onDocumentView(doc.title, doc.url);
  };

  const handleDownload = (doc: InvestorDocument) => {
    window.open(doc.url, '_blank');
  };

  return (
    <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{section.title}</h1>
          {section.description && (
            <p className="text-gray-600 text-lg">{section.description}</p>
          )}
          <div className="flex items-center gap-2 mt-4">
            <Badge variant="outline" className="bg-primary/10 text-primary">
              {section.documents.length} Documents
            </Badge>
            {availableYears.length > 0 && (
              <Badge variant="outline" className="bg-secondary/10 text-secondary">
                {availableYears.length} Financial Years
              </Badge>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {availableYears.length > 0 && (
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {availableYears.map(year => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>

        {/* Documents Grid */}
        <div className="space-y-4">
          {filteredDocuments.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
                <p className="text-gray-600">
                  {searchTerm ? "Try adjusting your search criteria" : "No documents available for this section"}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredDocuments.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow duration-200 bg-white">
                  <CardContent className="p-4 md:p-6">
                    {/* Mobile Layout */}
                    <div className="md:hidden">
                      <div className="flex items-center gap-3 mb-3">
                        <FileText className="h-5 w-5 text-red-500" />
                        <h3 className="text-md font-medium text-gray-900 flex-1">{doc.title}</h3>
                        {doc.year && (
                          <Badge variant="outline" className="bg-gray-100 text-gray-700 text-xs">
                            <Calendar className="h-3 w-3 mr-1" />
                            {doc.year}
                          </Badge>
                        )}
                      </div>
                      {doc.date && (
                        <p className="text-sm text-gray-600 mb-3 ml-8">
                          Published: {doc.date}
                        </p>
                      )}
                      <div className="flex items-center gap-3 justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleView(doc)}
                          className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary"
                        >
                          <Eye className="h-4 w-4" />
                          VIEW
                        </Button>
                        
                        <Button
                          size="sm"
                          onClick={() => handleDownload(doc)}
                          className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="h-5 w-5 text-red-500" />
                          <h3 className="text-lg font-medium text-gray-900">{doc.title}</h3>
                          {doc.year && (
                            <Badge variant="outline" className="bg-gray-100 text-gray-700">
                              <Calendar className="h-3 w-3 mr-1" />
                              {doc.year}
                            </Badge>
                          )}
                        </div>
                        {doc.date && (
                          <p className="text-sm text-gray-600 ml-8">
                            Published: {doc.date}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleView(doc)}
                          className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary"
                        >
                          <Eye className="h-4 w-4" />
                          VIEW
                        </Button>
                        
                        <Button
                          size="sm"
                          onClick={() => handleDownload(doc)}
                          className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                        >
                          <Download className="h-4 w-4" />
                          DOWNLOAD
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            All documents are in PDF format. For accessibility support or alternative formats, 
            please contact our investor relations team.
          </p>
        </div>
      </div>
    </div>
  );
}