import React from 'react';
// Import React Router Link component for internal hyperlinks

const Body = () => {
  return (
    
    <main class="page-wrapper">
    <section class="page-section" id="about">
        <h2>About Me</h2>
        <div>
            <p>Im a student at SMU Coding bootcamp being taught by great minds. Give me a passing grade thanks... Just kidding ... not really...  </p>
        </div>
    </section>
    <section class="page-section" id="work">
        <h2>Work</h2>
        <div class="flex-container">
            <a href="#" class="flex-item work1">
                {/* <!-- Span were left to complete Descriptions of each project --> */}
                <div>
                    <h3>Project 1</h3>
                    <span></span>
                </div>
            </a>
            <a href="#" class="flex-item work2">
                <div>
                    <h3>Project 2</h3>
                    <span></span>
                </div>
            </a>            <a href="#" class="flex-item work3">
                <div>
                    <h3>Project 3</h3>
                    <span></span>
                </div>
            </a>            <a href="#" class="flex-item work4">
                <div>
                    <h3>Project 4</h3>
                    <span></span>
                </div>
            </a>            <a href="#" class="flex-item work5">
                <div>
                    <h3>Project 5</h3>
                    <span></span>
                </div>
            </a>
        </div>
    

    </section>
    </main>
  );
};

export default Body;