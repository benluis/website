interface Project {
    title: string;
    description: string;
    href?: string;
    imgSrc?: string;
}

const projectsData: Project[] = [
    {
        title: 'Froova',
        description: `Froova is a web scraping and data processing tool designed to extract product information from grocery store websites, process recipe PDFs, and handle dietary restrictions. Implemented in Python, it utilizes Selenium and BeautifulSoup for web scraping, Playwright for saving web pages as PDFs, and Pandas for data manipulation. Additionally, it leverages pdfplumber and the OpenAI API to generate ingredient lists and suggest replacements.`,
        imgSrc: '/static/images/grocery.jpg',
        href: 'https://github.com/benluis/froova',
    },
    {
        title: 'toLatex',
        description: `toLatex is a Python-based Flask web application that converts images and PDFs into LaTeX code. The project preprocesses images using OpenCV, converts PDF pages to images with PyMuPDF, and sends the processed files to an API for LaTeX conversion. This streamlines the creation of professional-quality documents from a variety of input formats.`,
        imgSrc: '/static/images/latex.webp',
        href: 'https://github.com/benluis/tolatex',
    },
];

export default projectsData;
