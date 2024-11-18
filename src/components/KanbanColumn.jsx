import '../styles/KanbanColumn.css';
import KabanCard from './KanbanCard.jsx';
import dots from '../assets/3 dot menu.svg';
import add from '../assets/add.svg';

const KanbanColumn = (props) => {
    const backgroColor = () => {
        let a = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let c = Math.floor(Math.random() * 255);
        return `rgb(${a},${b},${c})`
    }
    const backCol = backgroColor();
    const data = props.group;
    const tasks = data.tasks;
    const groupBy = props.groupBy;
    return (
        <div className="kanban-column">
            <div className="column-header">
                <div className="header-left">
                    <div className="priority-indicator">
                        <span className="indicator-bar">
                            {groupBy === "User" ? <span style={{
                                backgroundColor: backCol,
                                color: "white",
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "12px",
                                fontWeight: "500",
                                margin: "0 10px",
                                marginTop: "-8px"

                            }}>{tasks[0]?.dpName}</span>
                                : <img src={data.colImg} alt="" />}
                        </span>
                        <span className="priority-text" style={{ marginLeft: groupBy === "User" ? "26px" : 0 }}>{data.colTitle}</span>
                    </div>
                    <span className="task-count">{data.NumOfCards}</span>
                </div>
                <div className="header-right">
                    <button className="add-button">
                        <img src={add} alt="add" />
                    </button>
                    <button className="more-button">
                        <img src={dots} alt="more" />
                    </button>
                </div>
            </div>

            <div className="tasks-container">
                {tasks.map((task, index) => (
                    <div key={index} style={{ width: "90%" }}>
                        <KabanCard task={task} groupBy={groupBy} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanbanColumn;