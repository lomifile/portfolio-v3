import * as PDFJS from "pdfjs-dist";
import type {
  PDFDocumentProxy,
  RenderParameters,
} from "pdfjs-dist/types/src/display/api";
import { useRef, useState, useCallback, useEffect } from "react";
import { Button } from "../button/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export interface PdfReaderProps {
  link: string;
}

export function PdfReader({ link }: PdfReaderProps) {
  PDFJS.GlobalWorkerOptions.workerSrc =
    "https://unpkg.com/pdfjs-dist@5.1.91/build/pdf.worker.min.mjs";

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy>();
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = useCallback(
    (pageNum: number, pdf = pdfDoc) => {
      let renderTask: PDFJS.RenderTask;
      const canvas = canvasRef.current;
      if (!canvas || !pdf) return;
      canvas.height = 0;
      canvas.width = 0;
      // canvas.hidden = true;
      pdf
        .getPage(pageNum)
        .then((page) => {
          const viewport = page.getViewport({ scale: 1.5 });
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          const renderContext: RenderParameters = {
            canvasContext: canvas.getContext("2d")!,
            viewport: viewport,
          };
          try {
            if (renderTask) {
              renderTask.cancel();
            }
            renderTask = page.render(renderContext);
            return renderTask.promise;
          } catch (err) {
            console.error("Cought error", err);
          }
        })
        .catch((error) => console.log(error));
    },
    [pdfDoc],
  );
  useEffect(() => {
    renderPage(currentPage, pdfDoc);
  }, [pdfDoc, currentPage, renderPage]);
  useEffect(() => {
    const loadingTask = PDFJS.getDocument(link);
    loadingTask.promise.then(
      (loadedDoc) => {
        setPdfDoc(loadedDoc);
      },
      (error) => {
        console.error(error);
      },
    );
  }, [link]);

  const nextPage = () =>
    pdfDoc && currentPage < pdfDoc.numPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="flex justify-center items-center w-full h-fit flex-col lg:flex-row gap-1">
      <Button
        className="hidden lg:flex h-fit justify-center items-center"
        fill="primary"
        onClick={prevPage}
        disabled={currentPage <= 1}
      >
        <ChevronLeftIcon />
      </Button>
      <canvas
        className="xl:p-10 w-full md:w-full xl:w-[80%] 2xl:w-[40%] 2xl:p-20 h-fit"
        ref={canvasRef}
      ></canvas>
      <Button
        className="hidden lg:flex h-fit justify-center items-center"
        fill="primary"
        onClick={nextPage}
        disabled={currentPage >= (pdfDoc?.numPages ?? -1)}
      >
        <ChevronRightIcon />
      </Button>
      <div className="w-full flex lg:hidden justify-center gap-4">
        <Button
          className="h-fit justify-center items-center"
          fill="primary"
          onClick={prevPage}
          disabled={currentPage <= 1}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          className="h-fit justify-center items-center"
          fill="primary"
          onClick={nextPage}
          disabled={currentPage >= (pdfDoc?.numPages ?? -1)}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}
