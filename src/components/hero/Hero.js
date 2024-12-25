import React, { useContext } from "react";
import "./Hero.css";

function Hero() {
    return(
        <div class="hero">
            <div class="container">
              <div class="BG-text"><div class="developer">Developer</div></div>
              <div class="content">
                <div class="left">
                  <div class="div">
                    <div class="photo-name">
                      <div class="profile-photo">
                        <img src="src/assets/img/profile-photo.svg"/>
                      </div>
                      <div class="name">
                        <div class="text-wrapper">Mohammed</div>
                        <div class="text-wrapper-2">Test Automation Engineer</div>
                      </div>
                    </div>
                    <div class="div-2">
                      <div class="div-2">
                        <div class="div-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00004 5.98266C0.999882 5.99253 0.999865 6.00239 0.999994 6.01225V18C0.999994 19.6523 2.34771 21 3.99999 21H20C21.6523 21 23 19.6523 23 18V6.01236C23.0001 6.00242 23.0001 5.99247 22.9999 5.98251C22.9905 4.33822 21.6464 3 20 3H3.99999C2.35349 3 1.00943 4.3383 1.00004 5.98266ZM3.10657 5.55395C3.27195 5.22692 3.61203 5 3.99999 5H20C20.388 5 20.728 5.22692 20.8934 5.55395L12 11.7793L3.10657 5.55395ZM21 7.92066V18C21 18.5477 20.5477 19 20 19H3.99999C3.45228 19 2.99999 18.5477 2.99999 18V7.92066L11.4265 13.8192C11.7709 14.0603 12.2291 14.0603 12.5735 13.8192L21 7.92066Z" fill="white"/>
                            </svg>                            
                          <input class="abdurrahman-sinan" placeholder="mohammedtaher10295@gmail.com" type="email" />
                        </div>
                        <div class="div-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10Z" fill="#2D3648"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4448 23.8317C11.445 23.8319 11.4453 23.8321 12 23L11.4448 23.8317C11.7807 24.0556 12.2188 24.056 12.5547 23.8321L12 23C12.5547 23.8321 12.5544 23.8322 12.5547 23.8321L12.5581 23.8298L12.5648 23.8253L12.5877 23.8098C12.6072 23.7966 12.6349 23.7776 12.6704 23.753C12.7415 23.7038 12.8435 23.6321 12.9722 23.5392C13.2295 23.3534 13.5936 23.0822 14.0292 22.7354C14.8987 22.043 16.0606 21.0428 17.226 19.8127C19.5157 17.3958 22 13.9019 22 10C22 7.34784 20.9464 4.8043 19.0711 2.92893C17.1957 1.05357 14.6522 0 12 0C9.34784 0 6.8043 1.05357 4.92893 2.92893C3.05357 4.8043 2 7.34784 2 10C2 13.9019 4.48426 17.3958 6.77405 19.8127C7.93939 21.0428 9.10133 22.043 9.97082 22.7354C10.4064 23.0822 10.7705 23.3534 11.0278 23.5392C11.1565 23.6321 11.2585 23.7038 11.3296 23.753C11.3651 23.7776 11.3928 23.7966 11.4123 23.8098L11.4352 23.8253L11.4419 23.8298L11.4448 23.8317ZM6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 13.0981 17.9843 16.1042 15.774 18.4373C14.6894 19.5822 13.6013 20.5195 12.7833 21.1708C12.4789 21.4133 12.213 21.6152 12 21.7726C11.787 21.6152 11.5211 21.4133 11.2167 21.1708C10.3987 20.5195 9.31061 19.5822 8.22595 18.4373C6.01574 16.1042 4 13.0981 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315Z" fill="#2D3648"/>
                            </svg>
                            
                          <div class="text-wrapper-3">Egypt</div>
                        </div>
                        <div class="div-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C9.20435 2 8.44129 2.31607 7.87868 2.87868C7.31607 3.44129 7 4.20435 7 5V6H4C2.34315 6 1 7.34315 1 9V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V9C23 7.34315 21.6569 6 20 6H17V5C17 4.20435 16.6839 3.44129 16.1213 2.87868C15.5587 2.31607 14.7956 2 14 2H10ZM15 6V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4H10C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V6H15ZM9 8H15V20H9V8ZM7 8H4C3.44772 8 3 8.44772 3 9V19C3 19.5523 3.44772 20 4 20H7V8ZM17 20V8H20C20.5523 8 21 8.44772 21 9V19C21 19.5523 20.5523 20 20 20H17Z" fill="#2D3648"/>
                            </svg>
                          <div class="text-wrapper-3">Full-time / Freelancer</div>
                        </div>
                        <div class="div-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9957 1.06663C15.4225 1.05296 13.9069 1.65773 12.7753 2.75068L12.765 2.7608L11.045 4.4708C10.6533 4.86018 10.6515 5.49335 11.0408 5.88501C11.4302 6.27667 12.0634 6.27851 12.455 5.88913L14.1696 4.1845C14.9235 3.45887 15.9318 3.05746 16.9783 3.06656C18.0271 3.07567 19.0304 3.49635 19.772 4.23798C20.5136 4.97961 20.9343 5.98286 20.9434 7.03165C20.9525 8.0777 20.5514 9.08557 19.8264 9.83934L16.8329 12.8329C16.4274 13.2385 15.9392 13.5523 15.4018 13.7528C14.8644 13.9533 14.2902 14.0358 13.7181 13.9949C13.146 13.9539 12.5894 13.7903 12.086 13.5153C11.5827 13.2403 11.1443 12.8603 10.8008 12.401C10.47 11.9587 9.84327 11.8684 9.40102 12.1992C8.95877 12.53 8.86843 13.1567 9.19923 13.5989C9.71458 14.2879 10.3721 14.858 11.1271 15.2705C11.8821 15.683 12.717 15.9283 13.5752 15.9897C14.4334 16.0512 15.2947 15.9274 16.1008 15.6267C16.907 15.326 17.639 14.8554 18.2472 14.2469L21.2471 11.2471L21.2593 11.2347C22.3522 10.1031 22.957 8.58745 22.9433 7.01427C22.9297 5.44109 22.2986 3.93621 21.1862 2.82377C20.0738 1.71132 18.5689 1.0803 16.9957 1.06663Z" fill="#2D3648"/>
                            <path d="M10.4247 8.01018C9.56657 7.94872 8.70522 8.07254 7.89911 8.37324C7.09305 8.67392 6.36109 9.14443 5.75285 9.75285L2.75285 12.7529L2.74067 12.7652C1.64772 13.8969 1.04295 15.4125 1.05662 16.9857C1.07029 18.5588 1.70131 20.0637 2.81376 21.1762C3.9262 22.2886 5.43108 22.9196 7.00426 22.9333C8.57744 22.947 10.0931 22.3422 11.2247 21.2492L11.2371 21.2371L12.9471 19.5271C13.3376 19.1365 13.3376 18.5034 12.9471 18.1129C12.5565 17.7223 11.9234 17.7223 11.5328 18.1129L9.82932 19.8164C9.07555 20.5414 8.06768 20.9425 7.02164 20.9334C5.97285 20.9243 4.9696 20.5036 4.22797 19.7619C3.48634 19.0203 3.06566 18.0171 3.05655 16.9683C3.04746 15.9222 3.44851 14.9144 4.17355 14.1606L7.16706 11.1671C7.57257 10.7614 8.06071 10.4476 8.59811 10.2471C9.13552 10.0466 9.70976 9.9641 10.2819 10.0051C10.854 10.046 11.4106 10.2096 11.9139 10.4846C12.4173 10.7596 12.8556 11.1396 13.1992 11.5989C13.53 12.0412 14.1567 12.1315 14.5989 11.8007C15.0412 11.4699 15.1315 10.8432 14.8007 10.401C14.2854 9.71203 13.6279 9.14196 12.8729 8.72945C12.1178 8.31694 11.2829 8.07164 10.4247 8.01018Z" fill="#2D3648"/>
                            </svg>                            
                          <div class="text-wrapper-3">www.sinantokmak.com</div>
                        </div>
                      </div>
                      <div class="label">
                        <div class="div-wrapper"><div class="text-wrapper-4">HTML</div></div>
                        <div class="div-wrapper"><div class="text-wrapper-4">CSS</div></div>
                        <div class="div-wrapper"><div class="text-wrapper-4">JS</div></div>
                        <div class="div-wrapper"><div class="text-wrapper-4">REACT</div></div>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="button-2">
                      <a class="button-text" href="https://drive.google.com/file/d/14EUB-WvvjYlPXZpBoeUsDm5ZGOY-b17g/view?usp=sharing">Download CV</a>
                      <img class="img-2" src="src/assets/img/icon-download.svg" />
                  </button>
                </div>
                <div class="right">
                  <div class="info">
                    <div class="title">
                      <div class="text-wrapper-5">&lt;h1&gt;</div>
                      <div class="text">
                        <div class="text-wrapper-6">Hey</div>
                        <p class="i-m-sinan">
                          <span class="span">I’m </span>
                          <span class="text-wrapper-7">Mohammed</span>
                          <span class="span">,</span>
                        </p>
                        <div class="identity">
                          <div class="text-wrapper-6">Test Automation Engineer</div>
                          <div class="text-wrapper-8">&lt;/h1&gt;</div>
                        </div>
                      </div>
                    </div>
                    <div class="para">
                      <div class="text-wrapper-5">&lt;p&gt;</div>
                      <div class="text-2">
                        <p class="p">
                          I help business grow by crafting amazing web experiences. If you’re looking for a developer that
                          likes to get stuff done,
                        </p>
                      </div>
                      <div class="text-wrapper-8">&lt;/p&gt;</div>
                      <button class="CTA">
                        <div class="let-s-talk">Let’s Talk</div>
                        <div class="icon-mail-wrapper"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00004 5.98266C0.999882 5.99253 0.999865 6.00239 0.999994 6.01225V18C0.999994 19.6523 2.34771 21 3.99999 21H20C21.6523 21 23 19.6523 23 18V6.01236C23.0001 6.00242 23.0001 5.99247 22.9999 5.98251C22.9905 4.33822 21.6464 3 20 3H3.99999C2.35349 3 1.00943 4.3383 1.00004 5.98266ZM3.10657 5.55395C3.27195 5.22692 3.61203 5 3.99999 5H20C20.388 5 20.728 5.22692 20.8934 5.55395L12 11.7793L3.10657 5.55395ZM21 7.92066V18C21 18.5477 20.5477 19 20 19H3.99999C3.45228 19 2.99999 18.5477 2.99999 18V7.92066L11.4265 13.8192C11.7709 14.0603 12.2291 14.0603 12.5735 13.8192L21 7.92066Z" fill="white"/>
                          </svg></div>
                      </button>
                    </div>
                  </div>
                  <div class="highlights">
                    <div class="div-4">
                      <div class="text-wrapper-9">4</div>
                      <div class="text-3">
                        <div class="text-wrapper-10">Programming</div>
                        <div class="text-wrapper-11">Language</div>
                      </div>
                    </div>
                    <div class="div-4">
                      <div class="text-wrapper-9">6</div>
                      <div class="text-3">
                        <div class="text-wrapper-10">Development</div>
                        <div class="text-wrapper-11">Tools</div>
                      </div>
                    </div>
                    <div class="div-4">
                      <div class="text-wrapper-9">8</div>
                      <div class="text-3">
                        <div class="text-wrapper-10">Years of</div>
                        <div class="text-wrapper-11">Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="navigation-bar">
              <div class="default"><img class="img-2" src="src/assets/img/icon-grid.svg" /></div>
              <div class="img-wrapper"><img class="img-2" src="src/assets/img/icon-user.svg" /></div>
              <div class="img-wrapper"><img class="img-2" src="src/assets/img/icon-code.svg" /></div>
              <div class="img-wrapper"><img class="img-2" src="src/assets/img/icon-monitor.svg" /></div>
              <div class="img-wrapper"><img class="img-2" src="src/assets/img/icon-edit.svg" /></div>
              <div class="img-wrapper"><img class="img-2" src="src/assets/img/icon-mail.svg" /></div>
            </div>
          </div>
    );
}

export default Hero;