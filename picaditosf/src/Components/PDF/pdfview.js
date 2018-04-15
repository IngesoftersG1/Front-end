import React from 'react';
import PDF from 'react-pdf-js';
import myPDF from './sample.pdf'

export default class MyPdfViewer extends React.Component {
  state = {};
 
  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }
 
  onPageComplete = (page) => {
    this.setState({ page });
  }
 
  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }
 
  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }
 
  renderPagination = (page, pages) => {
    let previousButton = <div className="previous" onClick={this.handlePrevious}><a href="#">Previous</a></div>;
    if (page === 1) {
      previousButton = <div className="previous disabled"><a href="#">Previous</a></div>;
    }
    let nextButton = <div className="next" onClick={this.handleNext}><a href="#">Next</a></div>;
    if (page === pages) {
      nextButton = <div className="next disabled"><a href="#">Next </a></div> ;
    }
    return (
      <nav>
        <div className="pager">
          {previousButton}
          {nextButton}
        </div>
      </nav>
      );
  }
 
  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
     <div>
      <div align="center">
        <PDF
          file={myPDF}
          onDocumentComplete={this.onDocumentComplete}
          onPageComplete={this.onPageComplete}
          page={this.state.page}
        />
        {pagination}
      </div>
      <div align="center">
      <br/>
      <br/>
      </div>
      </div>
     
    )
  }
}
 
