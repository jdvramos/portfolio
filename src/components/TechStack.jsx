import Wrapper from "../assets/wrappers/TechStack";
import HTML from "../assets/images/html.PNG";
import CSS from "../assets/images/css.PNG";
import JavaScript from "../assets/images/javascript.PNG";
import ReactJS from "../assets/images/react.PNG";
import NodeJS from "../assets/images/nodejs.PNG";
import ExpressJS from "../assets/images/expressjs.PNG";
import MongoDB from "../assets/images/mongodb.PNG";
import MySQL from "../assets/images/mysql.PNG";
import PostgreSQL from "../assets/images/postgresql.PNG";
import MUI from "../assets/images/mui.PNG";
import Bootstrap from "../assets/images/bootstrap.PNG";
import StyledComponents from "../assets/images/styled-components.PNG";
import Vite from "../assets/images/vite.PNG";
import ReduxToolkit from "../assets/images/redux.PNG";
import ReactQuery from "../assets/images/react-query.PNG";
import Git from "../assets/images/git.PNG";
import GitHub from "../assets/images/github.PNG";
import SocketIO from "../assets/images/socket.PNG";

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
                        <img src={Vite} alt="" />
                    </div>
                    <span className="tech-stack-name">Vite</span>
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
