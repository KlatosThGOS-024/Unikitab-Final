import { getDocument } from "pdfjs-dist";
import { TextItem, TextMarkedContent } from "pdfjs-dist/types/src/display/api";

class PdfToText {
  pages: number | undefined;
  text: string | undefined;
  pdfPath: string | URL;
  pdf: any;
  constructor(pdfPath: string) {
    this.pdfPath = pdfPath;
    this.pdf = getDocument(this.pdfPath).promise;
  }
  async getPdfPages() {
    try {
      const response = await this.pdf;
      this.pages = response.numPages;

      return this.pages;
    } catch (error) {
      console.error("Error loading PDF:", error);
      throw new Error("Failed to load PDF");
    }
  }
  async getTextualData() {
    try {
      const pdf = await this.pdf;
      const textPage = await pdf.getPage(1);
      const text = await textPage.getTextContent();
      const textContent = text.items
        .map((item: TextItem) => {
          return item.str;
        })
        .join(" ");
      console.log(textContent);
      return textContent;
    } catch (error) {}
  }
}
export default PdfToText;
