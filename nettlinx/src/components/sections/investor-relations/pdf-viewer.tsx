import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  ExternalLink, 
  Download, 
  ZoomIn, 
  ZoomOut,
  RotateCw,
  Maximize2,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";

interface PDFViewerProps {
  title: string;
  pdfUrl: string;
  onBack: () => void;
}

export default function PDFViewer({ title, pdfUrl, onBack }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [pdfUrl]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={onBack}
                className="flex items-center space-x-2 hover:bg-gray-100"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Documents</span>
              </Button>
              
              <div className="border-l border-gray-300 pl-6">
                <h1 className="text-xs sm:text-xl font-bold text-grey-900 truncate max-w-96">
                  {title}
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* Zoom Controls */}
              <div className="hidden sm:flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleZoomOut}
                  disabled={zoom <= 50}
                  className="h-8 w-8 p-0"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <span className="text-sm text-gray-700 px-2 min-w-16 text-center">
                  {zoom}%
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleZoomIn}
                  disabled={zoom >= 200}
                  className="h-8 w-8 p-0"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
              </div>

              {/* Action Buttons */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(pdfUrl, '_blank')}
                className="flex items-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Open in Tab</span>
              </Button>
              
              <Button
                size="sm"
                onClick={handleDownload}
                className="flex items-center space-x-2 bg-primary hover:bg-primary/90"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Content */}
      <div className="flex-1 p-6 lg:p-8 pt-8">
        <div className="max-w-7xl mx-auto">
          {isLoading && (
            <Card className="h-96">
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading document...</p>
                </div>
              </CardContent>
            </Card>
          )}

          {hasError && (
            <Card className="h-96">
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-center">
                  <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Unable to load document
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The PDF document could not be displayed in the browser.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <Button
                      variant="outline"
                      onClick={() => window.open(pdfUrl, '_blank')}
                      className="flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in New Tab
                    </Button>
                    <Button
                      onClick={handleDownload}
                      className="flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {!hasError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              style={{ 
                height: 'calc(100vh - 280px)',
                minHeight: '500px'
              }}
            >
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
                width="100%"
                height="100%"
                className="border-0"
                title={title}
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                style={{ 
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'top left',
                  width: `${100 / (zoom / 100)}%`,
                  height: `${100 / (zoom / 100)}%`
                }}
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
            <p>
              Document: {title}
            </p>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <span>PDF Format</span>
              <span>•</span>
              <span>Nettlinx Limited</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}