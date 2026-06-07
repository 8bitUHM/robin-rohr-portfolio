import fitz
from pathlib import Path

pdfs = [
    Path(r"c:\Users\Jalen\Documents\GitHub\robin-rohr-portfolio\public\images\SKM_550i26060616190.pdf"),
    Path(r"c:\Users\Jalen\Documents\GitHub\robin-rohr-portfolio\public\images\cid_D31E1574-2768-4EDC-8130-95C6B3DA4F04.pdf"),
    Path(r"c:\Users\Jalen\Documents\GitHub\robin-rohr-portfolio\public\images\cid_70943208-D2CF-4B7C-8618-330965B47720.pdf"),
]
out = Path(r"c:\Users\Jalen\Documents\GitHub\robin-rohr-portfolio\scripts\_pdf_debug")
out.mkdir(parents=True, exist_ok=True)
for pdf in pdfs:
    doc = fitz.open(pdf)
    print(pdf.name, "pages:", doc.page_count)
    for i in range(doc.page_count):
        page = doc[i]
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        p = out / f"{pdf.stem}_p{i + 1}.png"
        pix.save(p)
        print(" ", i + 1, page.rect, "->", p.name)
    doc.close()
