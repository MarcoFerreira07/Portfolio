import React from 'react';
// Import React Router Link component for internal hyperlinks

const Project = () => {
  return (
    
    <main class="page-wrapper">
    <section class="page-section" id="work">
        <h3>Work</h3>
        <div class="flex-container">
            <a href="#" class="work1">
                {/* <!-- Span were left to complete Descriptions of each project --> */}
                <div>
                    <h3>Stock Checker</h3>
                    <span>The objective of this application allows you to view/favorite current/past information on whatever company you are searching into.</span>
                </div>
            </a>
            <a href="#" class="flex-container work2">
                <div>
                    <h3>Dietly</h3>
                    <span></span>
                </div>
            </a>           {/* <a href="#" class="flex-item work3">
                <div>
                    <h3>Project 3</h3>
                    <span></span>
                </div>
            </a>            <a href="#" class="flex-container work4">
                <div>
                    <h3>Project 4</h3>
                    <span></span>
                </div>
            </a>            <a href="#" class="flex-container work5">
                <div>
                    <h3>Project 5</h3>
                    <span></span>
                </div>
            </a>*/}
        </div> 
    

    </section>
    </main>
  );
};

export default Project;
