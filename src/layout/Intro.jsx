import React from 'react';

class Intro extends React.Component {
  render() {
    return (
      <section id="intro">
        <h2>Material Design Database</h2>
        <div >
          <p>
            One idea I had for a small project was to redesign the student groups
            page of my school’s Association of Student Activities website. The 
            group page of the website serves to provide information about the
            hundreds of student groups on campus, info like name, status, 
            description, and meeting times.
          </p>
          <p>
            As you can see by either down below or clicking here, the website is
            very bland and outdated.  As an officer of one of the student groups,
            I would visit this page a couple of times a semester and each time 
            be turned off by the poor design and styling.
          </p>
          <p>
            I knew I could develop a much better designed page and so , I 
            decided that a cool project for me to tackle would be updating the 
            interface of the group page of the website.  I decided to use the 
            Material Design style for the update. Although there are many 
            Material Design libraries out there (MUI, Material Design Light, 
            Materialize), I chose to forgo using any of them and instead write 
            my own CSS and React components to control all the states, 
            animations, and functionality myself.  
          </p>
          <p>
            View my work below.  The first tab, Old, is a remake of the current 
            ASA group page.  I second tab, New, is my rendition of the website, 
            the updated version.  The third tab, is a side by side comparison of
            the two pages, with the zoom of half on each.
          </p>
          <p>
            (Because this was just a small project/the ASA website is unlikely 
            to be viewed on a mobile screen/I became lazy, I did not make the 
            page responsive.)
          </p>
          <p>
            You can check out the code for this project on Github here.
          </p>
          <p>
            Thanks for stopping by.
          </p>
        </div>
      </section>
    );
  }
}

export default Intro;