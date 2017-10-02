import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

class TagsAndGalleries extends Component<
  RouteComponentProps<any> & object & object, object
> {

  render() {
    return (
      <section className="Login">
        <div className="Table">
          <div className="Table__row">
            <div className="Table__cell Table__cell--align-center Table__cell--align-middle">
                <header className="Login__header"/>
                <section className="Login__body">
                  <p>Welcome to nordsmetal TagsAndGalleries fucking page \,,/,</p>
                </section>
                <footer className="Table">
                  <a href="/login" role="button" />
                </footer>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TagsAndGalleries;