import React from 'react';

class Details extends React.Component {
  
  get linkContent() {
    return [
      {
        title: 'ReactCSSTransitionReplace',
        anchor: 'https://github.com/marnusw/react-css-transition-replace'
      },
      {
        title: 'UnderscoreJS',
        anchor: 'http://underscorejs.org/'
      },
      {
        title: 'Ionicons',
        anchor: 'http://ionicons.com/'
      },
    ];
  }
  
  get links() {
    return this.linkContent.map((link, i) => {
      let comma = i + 1 < this.linkContent.length ? ', ' :'';
      return (
        <span>
          <a key={i} href={link.anchor}>{link.title}</a>
          {comma}
        </span>
      );
    });
  }
  
  render() {
    return (
      <div className="intro-card-content">
        <div className="intro-design-section">
          <h3 className="intro-header">Design Improvements</h3>
          <p>
            Improved table, search form, and database entry layouts, selected more 
            appealing color palette, added animations to select dropdowns and 
            table rows.
          </p>
        </div>
        <div className="intro-design-section">
          <h3 className="intro-header">Functionality Improvements</h3>
          <p>
            In the old layout, in order to access a group's details or "DB Entry",
            you had to click its anchor in the table and then you were routed to
            a new page with the group information.  (See the bottom of the old tab
            to see what the old databate entries looked like.)  In the new layout,
            by clicking on a group's row in the table, you can see the database
            entry right below the group's listing.
          </p>
          <p>
            In the new layout, by clicking on "Name" in the table header, the 
            sort order of the group list can be alphabetically toggled. The old
            layout had no sorting capabilities.
          </p>
          <p>
            In the new layout, the abbreviation, website, and DB entry of each
            group now only appear when the group is hovered over, improving space
            allocation and reducing the repetitive clutter of the old table.  
            To preserve even more space and improve readability, icons (&nbsp; 
            <i className="ion-ios-world-outline"></i> and&nbsp; 
            <i className="ion-android-more-vertical"></i>&nbsp; 
            ) were used to represent the "website" and "DB entry" instead of just 
            words. Tooltips were used in combination with the icons to eliminate possible
            ambiguity.
          </p>
        </div>
        <div className="intro-design-section">
          <h3 className="intro-header">Technologies Used</h3>
          <p>React, HTML, Javascript, SASS</p>
        </div>
        <div className="intro-design-section">
          <h3 className="intro-header">Stylesheets, Scripts, and Packages Used</h3>
          <p>{this.links}</p>
        </div>
      </div>
    );
  }
}

export default Details;