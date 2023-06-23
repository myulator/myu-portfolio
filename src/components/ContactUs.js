import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Let's connect!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4 className="contact"><em>michael.g.yu@gmail.com</em>
                  {/* {resumeData.linkedinId} */}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}