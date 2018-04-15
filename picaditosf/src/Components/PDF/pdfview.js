import React, { Component } from 'react';
import * as PdfJs from 'pdfjs-dist';

// Components
import { Viewer } from './Viewer';

const PDF_URL = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';


export default class pdf extends Component {
  state = {
    pdf: null,
    scale: 1.2
  };

  componentDidMount() {
    PdfJs.getDocument(PDF_URL).then((pdf) => {
      console.log(pdf);
      this.setState({ pdf });
    });
  }

  render() {
    const { pdf, scale } = this.state;
    return (
      <div align='center' >
        <Viewer
          pdf={pdf}
          scale={scale}
        />
      </div>
    );
  }
}

