import { Document, Page, pdfjs } from "react-pdf";
import resume from "../../assests/CV.pdf";
import { useEffect, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="card-container">
      <div className="resume">
        <Document file={resume} className='pdf'>
          <Page
            className="resume-page"
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={width > 768 ? 1.1 : 0.5}
          />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
