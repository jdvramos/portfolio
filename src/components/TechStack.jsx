import Wrapper from "../assets/wrappers/TechStack";
import HTML from "/html.png";
import CSS from "/css.png";
import JavaScript from "/javascript.png";
import ReactJS from "/react.png";
import NodeJS from "/nodejs.png";
import ExpressJS from "/expressjs.png";
import MongoDB from "/mongodb.png";
import MySQL from "/mysql.png";
import PostgreSQL from "/postgresql.png";
import TypeScript from "/typescript.png";
import ReduxToolkit from "/redux.png";
import ReactQuery from "/react-query.png";
import Vite from "/vite.png";
import NextJS from "/nextjs.png";
import Tailwind from "/tailwind.png";
import Bootstrap from "/bootstrap.png";
import MUI from "/mui.png";
import StyledComponents from "/styled-components.png";
import Git from "/git.png";
import GitHub from "/github.png";
import SocketIO from "/socket.png";

const TechStack = () => {
    return (
        <Wrapper>
            <h2 className="section-title">my tech stack</h2>
            <div className="tech-stack-container">
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={HTML} alt="" />
                    </div>
                    <span className="tech-stack-name">HTML</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={CSS} alt="" />
                    </div>
                    <span className="tech-stack-name">CSS</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={JavaScript} alt="" />
                    </div>
                    <span className="tech-stack-name">JavaScript</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={ReactJS} alt="" />
                    </div>
                    <span className="tech-stack-name">React.js</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={NodeJS} alt="" />
                    </div>
                    <span className="tech-stack-name">Node.js</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={ExpressJS} alt="" />
                    </div>
                    <span className="tech-stack-name">Express.js</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={MongoDB} alt="" />
                    </div>
                    <span className="tech-stack-name">MongoDB</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={MySQL} alt="" />
                    </div>
                    <span className="tech-stack-name">MySQL</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={PostgreSQL} alt="" />
                    </div>
                    <span className="tech-stack-name">PostgreSQL</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={TypeScript} alt="" />
                    </div>
                    <span className="tech-stack-name">TypeScript</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={ReduxToolkit} alt="" />
                    </div>
                    <span className="tech-stack-name">Redux Toolkit</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={ReactQuery} alt="" />
                    </div>
                    <span className="tech-stack-name">React Query</span>
                </div>

                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={Vite} alt="" />
                    </div>
                    <span className="tech-stack-name">Vite</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={NextJS} alt="" />
                    </div>
                    <span className="tech-stack-name">Next.js</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={Tailwind} alt="" />
                    </div>
                    <span className="tech-stack-name">Tailwind CSS</span>
                </div>

                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={Bootstrap} alt="" />
                    </div>
                    <span className="tech-stack-name">Bootstrap</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={MUI} alt="" />
                    </div>
                    <span className="tech-stack-name">Material UI</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={StyledComponents} alt="" />
                    </div>
                    <span className="tech-stack-name">styled-components</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={Git} alt="" />
                    </div>
                    <span className="tech-stack-name">Git</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={GitHub} alt="" />
                    </div>
                    <span className="tech-stack-name">GitHub</span>
                </div>
                <div className="tech-stack-item">
                    <div className="tech-stack-icon">
                        <img src={SocketIO} alt="" />
                    </div>
                    <span className="tech-stack-name">Socket.IO</span>
                </div>
            </div>
        </Wrapper>
    );
};

export default TechStack;
