import "../styles/KanbanBoard.css";
import KanbanColumn from './KanbanColumn';

const KanbanBoard = (props) => {
    const data = props.groupedData;
    const groupBy = props.groupBy;
  
  return (
    <div className="kanban-board">
        {data.map((group,index) => (
          <KanbanColumn key={index} group={group}  groupBy={groupBy}/>
        ))}
      </div>
  );
}

export default KanbanBoard;
