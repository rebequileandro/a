import { jsPDF } from "jspdf";

export const PDFDocument = (name, ) => {
  const doc = new jsPDF();
  doc.text("Hello world!", 10, 10);
  doc.save(`estadísticas ${name}.pdf`);
}
