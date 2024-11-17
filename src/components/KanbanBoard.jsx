import React from 'react';
import "../styles/KanbanBoard.css";
import done from '../assets/Done.svg';
import medium from '../assets/Img - Medium Priority.svg';
import dots from '../assets/3 dot menu.svg';
import KanbanColumn from './KanbanColumn';

const KanbanBoard = () => {
    const data = [
        {
            colImg:medium,
            colTitle:"Medium",
            NumOfCards:3,
            tasks: [
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
            ]
        },
        {
            colImg:medium,
            colTitle:"Medium",
            NumOfCards:3,
            tasks: [
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
            ]
        },
        {
            colImg:medium,
            colTitle:"Medium",
            NumOfCards:3,
            tasks: [
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
            ]
        },
        {
            colImg:medium,
            colTitle:"Medium",
            NumOfCards:3,
            tasks: [
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
            ]
        },
        {
            colImg:medium,
            colTitle:"Medium",
            NumOfCards:3,
            tasks: [
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
            ]
        },
    ]
    
  return (
    <div className="kanban-board">
        {data.map((group,index) => (
          <KanbanColumn key={index} group={group} />
        ))}
      </div>
  );
}

export default KanbanBoard;
