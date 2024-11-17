import '../styles/KanbanCard.css';

const KanbanCard = (props) => {
    const data = props.task;
    const backgroColor = () => {
        let a = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let c = Math.floor(Math.random() * 255);
        return `rgb(${a},${b},${c})`
    }
    const backCol = backgroColor();

    return (
        <div className="card">
            <div className="card-content">
                <div className="header-section">
                    <span className="cam-text">{data.cardId}</span>
                    <div className="status-circle">
                        <span className="userDp" style={{ backgroundColor: backCol }}>{data.dpName}</span>
                        <div className="status-dot" style={{ background: data.statusBackGround }}></div>
                    </div>
                </div>

                <div className="title-section">
                    <div className="checkbox">
                        <img src={data.done} alt="check icon" />
                    </div>
                    <h2 className="card-title">{data.cardTitle}</h2>
                </div>

                <div className="footer-section">
                    <div className="menu-dots">
                        <img src={data.dots} alt="three dots" />
                    </div>
                    <div className="feature-tag">
                        <div className="tag-circle"></div>
                        <span className="tag-text">{data.featureRequest}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KanbanCard;