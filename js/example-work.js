import React from 'react';
import ExampleWorkModal from './example-work-modal';

class ExampleWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "modalOpen": false,
      "selectedExample": this.props.works[0]
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(event, example) {
    this.setState({
      "modalOpen": true,
      "selectedExample": example
    });
  }

  closeModal() {
    this.setState({
      "modalOpen": false
    });
  }

  render() {
    return (
      <span>
        <section className="section section--alignCentered section--description">
          {
            this.props.works.map((example, index) => {
              return <ExampleWorkBubble
                        key={index}
                        openModal={this.openModal}
                        work={example}/>
            })
          }
        </section>
        <ExampleWorkModal
          example={this.state.selectedExample}
          open={this.state.modalOpen}
          closeModal={this.closeModal} />
      </span>
    );
  }
}

class ExampleWorkBubble extends React.Component {
  render() {
    return (
      <div className="section__exampleWrapper"
        onClick={(e) => this.props.openModal(e, this.props.work)}>
        <div className="section__example">
          <img alt={this.props.work.image.desc}
               className="section__exampleImage"
               src={this.props.work.image.src}/>
          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">
              {this.props.work.title}
            </dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default ExampleWork;
export { ExampleWorkBubble };
