import React from 'react'

const Backstory = () => {
  return (
    <div className="intro-card-content">
      <p><b>tl;dr Scroll down and see what I created below :)</b></p>
      <p>
        One idea I had for a small project was to redesign the student groups
        page of my school’s Association of Student Activities&nbsp;
        <a href="https://asa.mit.edu/groups/" target="_blank">website</a>
        . The group page of the website provides details about the
        hundreds of student groups on campus, including name, status, 
        description, and meeting times.
      </p>
      <p>
        As you can see by either down below or the link above, the website is 
        very bland and outdated.  As an officer of one of the
        student groups, I would visit this page a couple of times a semester 
        and each time be turned off by the poor design and styling.
      </p>
      <p>
        I knew I could design something better so, as a small project, I
        decided to do just that and update the group page.  I decided to use 
        the Material Design style for the update. Although there are many 
        Material Design libraries out there (MUI, Material Design Light, 
        Materialize), I forwent using any of them and instead write 
        my own CSS and React components, giving myself control of all states, 
        animations, and functionality.  
      </p>
      <p>
        View my work below.  The first tab, Old, is a remake of the current 
        ASA group page.  The second tab, New, is my rendition of the website, 
        the updated version.  The third tab, is a side by side comparison of
        the two pages.
      </p>
      <p>
        Because this was just a small project and did not bother making the web
        page design is not responsive.
      </p>
      <p>
        You can check out the code for this project on Github&nbsp;
        <a href="#" target="_blank">here</a>
        .
      </p>
      <p>
        Thanks for stopping by.
      </p>
    </div>
  );
};

export default Backstory;