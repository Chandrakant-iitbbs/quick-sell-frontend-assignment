import React from 'react';
import '../styles/KanbanColumn.css';
import KabanCard from './KanbanCard.jsx';
import done from '../assets/Done.svg';
import dots from '../assets/3 dot menu.svg';
import add from '../assets/add.svg';
import medium from '../assets/Img - Medium Priority.svg';

const KanbanColumn = () => {
    const data = {
        colImg:medium,
        colTitle:"Medium",
        NumOfCards:3,
    }

    const tasks = [
        {
            cardId: 'CAM-6',
            cardTitle: 'Enhance Search Functionality',
            featureRequest: "Feature Request",
            done: done,
            statusBackGround: "yellow",
            dpName: "CK",
            dots: dots
        },
        {
            cardId: 'CAM-8',
            cardTitle: 'Enhance Search Functionality',
            featureRequest: "Feature Request",
            done: done,
            statusBackGround: "yellow",
            dpName: "CK",
            dots: dots
        },
    ];

    return (
        <div className="kanban-column">
            <div className="column-header">
                <div className="header-left">
                    <div className="priority-indicator">
                        <span className="indicator-bar">
                            <img src={data.colImg} alt="medium" />
                        </span>
                        <span className="priority-text">{data.colTitle}</span>
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
                {tasks.map((task,index) => (
                    <div key={index} style={{width:"90%"}}>
                        <KabanCard task={task}  />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanbanColumn;