import NavigationMenu from './navbar'
import './About.css'
import bg from '/assets/web.svg'
import bg2 from '/assets/project.svg'
import bg3 from '/assets/code.svg'
import bg4 from '/assets/Saly12.svg'
import res from '/assets/resume.pdf'
import destov from '/assets/destov.jpg'

export default function About() {

    return (
        <div id="about">
            <section className="abo">
                <div id="about" className="info">
                    <h1 className="header">about me</h1>
                    <p className="para">I'm Kartik Kittad currently pursuing my B.tech degree in ENTC.My Major
                        is in ENTC and Minor in CSE.<br /><br />As a highly
                        motivated software engineer, I bring a passion for
                        crafting innovative and user friendly software
                        solutions.  <br /><br /> Currently I'm working as MERN Developer Intern at Destov Tech where i will be working on Cargo Tracking Website it contains Airway Bill tracking,
                        Container tracking and Bill of lading tracking.</p>
                </div>
                <div className="skills">
                    <h1 style={{ zIndex: '999' }}>skills</h1>
                    <div className='lang'>
                        <section style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                            <h3 style={{ color: 'purple' }}>▶</h3>
                            <h3> Languages</h3>
                        </section>
                        <section className='logo'>
                            <div className='html' style={{ color: 'orange' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                </svg>
                                <p>HTML</p>
                            </div>
                            <div className="css" style={{ color: '#4f4f4f' }}>
                                <div class="icons8-css-logo"></div>
                                <p>CSS</p>
                            </div>
                            <div className="js" style={{ color: 'green' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                                </svg>
                                <p>JavaScript</p>
                            </div>
                            <div className="java">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 50 50">
                                    <path d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"></path>
                                </svg>
                                <p>Java</p>
                            </div>
                            <div className="cplus" style={{ color: 'blue' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 64 64">
                                    <linearGradient id="kY2lFHytK6J7eR89ploKLa_2T6TKY6whzgV_gr1" x1="32.485" x2="32.485" y1="26.009" y2="39.6" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset=".695" stop-color="#c822ff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLa_2T6TKY6whzgV_gr1)" d="M26.07,35.31l6.17-3.6l6.66,3.92c-1.3,2.29-3.69,3.7-6.33,3.7 C29.73,39.33,27.26,37.69,26.07,35.31z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLb_2T6TKY6whzgV_gr2" x1="32" x2="32" y1="27.121" y2="56.372" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset=".695" stop-color="#c822ff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLb_2T6TKY6whzgV_gr2)" d="M52.6,43.67v0.22L32,55.79l-20.6-11.9 l7.7-4.5c2.6,4.77,7.67,8.01,13.47,8.01c5.52,0,10.55-2.93,13.29-7.69L52.6,43.67z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLc_2T6TKY6whzgV_gr3" x1="31.93" x2="31.93" y1="24.81" y2="35.29" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLc_2T6TKY6whzgV_gr3)" d="M38.55,27.97l-6.35,3.72h-0.01l-6.13,3.6 c-0.48-0.97-0.75-2.06-0.75-3.22c0-1.39,0.39-2.68,1.07-3.79c1.28-2.08,3.57-3.47,6.19-3.47C34.98,24.81,37.2,25.98,38.55,27.97z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLd_2T6TKY6whzgV_gr4" x1="31.87" x2="31.87" y1="8.21" y2="43.89" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLd_2T6TKY6whzgV_gr4)" d="M45.12,24.1l0.39-0.24 c-2.83-4.45-7.67-7.12-12.94-7.12c-5.58,0-10.47,3-13.15,7.46c-1.38,2.31-2.18,4.99-2.18,7.87c0,2.65,0.67,5.13,1.85,7.3 l-7.69,4.52V20.11L32,8.21l20.34,11.75L45.12,24.1z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLe_2T6TKY6whzgV_gr5" x1="15.25" x2="15.25" y1="32.704" y2="48.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLe_2T6TKY6whzgV_gr5)" d="M19.09,39.37c0,0.01,0.01,0.01,0.01,0.02 l-7.7,4.5L19.09,39.37z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLf_2T6TKY6whzgV_gr6" x1="29.15" x2="29.15" y1="26.351" y2="39.094" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLf_2T6TKY6whzgV_gr6)" d="M32.24,31.71l-6.17,3.6 c0-0.01-0.01-0.01-0.01-0.02l6.13-3.6h0.01L32.24,31.71z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLg_2T6TKY6whzgV_gr7" x1="15.25" x2="15.25" y1="30.671" y2="43.89" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLg_2T6TKY6whzgV_gr7)" d="M19.09,39.37c0,0.01,0.01,0.01,0.01,0.02 l-7.7,4.5L19.09,39.37z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLh_2T6TKY6whzgV_gr8" x1="29.15" x2="29.15" y1="24.723" y2="35.31" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLh_2T6TKY6whzgV_gr8)" d="M32.24,31.71l-6.17,3.6 c0-0.01-0.01-0.01-0.01-0.02l6.13-3.6h0.01L32.24,31.71z"></path><linearGradient id="kY2lFHytK6J7eR89ploKLi_2T6TKY6whzgV_gr9" x1="42.27" x2="42.27" y1="13.698" y2="56.641" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#kY2lFHytK6J7eR89ploKLi_2T6TKY6whzgV_gr9)" points="52.34,19.96 32.24,31.71 32.2,31.69 38.55,27.97 45.12,24.1"></polygon><linearGradient id="kY2lFHytK6J7eR89ploKLj_2T6TKY6whzgV_gr10" x1="42.27" x2="42.27" y1="8.21" y2="43.887" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#kY2lFHytK6J7eR89ploKLj_2T6TKY6whzgV_gr10)" points="52.34,19.96 32.24,31.71 32.2,31.69 38.55,27.97 45.12,24.1"></polygon><linearGradient id="kY2lFHytK6J7eR89ploKLk_2T6TKY6whzgV_gr11" x1="32" x2="32" y1="1.255" y2="56.081" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLk_2T6TKY6whzgV_gr11)" d="M55.1,16.93L33.5,4.46 c-0.93-0.53-2.07-0.53-3,0L8.9,16.93c-0.92,0.54-1.5,1.53-1.5,2.6v24.94c0,1.07,0.58,2.06,1.5,2.6l21.6,12.47 c0.93,0.53,2.07,0.53,3,0l21.6-12.47c0.92-0.54,1.5-1.53,1.5-2.6V19.53C56.6,18.46,56.02,17.47,55.1,16.93z M54.6,44.47 c0,0.36-0.19,0.69-0.5,0.87L32.5,57.81c-0.31,0.17-0.69,0.17-1,0L9.9,45.34c-0.31-0.18-0.5-0.51-0.5-0.87V19.53 c0-0.36,0.19-0.69,0.5-0.87L31.5,6.19c0.31-0.17,0.69-0.17,1,0l21.6,12.47c0.31,0.18,0.5,0.51,0.5,0.87V44.47z"></path><polygon fill="#fff" points="45.86,39.7 45.86,39.71 38.9,35.63"></polygon><linearGradient id="kY2lFHytK6J7eR89ploKLl_2T6TKY6whzgV_gr12" x1="42.42" x2="42.42" y1="21" y2="48.745" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".699" stop-color="#e6abff"></stop></linearGradient><path fill="url(#kY2lFHytK6J7eR89ploKLl_2T6TKY6whzgV_gr12)" d="M52.34,19.96l-20.1,11.75l6.66,3.92 l6.96,4.08l6.74,3.96V20.11L52.34,19.96z M44,33h-2v2h-2v-2h-2v-2h2v-2h2v2h2V33z M51,33h-2v2h-2v-2h-2v-2h2v-2h2v2h2V33z"></path>
                                </svg>
                                <p>C++</p>
                            </div>
                            <div className="sql">
                                <div class="icons8-database"></div>
                                <p>SQL</p>
                            </div>
                        </section>
                    </div>
                    <div className="framework">
                        <section style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                            <h3 style={{ color: 'purple' }}>▶</h3>
                            <h3>Frameworks/Libraries</h3>
                        </section>
                        <section className='logo'>
                            <div className="react" style={{ color: '#8576FF' }}>
                                <div class="icons8-react"></div>
                                <p>React</p>
                            </div>
                            <div className="nodejs" style={{ color: 'green' }}>
                                <div class="icons8-node-js"></div>
                                <p>Node.js</p>
                            </div>
                            <div className="tailwind" >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43" height="43" viewBox="0 0 24 24">
                                    <path d="M18 13c-1.858 0-3.489-1.297-5.748-3.092C10.731 8.699 7.246 8.289 6.7 8.714L5.293 7.293C7.346 5.239 8.586 4 11 4c3.018 0 5.214 1.688 6.979 3.046.554.425 1.077.827 1.527 1.092.342.201 1.073.436 1.685.253.391-.115.689-.39.914-.838l1.834.789C22.879 11.259 20.659 13 18 13zM8.983 6.633c1.707.234 3.512.913 4.514 1.709C15.632 10.04 16.894 11 18 11c.745 0 1.435-.207 2.042-.599-.611-.097-1.158-.31-1.548-.539-.557-.328-1.128-.767-1.732-1.231C15.156 7.397 13.337 6 11 6 10.214 6 9.641 6.176 8.983 6.633zM13 20c-1.858 0-3.489-1.297-5.748-3.092C5.732 15.7 2.246 15.287 1.7 15.714l-1.407-1.421C2.346 12.239 3.586 11 6 11c3.018 0 5.214 1.688 6.979 3.046.554.425 1.077.827 1.527 1.092.342.201 1.073.433 1.685.253.391-.115.689-.39.914-.838l1.834.789C17.879 18.259 15.659 20 13 20zM3.983 13.633c1.707.234 3.512.913 4.514 1.709C10.632 17.04 11.894 18 13 18c.745 0 1.435-.207 2.042-.599-.611-.097-1.158-.31-1.548-.539-.557-.328-1.128-.767-1.732-1.231C10.156 14.397 8.337 13 6 13 5.214 13 4.641 13.176 3.983 13.633z"></path>
                                </svg>
                                <p>Tailwind CSS</p>
                            </div>
                            <div className="bootstrap" style={{ color: 'magenta' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 48 48">
                                    <path fill="#7c4dff" d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"></path><path fill="#fff" d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"></path>
                                </svg>
                                <p>Bootstrap</p>
                            </div>
                            <div className="express" style={{ color: '#AA336A' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 40 40">
                                    <path fill="#b0c1d4" d="M37.005,31.5c-0.975,0-1.91-0.463-2.502-1.237l-5.599-7.321l-5.6,7.321 c-0.592,0.774-1.527,1.237-2.502,1.237h-2.22l8.433-11.028L18.625,9.5h2.22c0.975,0,1.911,0.462,2.502,1.236l5.556,7.266 l5.557-7.266C35.051,9.962,35.987,9.5,36.962,9.5h2.22l-8.391,10.972L39.225,31.5H37.005z"></path><path fill="#66798f" d="M38.17,10l-8.008,10.472L38.213,31h-1.208c-0.825,0-1.604-0.385-2.105-1.04l-5.996-7.841 l-5.996,7.841c-0.501,0.656-1.28,1.04-2.105,1.04h-1.208l8.051-10.528L19.636,10h1.208c0.825,0,1.604,0.385,2.105,1.04l5.954,7.785 l5.954-7.785c0.501-0.656,1.28-1.04,2.105-1.04H38.17 M40.194,9H38.17h-1.208c-1.129,0-2.213,0.536-2.899,1.433l-5.159,6.747 l-5.159-6.747C23.058,9.536,21.974,9,20.845,9h-1.208h-2.024l1.229,1.607l7.544,9.865l-7.586,9.92L17.57,32h2.024h1.208 c1.129,0,2.213-0.536,2.899-1.433l5.202-6.803l5.202,6.803C34.791,31.464,35.875,32,37.005,32h1.208h2.024l-1.229-1.607 l-7.586-9.92l7.544-9.865L40.194,9L40.194,9z"></path><g><path fill="#b0c1d4" d="M10,32.5c-5.238,0-9.5-4.409-9.5-9.828v-4.345C0.5,12.909,4.762,8.5,10,8.5s9.5,4.408,9.5,9.827 v4.172L3.5,22.5v0.172c0,3.765,2.916,6.828,6.5,6.828c1.977,0,3.893-0.996,5.125-2.663c0.628-0.851,1.551-1.338,2.532-1.338h1.469 l-0.248,0.673C17.484,29.957,13.917,32.5,10,32.5z M16.5,19.5v-1.173c0-3.765-2.916-6.827-6.5-6.827s-6.5,3.062-6.5,6.827V19.5 H16.5z"></path><path fill="#66798f" d="M10,9c4.962,0,9,4.185,9,9.327V22L3,22v0.672C3,26.713,6.14,30,10,30 c2.188,0,4.223-1.102,5.527-2.866C16.035,26.447,16.802,26,17.657,26l0.752,0c0,0,0,0,0.001,0.001c-1.322,3.588-4.704,6-8.41,6 c-4.962,0-9-4.185-9-9.328v-4.345C1,13.185,5.038,9,10,9 M3,20h14v-1.673C17,14.287,13.86,11,10,11s-7,3.287-7,7.327V20 M10,8 C4.486,8,0,12.633,0,18.327v4.345C0,28.367,4.486,33,10,33c4.125,0,7.881-2.674,9.348-6.654l0.495-1.344L18.411,25L17.658,25 c-1.142,0-2.211,0.561-2.935,1.54C13.584,28.08,11.819,29,10,29c-3.204,0-5.83-2.663-5.992-6L19,23l1,0v-1v-3.672 C20,12.633,15.514,8,10,8L10,8z M4,19v-0.673C4,14.838,6.692,12,10,12s6,2.838,6,6.327V19H4L4,19z"></path></g>
                                </svg>
                                <p>Express.js</p>
                            </div>
                        </section>
                    </div>
                    <div className="tools">
                        <section style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                            <h3 style={{ color: 'purple' }}>▶</h3>
                            <h3>Tools</h3>
                        </section>
                        <section className='logo'>
                            <div className="vscode" style={{ color: '#0077b6' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                                    <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path><path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                                </svg>
                                <p>VS code</p>
                            </div>
                            <div className="mongo" style={{ color: 'green' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43" height="43" viewBox="0 0 48 48">
                                    <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
                                </svg>
                                <p>MongoDB</p>
                            </div>
                            <div className="figma" style={{ color: 'red' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 48 48">
                                    <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
                                </svg>
                                <p>Figma</p>
                            </div>
                            <div className="illustrator" style={{ color: 'brown' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43" height="43" viewBox="0 0 48 48">
                                    <path fill="#FF5722" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"></path><path fill="#1C0802" d="M9,9v30h30V9H9z M23.691,31l-0.762-2.91h-3.916L18.252,31h-3.037l4.443-14.219h2.627L26.758,31H23.691z M30.85,31h-2.773V20.434h2.773V31z M30.552,18.754c-0.271,0.28-0.636,0.42-1.099,0.42s-0.828-0.14-1.099-0.42s-0.405-0.632-0.405-1.055c0-0.43,0.137-0.781,0.41-1.055s0.639-0.41,1.094-0.41s0.82,0.137,1.094,0.41s0.41,0.625,0.41,1.055C30.957,18.122,30.822,18.474,30.552,18.754z"></path><path fill="#1C0802" d="M19.639 25.697L22.295 25.697 20.967 20.629z"></path>
                                </svg>
                                <p>Illustrator</p>
                            </div>
                        </section>
                    </div>
                </div >

            </section >
            <div className="resume">
                <h2 className="head">my resume</h2>
                <a href={res} download>
                    <button className="btn2" href={res} download>Download Resume</button>
                </a>
            </div >
            <div className='exp'>
                <h2>experience</h2>
                <div className='exp-con'>
                    <div className='exp-card '>
                        <div className=''>
                            <img src={destov} width='90px' height='90px' />
                        </div>
                        <div className='destov'>
                            <div className='title'>
                                Destov Tech
                            </div>
                            <div className='role font-semibold'>
                                MERN Developer Intern
                            </div>
                            <div className='time'>
                                Feb 24 - Present
                            </div>
                        </div>
                    </div>
                    <div className='exp-card '>
                        <div className=''>
                            <img style={{ objectFit: 'contain' }} src='https://motioncut.shop/wp-content/uploads/2024/02/gfrhbjnm.png'
                                width='120px' height='90px' />
                        </div>
                        <div className='destov'>
                            <div className='title'>
                                Motion Cut
                            </div>
                            <div className='role font-semibold'>
                                Web Developer Intern
                            </div>
                            <div className='time'>
                                Feb 24 - Mar 24
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}