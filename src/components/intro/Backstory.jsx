import React from 'react'

const Backstory = () => {
  return (
    <div className="intro-card-content">
      <p>
        One idea I had for a small project was to redesign the&nbsp;
        <a href="https://asa.mit.edu/groups/" target="_blank">Groups</a> page
        of my school’s&nbsp; 
        <a href="https://asa.mit.edu/" target="_blank">Association of
        Student Activities</a>&nbsp;
        website. The Groups page provides details about the
        hundreds of student groups on campus, including each group's name, status, 
        description, and meeting times.
      </p>
      <p>
        As you can see by either looking down below or clicking the first link above,
        the website is very bland and outdated.  As an officer of one of the
        student groups, I would visit this page a couple of times a semester 
        and each time be turned off by the poor design and styling.
      </p>
      <p>
        I knew I could design something better so, as a project, I
        decided to do just that and restyle the group page.  I decided to use 
        the Material Design style for the update. Although there are many 
        Material Design libraries out there (MUI, Material Design Light, 
        Materialize), I forwent using any of them and instead wrote 
        my own CSS and React components, giving myself control of all states, 
        animations, and functionality.  
      </p>
      <p>
        View my work below.  The first tab, Old, is a remake of the current 
        ASA group page.  The second tab, New, is my rendition of the website, 
        the updated version.  The third tab, Both, is a side by side comparison of
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
      <p><b>tl;dr Scroll down, click the "New" tab, and see what I created :)</b></p>
    </div>
  );
};

export default Backstory;